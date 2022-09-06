import BookItem from "./BookItem";
function BookList(props) {
  return (
    <>
      {props.books
        .filter(
          (book) =>
            book.title
              .trim()
              .toLowerCase()
              .includes(props.search.trim().toLowerCase()) ||
            book.authors[0]
              .trim()
              .toLowerCase()
              .includes(props.search.trim().toLowerCase())
        )
        .map((book) => {
          return (
            <BookItem
              key={book.id}
              data={book}
              showDetail={() => props.showBookDetail(book)}
            />
          );
        })}
    </>
  );
}

export default BookList;
