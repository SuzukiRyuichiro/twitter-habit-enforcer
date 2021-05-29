import React from 'react'

const Habit = () => {
  const [habitCompletion, setHabitCompletion] = useState(false);

  return (
    <div className="habit-card">
      <div className="checkbox" onClick={() => setHabitCompletion(!habitCompletion)}>
      </div>
      <div className="habit-description">
        <h2>{ this.props.habit.content }</h2>
      </div>
    </div>
  )
}
