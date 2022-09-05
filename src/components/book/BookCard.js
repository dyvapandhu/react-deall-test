function BookCard() {
  return (
    <div className="items-center bg-white rounded-lg border shadow-md mb-4">
      <div className="flex flex-col-3">
        <img
          className="rounded-t-lg"
          src="https://marketplace.canva.com/EAFH7NLjpu4/1/0/1003w/canva-orange-minimalist-desert-illustration-novel-book-cover-P8mQayZZwXI.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col">
        <p className="px-4 mt-2 mb-2 text-base font-bold tracking-tight text-gray-900">
          Noteworthy technology acquisitions 2021
        </p>
        <p className="px-4 mb-3 text-xs text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
    </div>
  );
}

export default BookCard;
