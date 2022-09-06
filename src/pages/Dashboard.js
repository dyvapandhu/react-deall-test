import BookCard from "../components/book/BookCard";
import axios from "axios";
import { useEffect, useState } from "react";
import BookSkeletonCard from "../components/book/BookSkeletonCard";
// import BookModal from "../components/book/BookModal";

function DashboardPage() {
  // const [isModalOpen, setIsModalOpen] = useState([]);
  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(null);
  const [categoryName, setCategoryName] = useState(null);
  const [page, setPage] = useState(0);
  const [size] = useState(10);
  const [isLastPage, setIsLastPage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios.get("/fee-assessment-categories").then((res) => {
      setCategories(res.data);
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
          setBooks((prevBooks, index) => [
            ...prevBooks.map((book) => {
              book.order = prevBooks.length + index +1
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

  function showBookDetail() {
    console.log("selected");
    // setIsModalOpen(true);
  }

  function loadMore() {
    setPage((prevPage) => prevPage + 1);
  }

  return (
    <div className="container mx-auto">
      <div className="sticky top-0">
        {categories.map((category) => {
          return (
            <button
              key={category.id}
              type="button"
              className="m-1 text-gray-900 py-2 px-3 text-xs font-medium hover:text-white bg-white hover:bg-gray-900 ring-1 focus:outline-none font-medium rounded-lg text-center"
              onClick={() => handleSelectCategory(category)}
            >
              {category.name}
            </button>
          );
        })}
      </div>
      <div className="mt-3 grid grid-cols-2 gap-6 xs:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6">
        {books.map((book) => {
          return (
            <BookCard
              key={book.id}
              data={book}
              showDetail={showBookDetail}
            />
          );
        })}
        {isLoading ? (
          <>
            <BookSkeletonCard />
            <BookSkeletonCard />
            <BookSkeletonCard />
            <BookSkeletonCard />
            <BookSkeletonCard />
            <BookSkeletonCard />
          </>
        ) : null}
      </div>
      {categoryId && books.length > 0 && !isLastPage ? (
        <div className="text-center">
          <button
            type="button"
            className="m-1 text-gray-900 py-2 px-3 text-xs font-medium hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-1 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            onClick={loadMore}
          >
            Load More
          </button>
        </div>
      ) : null}
      {/* <BookModal isModalOpen={isModalOpen} closeModal={closeModal} /> */}
    </div>
  );
}

export default DashboardPage;
