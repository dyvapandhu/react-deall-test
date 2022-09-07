import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (book) => {},
  removeFavorite: (bookId) => {},
  isItemFavorite: (bookId) => {},
});

export function FavoritesContextProvider(props) {
  const [favBooks, setFavBooks] = useState([]);

  function addFavorite(book) {
    setFavBooks((prevFavBooks) => {
      return prevFavBooks.concat(book);
    });
  }

  function removeFavorite(bookId) {
    setFavBooks((prevFavBooks) => {
      return prevFavBooks.filter((book) => book.id !== bookId);
    });
  }

  function isItemFavorite(bookId) {
    return favBooks.some((book) => book.id === bookId);
  }

  const context = {
    favorites: favBooks,
    totalFavorites: favBooks.length,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
    isItemFavorite: isItemFavorite,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
