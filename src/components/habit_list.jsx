import React, { useState } from "react";

import Habit from "./habit";

import firebase from "firebase/app";
import "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

const HabitList = () => {
  const firestore = firebase.firestore();
  const habitsRef = firestore.collection("habits"); // this is the colletion in the firestore
  const [habits, loading, error] = useCollectionData(
    habitsRef
      .where("uid", "==", firebase.auth().currentUser.uid)
      .orderBy("createdAt"),
    { idField: "id" }
  ); // attach with unique id and so on

  if (loading) {
    console.log("loading");
  }
  if (error) {
    console.log(error.message);
  }

  const [input, setInput] = useState(""); // for the form

  // function to add Habit on click
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

  // function to delete Habit on click
  const deleteHabit = (habit) => {
    habitsRef
      .doc(habit.id)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  // Actual component that'll be rendered
  return (
    <div className="habit-list">
      {habits &&
        habits.map((habit) => (
          <Habit habit={habit} key={habit.id} deleteHabit={deleteHabit} />
        ))}
    </div>
  );
};

export default HabitList;
