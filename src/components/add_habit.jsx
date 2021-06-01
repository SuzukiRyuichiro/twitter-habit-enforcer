import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/firestore";


const AddHabit = () => {
  const [input, setInput] = useState('');

  const handleClick = () => {
    console.log('hello');
  }

  return (
  <div>
    <input type="text" value={input} onChange={e => setInput(e.currentTarget.value)} />
    <button className="btn btn-primary" onClcik={handleClick}>Submit</button>
  </div>
  )
}

export default AddHabit;
