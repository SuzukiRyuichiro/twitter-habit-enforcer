import React, { useState } from "react";
import { app } from '../base';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddHabit = () => {
  const [input, setInput] = useState("");
  const firestore = app.firestore();
  const habitsRef = firestore.collection("habits"); // this is the colletion in the firestore

  const addHabit = async (e) => {
    e.preventDefault();

    const { uid } = app.auth().currentUser;

    await habitsRef.add({
      content: input,
      createdAt: app.firestore.FieldValue.serverTimestamp(),
      complete: false,
      uid,
    });

    setInput("");
  };

  return (
    <div>
      <form onSubmit={addHabit}>
        <div className="search-form-control form-group">
          <input
            type="text"
            className="form-control string required habit-form"
            value={input}
            onChange={(e) => setInput(e.currentTarget.value)}
            name="new-habit"
          />
          <button type="submit" className="habit-submit btn btn-light" aria-label="add">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddHabit;
