import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";

export default function ModalDetail(props) {
  const favoritesContextObj = useContext(FavoritesContext);
  const isItemFavorite = favoritesContextObj.isItemFavorite(props.book.id);

  function handleSwitchFavorite() {
    if (isItemFavorite) {
      favoritesContextObj.removeFavorite(props.book.id);
    } else {
      favoritesContextObj.addFavorite(props.book);
    }
  }

  function closeModal() {
    props.closeModal();
  }

  function getDuration(audioLength) {
    return Math.floor(audioLength / 60);
  }

  function generateFavClass() {
    return isItemFavorite ? "bg-red-500 text-white" : "text-black bg-white";
  }

  return (
    <>
      <Transition appear show={props.isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30" />
          </Transition.Child>

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <div className="flex min-h-full items-center justify-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-auto rounded-2xl bg-white p-4 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-lg font-bold">
                    <span>{props.book.title}</span>
                  </Dialog.Title>
                  <button
                    type="button"
                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    data-modal-toggle="popup-modal"
                    onClick={closeModal}
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                  <div className="mt-2 grid grid-cols-2 gap-6 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                    <div className="flex flex-col-3">
                      <img
                        className="rounded"
                        src={props.book.cover_url}
                        alt=""
                      />
                      {isItemFavorite ? (
                        <svg
                          aria-hidden="true"
                          className="absolute w-8 h-8 mr-2 text-yellow-500"
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
                      <p className="font-bold text-base">
                        {props.book.authors[0]}
                      </p>
                      <p className="mb-2 font-bold text-xs">
                        {props.book.category_name}
                      </p>
                      <div>
                        <hr />
                        <p className="mb-1 mt-1 font-bold text-xs">
                          {`${
                            props.book.sections.length
                          } chapters | ${getDuration(
                            props.book.audio_length
                          )} min`}
                        </p>
                        <hr />
                        <p className="mt-3 mb-1 font-bold text-xs">
                          What's it about?
                        </p>
                      </div>
                      <p className="mb-3 text-xs">{props.book.description}</p>
                      <p className="mb-1 font-bold text-xs">What's inside?</p>
                      <ol className="list-decimal list-inside text-xs">
                        {props.book.sections.map((section, index) => {
                          return <li key={index}>{section.title}</li>;
                        })}
                      </ol>
                    </div>
                    <button
                      type="button"
                      className={`${generateFavClass()} text-xs px-5 py-2 inline-flex justify-center items-center border hover:text-white border rounded hover:bg-gray-900 focus:ring-1 focus:outline-none focus:ring-gray-300`}
                      onClick={handleSwitchFavorite}
                    >
                      {!isItemFavorite ? (
                        <svg
                          aria-hidden="true"
                          className="w-5 h-3 mr-2 text-yellow-500"
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
                      <span>
                        {isItemFavorite ? "Remove to Fav" : "Add to Fav"}
                      </span>
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
