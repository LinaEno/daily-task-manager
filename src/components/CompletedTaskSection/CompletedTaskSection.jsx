import {
  CheckBox,
  Wrapper,
  WrapperButton,
  WrapperTitle,
} from 'components/Tasks/TasksPage.styled';
import { db } from '../../firebase';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUserUid } from 'redux/auth/authSelectors';

const CompletedTaskSection = () => {
  const currentUserUid = useSelector(selectCurrentUserUid);
  const [tasks, setTasks] = useState([]);

  const getComletedTasks = useCallback(async () => {
    const userTasksRef = collection(db, 'users', currentUserUid, 'tasks');
    const querySnapshot = await getDocs(userTasksRef);
    const tasksData = querySnapshot.docs
      .map(doc => doc.data())
      .filter(task => task.completed);
    setTasks(tasksData);
  }, [currentUserUid]);

  useEffect(() => {
    if (!currentUserUid) return;
    getComletedTasks();
  }, [currentUserUid, getComletedTasks]);

  const deleteTask = async taskId => {
    const userTasksRef = collection(db, 'users', currentUserUid, 'tasks');
    const taskRef = doc(userTasksRef, taskId);
    await deleteDoc(taskRef);
    setTasks(prevState => prevState.filter(task => task.id !== taskId));
  };

  return (
    <section>
      <h3>Your comleted tasks</h3>
      {tasks?.length > 0 &&
        tasks.map(task => {
          return (
            <Wrapper key={task.id}>
              <CheckBox>
                <input
                  type="checkbox"
                  name="completed"
                  checked={task.completed}
                  id={task.id}
                  readOnly
                />
                <label htmlFor={task.id}></label>
              </CheckBox>
              <WrapperTitle>
                <p>Title: {task.title}</p>
                <p>Description: {task.description}</p>
              </WrapperTitle>
              <WrapperButton>
                <button onClick={() => deleteTask(task.id)}>X</button>
              </WrapperButton>
            </Wrapper>
          );
        })}
    </section>
  );
};

export default CompletedTaskSection;
