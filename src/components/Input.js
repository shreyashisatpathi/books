import React, { useState } from 'react'

export default function Input({onSubmit}) {
    const[input,setInput] = useState("")

    const handleSubmit =(event)=>{
     event.preventDefault();
     onSubmit(input)
     setInput('')
  }

    const handleChange=(event) => {
        setInput(event.target.value)
    }
  return (
    <div>
        <h3>Add a Colour</h3>
        <form onSubmit={handleSubmit}>
            <label>Colour</label> 
            <input type='text' 
             onChange={handleChange}>
         </input>
         <button>Submit</button>
        </form>
    </div>
  )
}
