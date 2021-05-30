import React, { useState } from "react";

import Habit from "./habit";
import AddHabit from "./add_habit";

import firebase from "firebase/app";
import "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const HabitList = () => {
  const firestore = firebase.firestore();
  const habitsRef = firestore.collection("habits"); // this is the colletion in the firestore
  console.log(habitsRef.where("uid", "==", firebase.auth().currentUser.uid));
  const [habits] = useCollectionData(
    habitsRef.where("uid", "==", firebase.auth().currentUser.uid),
    { idField: "id" }
  ); // attach with unique id and so on
  const [input, setInput] = useState(""); // for the form

  const addHabit = async (e) => {
    e.preventDefault();

    const { uid } = firebase.auth().currentUser;

    await habitsRef.add({
      content: input,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
    });

    setInput("");
  };

  const deleteHabit = (habit) => {
    habitsRef
      .where("content", "==", habit.content)
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs[0].ref.delete();
      });
  };

  return (
    <div className="habit-main">
      <div className="habit-list">
        {habits &&
          habits.map((habit) => (
            <Habit habit={habit} key={habit.id} deleteHabit={deleteHabit} />
          ))}
      </div>
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
    </div>
  );
};

export default HabitList;
