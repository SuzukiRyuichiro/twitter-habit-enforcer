import React, {useState} from 'react'

const Habit = (props) => {
  const [habitCompletion, setHabitCompletion] = useState(false);

  return (
    <div className="habit-card">
      <div className="habit-description">
        <div className="round">
          <input type="checkbox" id={props.habit.id} onClick={() => setHabitCompletion(!habitCompletion)}/>
          <label for={props.habit.id}></label>
        </div>
        <h2>{ props.habit.content }</h2>
      </div>
    </div>
  )
}

export default Habit;
