import {
  CheckBox,
  CloseButton,
  Container,
  Title,
  TitleDesk,
  Wrapper,
  WrapperButton,
  WrapperTitle,
} from 'components/Tasks/TasksPage.styled';
import { db } from '../../firebase';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUserUid } from 'redux/auth/authSelectors';

const CompletedTaskSection = () => {
  const currentUserUid = useSelector(selectCurrentUserUid);
  const [tasks, setTasks] = useState([]);

  const getCompletedTasks = useCallback(async () => {
    const userTasksRef = collection(db, 'users', currentUserUid, 'tasks');
    const querySnapshot = await getDocs(userTasksRef);
    const tasksData = querySnapshot.docs
      .map(doc => doc.data())
      .filter(task => task.completed);
    setTasks(tasksData);
  }, [currentUserUid]);

  useEffect(() => {
    if (!currentUserUid) return;
    getCompletedTasks();
  }, [currentUserUid, getCompletedTasks]);

  const deleteTask = async taskId => {
    const userTasksRef = collection(db, 'users', currentUserUid, 'tasks');
    const taskRef = doc(userTasksRef, taskId);
    await deleteDoc(taskRef);
    setTasks(prevState => prevState.filter(task => task.id !== taskId));
  };

  return (
    <Container>
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
                <Title>{task.title}</Title>
                <TitleDesk>{task.description}</TitleDesk>
              </WrapperTitle>
              <WrapperButton>
                <CloseButton onClick={() => deleteTask(task.id)}>X</CloseButton>
              </WrapperButton>
            </Wrapper>
          );
        })}
    </Container>
  );
};

export default CompletedTaskSection;
