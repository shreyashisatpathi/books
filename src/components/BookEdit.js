import React, { useState } from "react";

export default function BookEdit({book,onEdit,onSubmit}) {
  const [title, setTitle] = useState(book.title);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit= (e)=>{
    e.preventDefault();
    onEdit(book.id,title)
    onSubmit()
  }
  return (

      <form className='w-full max-w-sm'
      onSubmit={handleSubmit}
        >
      <div className="md:flex md:items-center my-2">
        <label className="px-2 font-mono font-bold text-xl">Title</label>
        <input className="pl-1" value={title} onChange={handleChange}></input>
        <button className="rounded-full bg-sky-500  text-white ml-2 p-1">Save</button>
        </div>
      </form>
  
  );
}
