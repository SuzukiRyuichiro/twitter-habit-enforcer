import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { app } from '../base';

const Habit = (props) => {
  const [habitCompletion, setHabitCompletion] = useState(props.habit.complete);
  const habitContent = habitCompletion ? "done text-muted" : "not-done";
  const firestore = app.firestore();
  const habitsRef = firestore.collection("habits"); // this is the colletion in the firestore

  // function that set the state for the front end but also save the state to the firestore
  const saveCompletionState = () => {
    setHabitCompletion(!habitCompletion); // change the state in the React world
    // console.log(document.querySelector(`#${props.habit.id}`));
    habitsRef.doc(props.habit.id).update({ complete: !habitCompletion });
  }

  return (
    <div className="habit-card">
      <div className="round">
        <input
          type="checkbox"
          id={props.habit.id}
          defaultChecked={props.habit.complete}
          onClick={() => saveCompletionState()}
        />
        <label htmlFor={props.habit.id}></label>
      </div>
      <h2 className={`habit-content ${habitContent}`}>{props.habit.content}</h2>
      <FontAwesomeIcon
        icon={faTrashAlt}
        onClick={() => props.deleteHabit(props.habit)}
      />
    </div>
  );
};

export default Habit;
