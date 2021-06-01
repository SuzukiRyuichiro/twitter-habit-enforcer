import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddHabit = () => {
  const [input, setInput] = useState("");
  const firestore = firebase.firestore();
  const habitsRef = firestore.collection("habits"); // this is the colletion in the firestore

  const addHabit = async (e) => {
    e.preventDefault();

    const { uid } = firebase.auth().currentUser;

    await habitsRef.add({
      content: input,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
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
          />
          <button type="submit" className="habit-submit btn btn-light">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddHabit;
