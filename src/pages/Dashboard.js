import axios from "axios";
import { useEffect, useState } from "react";
import SearchField from "../components/SearchField";
import BookList from "../components/book/BookList";
import BookSkeletonList from "../components/book/BookSkeletonList";
import CategoryList from "../components/category/CategoryList";
import ModalDetail from "../components/ModalDetail";

function DashboardPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(null);
  const [categoryName, setCategoryName] = useState(null);
  const [page, setPage] = useState(0);
  const [size] = useState(10);
  const [isLastPage, setIsLastPage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    axios.get("/fee-assessment-categories").then((res) => {
      setCategories(res.data);
      handleSelectCategory(res.data[0])
    });
  }, []);

  useEffect(() => {
    if (categoryId) {
      setIsLoading(true);
      axios
        .get(
          `/fee-assessment-books?categoryId=${categoryId}&page=${page}&size=${size}`
        )
        .then((res) => {
          setBooks((prevBooks) => [
            ...prevBooks.map((book) => {
              book.category_name = categoryName;
              return book;
            }),
            ...res.data.map((book) => {
              book.category_name = categoryName;
              return book;
            }),
          ]);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log("err", err);
          setIsLastPage(true);
          setIsLoading(false);
        });
    }
  }, [categoryId, page, size, categoryName]);

  function handleSelectCategory(category) {
    setCategoryName(category.name);
    setIsLastPage(false);
    setPage(0);
    setBooks([]);
    setCategoryId(category.id);
  }

  function showBookDetail(book) {
    setSelectedBook(book);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function loadMore() {
    setPage((prevPage) => prevPage + 1);
  }

  function handleSearch(search) {
    setSearch(search);
    setIsLastPage(true);
  }

  return (
    <div className="container mx-auto">
      <div className="sticky top-0 rounded bg-white">
        <SearchField doSearch={handleSearch} />
        <CategoryList
          categoryId={categoryId}
          categories={categories}
          handleSelectCategory={handleSelectCategory}
        />
      </div>
      <div className="mt-3 grid grid-cols-2 gap-6 xs:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6">
        <BookList
          books={books}
          search={search}
          showBookDetail={showBookDetail}
        />
        {isLoading ? <BookSkeletonList /> : null}
      </div>
      {categoryId && books.length > 0 && !isLastPage ? (
        <div className="text-center">
          <button
            type="button"
            className="m-1 py-2 px-3 text-xs font-medium border hover:text-white border rounded hover:bg-gray-900 focus:ring-1 focus:outline-none focus:ring-gray-300"
            onClick={loadMore}
          >
            Load More
          </button>
        </div>
      ) : null}
      {selectedBook ? (
        <ModalDetail
          isModalOpen={isModalOpen}
          book={selectedBook}
          closeModal={closeModal}
        />
      ) : null}
    </div>
  );
}

export default DashboardPage;
