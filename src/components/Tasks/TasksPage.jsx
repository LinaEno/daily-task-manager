import { Container } from 'components/App.styled';
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
import { db } from '../../firebase';
import { openModalEditTask } from 'redux/global/slice';
import { selectIsModalEditTaskOpen } from 'redux/global/selectors';
import { ModalContainer } from 'components/ModalContainer/ModalContainer';
import ModalEditTask from 'components/ModalEditTask/ModalEditTask';

const TasksPage = () => {
  const currentUserUid = useSelector(selectCurrentUserUid);
  const [tasks, setTasks] = useState([]);
  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectIsModalEditTaskOpen);

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
    <>
      <Container>
        <h3>Daily tasks</h3>
        <ul>
          {tasks?.length > 0 &&
            tasks.map(task => {
              return (
                <li key={task.id}>
                  <p>Title: {task.title}</p>
                  <p>Description: {task.description}</p>
                  <input
                    type="checkbox"
                    name="completed"
                    checked={task.completed}
                    onChange={() => toggleComplete(task.id, !task.completed)}
                  />
                  <button onClick={() => deleteTask(task.id)}>X</button>
                  <button onClick={() => dispatch(openModalEditTask())}>
                    Edit
                  </button>
                  {isModalOpen && (
                    <ModalContainer>
                      <ModalEditTask task={task} />
                    </ModalContainer>
                  )}
                </li>
              );
            })}
        </ul>
      </Container>
    </>
  );
  // return (
  //   <>
  //     <Container>
  //       <h3>Daily tasks</h3>
  //       <ul>
  //         {tasks?.length > 0 &&
  //           tasks.map(({ title, description, id, completed }) => {
  //             return (
  //               <li key={id}>
  //                 <p>Title: {title}</p>
  //                 <p>Description: {description}</p>
  //                 <input
  //                   type="checkbox"
  //                   name="completed"
  //                   checked={completed}
  //                   onChange={() => toggleComplete(id, !completed)}
  //                 />
  //                 <button onClick={() => deleteTask(id)}>X</button>
  //                 <button onClick={() => dispatch(openModalEditTask())}>
  //                   Edit
  //                 </button>
  //                 {isModalOpen && (
  //                   <ModalContainer>
  //                     <ModalEditTask />
  //                   </ModalContainer>
  //                 )}
  //               </li>
  //             );
  //           })}
  //       </ul>
  //     </Container>

  //   </>
  // );
};

export default TasksPage;
