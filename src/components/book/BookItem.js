import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

function BookCard(props) {
  const favoritesContextObj = useContext(FavoritesContext);
  const isItemFavorite = favoritesContextObj.isItemFavorite(props.data.id);

  function showDetail() {
    props.showDetail();
  }
  return (
    <div
      className="items-center bg-white rounded-lg border cursor-pointer shadow-md mb-4"
      onClick={showDetail}
    >
      <div className="flex flex-col-3">
        <img className="rounded-t-lg" src={props.data.cover_url} alt="" />
        {isItemFavorite ? (
          <svg
            aria-hidden="true"
            className="absolute w-5 h-5 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              clipRule="evenodd"
            ></path>
          </svg>
        ) : null}
      </div>
      <div className="flex flex-col">
        <p className="px-4 mt-2 mb-2 text-small truncate font-bold tracking-tight text-gray-900">
          {props.data.authors[0]}
        </p>
        <p className="px-4 mb-3 text-xs text-gray-700 dark:text-gray-400">
          {props.data.category_name}
        </p>
      </div>
    </div>
  );
}

export default BookCard;
