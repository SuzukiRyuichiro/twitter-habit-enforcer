import React, { Component } from 'react';

import Habit from './habit'

import firebase from 'firebase/app';
import 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const HabitList = () => {
  const firestore = firebase.firestore();
  const habitsRef = firestore.collection('habits');
  const [habits] = useCollectionData(habitsRef, { idField: 'id' });
  console.log(habits);
  return (
    <div className='habit-list'>
       {habits.map(habit => <Habit habit={habit} key={habit.id} />)}
    </div>
  )
}

export default HabitList;
