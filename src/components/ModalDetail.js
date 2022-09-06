import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function ModalDetail(props) {
  function closeModal() {
    props.closeModal();
  }

  return (
    <>
      <Transition appear show={props.isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
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
                  <div className="overflow-auto mt-2 grid grid-cols-2 gap-6 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                    <div className="flex flex-col-3">
                      <img
                        className="rounded"
                        src={props.book.cover_url}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="font-bold text-base">
                        {props.book.authors[0]}
                      </p>
                      <p className="mb-4 font-bold text-xs">
                        {props.book.category_name}
                      </p>
                      <p className="mb-1 font-bold text-xs">What's it about?</p>
                      <p className="mb-3 text-xs">{props.book.description}</p>
                      <p className="mb-1 font-bold text-xs">What's inside?</p>
                      <ol className="list-decimal list-inside text-xs">
                        {props.book.sections.map((section, index) => {
                          return <li key={index}>{section.title}</li>;
                        })}
                        {/* <li>
                          You might feel like you are being really "organized" o
                        </li>
                        <li>
                          Nested navigation in UIs is a bad idea too, keep
                          things as flat as possible.
                        </li>
                        <li>
                          Nesting tons of folders in your source code is also
                          not helpful.
                        </li> */}
                      </ol>
                    </div>
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
