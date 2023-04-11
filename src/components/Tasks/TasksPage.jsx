// import { Container } from 'components/App.styled';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUserUid } from 'redux/auth/authSelectors';
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import {
  Container,
  Input,
  Wrapper,
  WrapperTitle,
 WrapperButton,
  
} from './TasksPage.styled';
import { db } from '../../firebase';
import { openModalEditTask } from 'redux/global/slice';

const TasksPage = () => {
  const currentUserUid = useSelector(selectCurrentUserUid);
  const [tasks, setTasks] = useState([]);
  const dispatch = useDispatch();

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
       
      <section>
        {tasks?.length > 0 &&
          tasks.map(({ title, description, id, completed }) => {
            return (
             <>
              <Wrapper key={id}>
                <WrapperTitle>
                <p>Title: {title}</p>
                <p>Description: {description}</p>
                </WrapperTitle>
                <Input
                  type="checkbox"
                  name="completed"
                  checked={completed}
                  onChange={() => toggleComplete(id, !completed)}
                  />
                  <WrapperButton>
                <button onClick={() => deleteTask(id)}>X</button>
                <button onClick={() => dispatch(openModalEditTask())}>
                  Edit
                  </button>
                  </WrapperButton>
                </Wrapper>
                 </>
            );
          })}
          
        </section>
       
    </Container>
  );
};

export default TasksPage;
