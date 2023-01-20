import { useState } from "react";
import React from "react";

export default function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title);
    setTitle("");
  };
  return (
    <div className="mb-4 w-1/2">
    
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <h3 className="py-2 font-bold">Add a Book<div>
        Add a bus   </div></h3>
        <label className="font-bold"> Title</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={title}
          onChange={handleChange}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}
