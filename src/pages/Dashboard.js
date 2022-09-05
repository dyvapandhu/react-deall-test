import BookCard from "../components/book/BookCard";

function DashboardPage() {
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
