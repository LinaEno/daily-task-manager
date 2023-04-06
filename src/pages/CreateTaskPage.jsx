import React from 'react';
import { useState } from 'react';
import { db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
import useAuth from 'hooks/useAuth';

const CreateTaskPage = () => {
  const { currentUser } = useAuth();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [comleted, setCompleted] = useState(false);

  const createTask = async () => {
    await addDoc(collection(db, 'users', currentUser.uid, 'tasks'), {
      title,
      description,
      userId: currentUser.uid,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    createTask();
    reset();
    e.target.reset();
  };

  const reset = () => {
    setTitle('');
    setDescription('');
  };

  return (
    <section>
      <h3>Add your task</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input
            type="text"
            name="title"
            onChange={e => setTitle(e.target.value)}
          />
        </label>
        <label>
          Description
          <input
            type="text"
            name="title"
            onChange={e => setDescription(e.target.value)}
          />
        </label>
        <button type="submit">Add task</button>
      </form>
    </section>
  );
};

export default CreateTaskPage;
