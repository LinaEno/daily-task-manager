import { Container, MainTitle } from 'components/App.styled';
import useAuth from 'hooks/useAuth';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import {
  collection,
  collectionGroup,
  doc,
  getDocs,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';

const TasksPage = () => {
  const { currentUser } = useAuth();
  const [tasks, setTasks] = useState({});
  // const [allTasks, setAllTasks] = useState([]);

  console.log(tasks);

  useEffect(() => {
    const getAllTasks = async () => {
      // const user = await collection(db, 'users')
      //   .doc(currentUser.uid)
      //   .collection('tasks')
      //   .onSnapshot(doc => {
      //     console.log('Current data: ', doc.data());
      //     setTasks(doc.data());
      //   });
      // await onSnapshot(
      //   doc(db, 'users', currentUser.uid, 'tasks', 'tasks.uid'),
      //   doc => {
      //     console.log('Current data: ', doc.data());
      //     setTasks(doc.data());
      //   }
      // );

      const userTasks = query(collectionGroup(db, 'tasks'));
      const querySnapshot = await getDocs(userTasks);
      console.log(querySnapshot);
      querySnapshot.forEach(doc => {
        console.log(doc.id, ' => ', doc.data());
        setTasks(doc.data());
      });

      //,where('uid', '==', 'currentUser.uid');

      // const querySnapshot = await getDocs(
      //   collection(db, 'users', currentUser.uid, 'tasks')
      // );
      // querySnapshot.forEach(doc => {
      //   console.log(doc.id, ' => ', doc.data());
      //   console.log(doc);
      // let array;
      // array.push(doc.data());
      // setTasks(array);
      // });

      // await onSnapshot(doc(db, 'tasks', currentUser.tasks.id), doc => {
      //   console.log('Current data: ', doc.data());
      //   setTasks(doc.data());
      // });

      // await onSnapshot(
      //   doc(db, 'users', currentUser.uid),
      //   doc => console.log(doc.data())
      //   // setTasks(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
      // );
    };
    getAllTasks();
  }, [currentUser.uid]);

  console.log(tasks);

  return (
    <Container>
      <h3>Daily tasks</h3>
      <p>{tasks.title}</p>
      <p>{tasks.description}</p>

      <ul>
        {tasks.length > 0 &&
          tasks.map(({ title, description }) => {
            return (
              <li>
                <p>Title: {title}</p>
                <p>Description: {description}</p>
              </li>
            );
          })}
      </ul>
    </Container>
  );
  // return (
  //   <Container>
  //     <h3>Daily tasks</h3>
  //     <ul>
  //       {tasks.length > 0 &&
  //         tasks.map(({ title, description }) => {
  //           return (
  //             <li>
  //               <p>Title: {title}</p>
  //               <p>Description: {description}</p>
  //             </li>
  //           );
  //         })}
  //     </ul>
  //   </Container>
  // );
};

export default TasksPage;
