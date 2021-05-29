import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

const Habit = (props) => {
  const [habitCompletion, setHabitCompletion] = useState(false);
  const habitContent = habitCompletion ? 'done text-muted' : 'not-done';

  return (
    <div className="habit-card">
        <div className="round">
          <input type="checkbox" id={props.habit.id} onClick={() => setHabitCompletion(!habitCompletion)}/>
          <label for={props.habit.id}></label>
        </div>
        <h2 className={`habit-content ${habitContent}`}>{ props.habit.content }</h2>
        <FontAwesomeIcon icon={faTrashAlt} onClick={() => props.deleteHabit(props.habit)}/>
    </div>
  )
}

export default Habit;
