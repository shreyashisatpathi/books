import { useState } from "react";
import BookEdit from "./BookEdit";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

export default function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    onDelete(book.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };
  let content = book.title;
  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} onEdit={onEdit} />;
  }
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border-2 border-t-black-500">
      <div className="flex gap-6 p-4 flex-row-reverse">
        <button className="edit" onClick={handleEditClick}>
          <FaEdit size='1em'/>
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          <FaTrashAlt size='1em'/>
        </button>
      </div>
      <img
        className="object-scale-down "
        alt="books"
        h-30
        w-40
        src={`https://picsum.photos/seed/${book.id}/384/424`}
      />
      <div className='pt-4 pb-4  sm:text-left md:text-center'>{content}</div>
    </div>
  );
}
