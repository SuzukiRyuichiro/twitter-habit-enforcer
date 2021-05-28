import React, { Component } from 'react';

import Habit from './habit'

export default class HabitList extends Component {
  render() {
    return (
      <div className='habit-list'>
        <Habit />
        <Habit />
        <Habit />
        <Habit />
        <Habit />
      </div>
    )
  }
}
