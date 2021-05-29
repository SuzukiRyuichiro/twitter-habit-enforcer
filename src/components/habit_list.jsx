import React, { Component } from 'react';

import Habit from './habit'
import AddHabit from './add_habit'

export default class HabitList extends Component {
  render() {
    return (
      <div className='habit-list'>
        {this.props.habits.map(habit => <Habit content={habit} key={habit} />)}
        <AddHabit />
      </div>
    )
  }
}
