import React from "react";
import { useState } from "react";
import BookCreate from "./components/BookCreate";
//import Input from "./components/Input";
import BookList from "./components/BookList";

export default function App() {
  const [books, setBook] = useState([]);
  //const [colours, setColour] = useState([]);
  const editBookById = (id, newtitle) => {
    const updatedTitle = books.map((book) => {
      if (book.id === id) {
      return { ...book, title :newtitle };
     }
     return book;
    });
    setBook(updatedTitle);
  };
  const deleteBook = (id) => {
    const updatedbooks = books.filter((book) => {
      return book.id !== id;
    });
    console.log("id is ", id, "deleted bookList", updatedbooks);
    setBook(updatedbooks);
  };
  // const addColour =(newColour)=>{
  //   const updatedColours = [
  //      ...colours,
  //      newColour
  //    ];
  //    setColour(updatedColours)
  // }

  // const renderColour =colours.map((colour,i)=>{
  //   return (
  //     <li key={i}>{colour}</li>
  //   )
  // })
  const createBook = (title) => {
    const updateBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ];
    setBook(updateBooks);
  };
  return (  
    <div className="ml-4">
      <BookCreate onCreate={createBook} />
      <BookList onEdit= {editBookById} books={books} onDelete={deleteBook} />
      {/* <Input onSubmit ={addColour}/>  */}
      <ul>{/* { renderColour} */}</ul>
    </div>
  );
}
