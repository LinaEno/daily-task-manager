import { Container } from 'components/App.styled';
import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { selectCurrentUserUid } from 'redux/auth/authSelectors';
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../firebase';

const TasksPage = () => {
  const currentUserUid = useSelector(selectCurrentUserUid);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (!currentUserUid) return;
    const getAllTasks = async () => {
      const userTasksRef = collection(db, 'users', currentUserUid, 'tasks');
      const querySnapshot = await getDocs(userTasksRef);
      const tasksData = [];
      querySnapshot.forEach(doc => {
        tasksData.push(doc.data());
      });
      setTasks(tasksData);
    };
    getAllTasks();
  }, [currentUserUid]);

  const deleteTask = async taskId => {
    const userTasksRef = collection(db, 'users', currentUserUid, 'tasks');
    const taskRef = doc(userTasksRef, taskId);
    await deleteDoc(taskRef);
    setTasks(prevState => prevState.filter(task => task.id !== taskId));
  };

  const toggleComplete = async (taskId, completed) => {
    const userTasksRef = collection(db, 'users', currentUserUid, 'tasks');
    const taskRef = doc(userTasksRef, taskId);
    await updateDoc(taskRef, { completed });
    setTasks(prevState =>
      prevState.map(task => {
        if (task.id === taskId) {
          return { ...task, completed };
        }
        return task;
      })
    );
  };

  return (
    <Container>
      <h3>Daily tasks</h3>
      <ul>
        {tasks?.length > 0 &&
          tasks.map(({ title, description, id, completed }) => {
            return (
              <li key={id}>
                <p>Title: {title}</p>
                <p>Description: {description}</p>
                <input
                  type="checkbox"
                  name="completed"
                  checked={completed}
                  onChange={() => toggleComplete(id, !completed)}
                />
                <button onClick={() => deleteTask(id)}>X</button>
              </li>
            );
          })}
      </ul>
    </Container>
  );
};

export default TasksPage;
