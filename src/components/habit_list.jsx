import React, {useState} from 'react';

import Habit from './habit'
import AddHabit from './add_habit'

import firebase from 'firebase/app';
import 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const HabitList = () => {
  const firestore = firebase.firestore();
  const habitsRef = firestore.collection('habits');
  const [habits] = useCollectionData(habitsRef, { idField: 'id' });
  const [input, setInput] = useState('');

  const addHabit = async (e) => {
    e.preventDefault();

    const { uid } = firebase.auth().currentUser;
    await habitsRef.add({
      content: input,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid
    })
  }

  return (
    <div className='habit-list'>
      {habits && habits.map(habit => <Habit habit={habit} key={habit.id} />)}
      <form onSubmit={addHabit}>
          <input type="text" value={input} onChange={e => setInput(e.currentTarget.value)} />
          <button type="submit" className="btn btn-primary">Submit</button>
       </form>
    </div>

  )
}

export default HabitList;
