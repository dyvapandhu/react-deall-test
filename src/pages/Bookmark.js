import { useContext, useState } from "react";
import FavoritesContext from "../store/favorites-context";
import ModalDetail from "../components/ModalDetail";
import BookList from "../components/book/BookList";
import illustration from "../assets/svg/no_data.svg";
import { useNavigate } from "react-router-dom";

function BookmarkPage() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const favoritesContextObj = useContext(FavoritesContext);
  const favorites = favoritesContextObj.favorites;

  function showBookDetail(book) {
    setSelectedBook(book);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <div className="container mx-auto">
      {favorites.length <= 0 ? (
        <div className="mt-10">
          <img
            className="mx-auto max-w-xs h-auto rounded-lg"
            src={illustration}
            alt=""
          />
          <p className="mt-4 font-bold text-center">
            Ops, your bookmark is empty
          </p>
          <p className="font-base text-center">Wanna add some books?</p>
          <div className="text-center">
            <button
              type="button"
              className="m-1 py-2 px-3 text-xs font-medium border hover:text-white border rounded hover:bg-gray-900 focus:ring-1 focus:outline-none focus:ring-gray-300"
              onClick={() => navigate("/")}
            >
              Let's Go
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-3 grid grid-cols-2 gap-6 xs:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6">
          <BookList
            books={favorites}
            search=""
            showBookDetail={showBookDetail}
          />
        </div>
      )}
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
