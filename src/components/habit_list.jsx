import React, { Suspense } from 'react'
import Habit from "./habit";
import { app, firestore } from '../base';
import { useCollectionData } from "react-firebase-hooks/firestore";

const HabitList = () => {
  const habitsRef = firestore.collection("habits"); // this is the colletion in the firestore
  const [habits, loading, error] = useCollectionData(
    habitsRef
      .where("uid", "==", app.auth().currentUser.uid)
      .orderBy("createdAt"),
    { idField: "id" }
  ); // attach with unique id and so on

  if (loading) {
    console.log("loading");
  }
  if (error) {
    console.log(error.message);
  }


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
