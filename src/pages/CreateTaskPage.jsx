import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUserUid } from 'redux/auth/authSelectors';
import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

const CreateTaskPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);
  const currentUserUid = useSelector(selectCurrentUserUid);

  const handleCreateTask = async event => {
    event.preventDefault();
    const task = {
      title,
      description,
      completed,
    };
    try {
      const tasksRef = collection(db, `users/${currentUserUid}/tasks`);
      const newTaskRef = doc(tasksRef);
      const newTaskId = newTaskRef.id;
      const newTask = { ...task, id: newTaskId };
      await setDoc(newTaskRef, newTask);
      reset();
      event.target.reset();
      return newTask;
    } catch (error) {
      console.log(error);
    }
  };

  const reset = () => {
    setTitle('');
    setDescription('');
  };

  return (
    <section>
      <h3>Add your task</h3>
      <form onSubmit={handleCreateTask}>
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
            name="description"
            onChange={e => setDescription(e.target.value)}
          />
        </label>
        <input
          type="checkbox"
          name="completed"
          checked={completed}
          onChange={e => setCompleted(e.target.checked)}
        />
        <label htmlFor="completed">Completed</label>
        <button type="submit">Add task</button>
      </form>
    </section>
  );
};

export default CreateTaskPage;
