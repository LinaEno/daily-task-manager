import { useCallback, useEffect, useState } from 'react';

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
  Wrapper,
  WrapperTitle,
  WrapperButton,
  CheckBox,
} from './TasksPage.styled';
import { db } from '../../firebase';
import { openModalEditTask } from 'redux/global/slice';
import { ModalContainer } from 'components/ModalContainer/ModalContainer';
import ModalEditTask from 'components/ModalEditTask/ModalEditTask';
import {
  selectEditingTaskId,
  selectIsModalEditTaskOpen,
} from 'redux/global/selectors';

const TasksPage = () => {
  const currentUserUid = useSelector(selectCurrentUserUid);
  const editingTaskId = useSelector(selectEditingTaskId);
  const [tasks, setTasks] = useState([]);
  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectIsModalEditTaskOpen);

  const getAllActiveTasks = useCallback(async () => {
    const userTasksRef = collection(db, 'users', currentUserUid, 'tasks');
    const querySnapshot = await getDocs(userTasksRef);
    const tasksData = querySnapshot.docs
      .map(doc => doc.data())
      .filter(task => !task.completed);
    setTasks(tasksData);
  }, [currentUserUid]);

  useEffect(() => {
    if (!currentUserUid) return;
    getAllActiveTasks();
  }, [currentUserUid, getAllActiveTasks]);

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
  const taskToEdit =
    tasks?.length > 0 && tasks.find(task => task.id === editingTaskId);

  return (
    <main>
      <Container>
        <h3>Daily tasks</h3>

        <section>
          {tasks?.length > 0 &&
            tasks.map(task => {
              return (
                <>
                  <Wrapper key={task.id}>
                    <CheckBox>
                      <input
                        type="checkbox"
                        name="completed"
                        checked={task.completed}
                        id={task.id}
                        onChange={() =>
                          toggleComplete(task.id, !task.completed)
                        }
                      />
                      <label htmlFor={task.id}></label>
                    </CheckBox>
                    <WrapperTitle>
                      <p>Title: {task.title}</p>
                      <p>Description: {task.description}</p>
                    </WrapperTitle>
                    <WrapperButton>
                      <button onClick={() => deleteTask(task.id)}>X</button>
                      <button
                        onClick={() => dispatch(openModalEditTask(task.id))}
                      >
                        Edit
                      </button>
                    </WrapperButton>
                  </Wrapper>
                </>
              );
            })}
        </section>
        {isModalOpen && (
          <ModalContainer>
            <ModalEditTask
              task={taskToEdit}
              getAllActiveTasks={getAllActiveTasks}
            />
          </ModalContainer>
        )}
      </Container>
    </main>
  );
};

export default TasksPage;
