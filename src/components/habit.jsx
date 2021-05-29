import React, {useState} from 'react'

const Habit = (props) => {
  const [habitCompletion, setHabitCompletion] = useState(false);

  return (
    <div className="habit-card">
      <div className="checkbox" onClick={() => setHabitCompletion(!habitCompletion)}>
      </div>
      <div className="habit-description">
        <h2>{ props.habit.content }</h2>
      </div>
    </div>
  )
}

export default Habit;
