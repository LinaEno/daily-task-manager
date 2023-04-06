import { Container, MainTitle } from 'components/App.styled';
import useAuth from 'hooks/useAuth';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collectionGroup, getDocs, query, where } from 'firebase/firestore';

const TasksPage = () => {
  const { currentUser } = useAuth();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (!currentUser.uid) return;
    const getAllTasks = async () => {
      const userTasks = query(
        collectionGroup(db, 'tasks'),
        where('userId', '==', currentUser.uid)
      );
      const querySnapshot = await getDocs(userTasks);
      querySnapshot.forEach(doc => {
        setTasks(prevState => [...prevState, doc.data()]);
      });
    };
    getAllTasks();
  }, [currentUser.uid]);

  return (
    <Container>
      <h3>Daily tasks</h3>
      <ul>
        {tasks.length > 0 &&
          tasks.map(({ title, description }, idx) => {
            return (
              <li key={idx}>
                <p>Title: {title}</p>
                <p>Description: {description}</p>
              </li>
            );
          })}
      </ul>
    </Container>
  );
};

export default TasksPage;
