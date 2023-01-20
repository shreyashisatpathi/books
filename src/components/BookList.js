import BookShow from "./BookShow";

export default function BookList({ books,onDelete,onEdit }) {
  const renderedList = books.map((book) => {
    return <BookShow onEdit= {onEdit} onDelete ={onDelete} key={book.id} book={book}  />;
  });
  return <div className="grid grid-cols-3 gap-4">{renderedList}</div>;
}
