import { Container } from 'components/App.styled';
import useAuth from 'hooks/useAuth';
import { useEffect, useState } from 'react';

import { deleteTask, fetchTasks, toggleComplete } from 'redux/tasks/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectTasks } from 'redux/tasks/selectors';
import { selectCurrentUserUid } from 'redux/auth/authSelectors';

const TasksPage = () => {
  const currentUserUid = useSelector(selectCurrentUserUid);

  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  console.log(tasks);

  useEffect(() => {
    if (!currentUserUid) return;
    dispatch(fetchTasks());
    // dispatch(fetchTasks()).unwrap();
  }, [currentUserUid, dispatch]);

  //   useEffect(() => {
  //   if (!currentUser.uid) return;
  //   const getAllTasks = async () => {
  //     const userTasks = query(
  //       collectionGroup(db, 'tasks'),
  //       where('userId', '==', currentUser.uid)
  //     );
  //     const querySnapshot = await getDocs(userTasks);
  //     querySnapshot.forEach(doc => {
  //       setTasks(prevState => [...prevState, doc.data()]);
  //     });
  //   };
  //   getAllTasks();
  // }, [currentUser.uid]);

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
                  onChange={() => dispatch(toggleComplete(id))}
                />
                <button onClick={() => dispatch(deleteTask(id))}>X</button>
              </li>
            );
          })}
      </ul>
    </Container>
  );
};

export default TasksPage;
