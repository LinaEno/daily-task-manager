import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTask } from 'redux/tasks/operations';
import { selectCurrentUserUid } from 'redux/auth/authSelectors';

const CreateTaskPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);
  const currentUserUid = useSelector(selectCurrentUserUid);

  const dispatch = useDispatch();

  const handleCreateTask = event => {
    event.preventDefault();
    const task = {
      title,
      description,
      completed,
    };
    const userId = currentUserUid;
    dispatch(createTask({ userId, task }));
    reset();
    event.target.reset();
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
          disabled
        />
        <label htmlFor="completed">Completed</label>
        <button type="submit">Add task</button>
      </form>
    </section>
  );
};

export default CreateTaskPage;
