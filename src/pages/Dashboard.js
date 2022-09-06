import BookCard from "../components/book/BookCard";
import axios from "axios";
import { useEffect, useState } from "react";

function DashboardPage() {
  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("/fee-assessment-books?categoryId=1&page=0&size=10")
      .then((res) => {
        setBooks(res.data);
      });
  }, []);

  useEffect(() => {
    axios.get("/fee-assessment-categories").then((res) => {
      setCategories(res.data);
    });
  }, []);

  return (
    <div className="container mx-auto">
      {categories.map((category) => {
        return (
          <button
            key={category.id}
            type="button"
            className="m-1 text-gray-900 py-2 px-3 text-xs font-medium hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >
            {category.name}
          </button>
        );
      })}
      <div className="mt-3 grid grid-cols-2 gap-6 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {books.map((book) => {
          return <BookCard key={book.id} data={book} />;
        })}
      </div>
    </div>
  );
}

export default DashboardPage;
