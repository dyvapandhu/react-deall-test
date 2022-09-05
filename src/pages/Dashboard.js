import BookCard from "../components/book/BookCard";
import axios from "axios";
import { useEffect } from "react";

function DashboardPage() {
  useEffect(() => {
    axios.get("/fee-assessment-categories").then((res) => {
      console.log('data', JSON.stringify(res.data))
    });
  });

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </div>
  );
}

export default DashboardPage;
