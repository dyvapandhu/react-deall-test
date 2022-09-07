import { useContext, useState } from "react";
import FavoritesContext from "../store/favorites-context";
import ModalDetail from "../components/ModalDetail";
import BookList from "../components/book/BookList";

function BookmarkPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const favoritesContextObj = useContext(FavoritesContext)
  const favorites = favoritesContextObj.favorites

  function showBookDetail(book) {
    setSelectedBook(book);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <div className="container mx-auto">
      <div className="mt-3 grid grid-cols-2 gap-6 xs:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6">
        <BookList
          books={favorites}
          search=""
          showBookDetail={showBookDetail}
        />
      </div>
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

export default BookmarkPage;
