function BookCard(props) {
  return (
    <div className="items-center bg-white rounded-lg border cursor-pointer shadow-md mb-4">
      <div className="flex flex-col-3">
        <img className="rounded-t-lg" src={props.data.cover_url} alt="" />
      </div>
      <div className="flex flex-col">
        <p className="px-4 mt-2 mb-2 text-base font-bold tracking-tight text-gray-900">
          {props.data.title}
        </p>
        <p className="px-4 mb-3 text-xs text-gray-700 dark:text-gray-400">
          {props.data.description}
        </p>
      </div>
    </div>
  );
}

export default BookCard;
