import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectActiveTasks,
  selectCurrentUserUid,
} from 'redux/auth/authSelectors';
import { ImPencil2 } from 'react-icons/im';
import {
  Container,
  Wrapper,
  WrapperTitle,
  WrapperButton,
  CheckBox,
  Title,
  TitleDesk,
  IconClose,
  CloseButton,
  EditButton,
  Section,
  TitleMain,
  TitleTask,
} from './TasksPage.styled';
import { openModalEditTask } from 'redux/global/slice';
import { ModalContainer } from 'components/ModalContainer/ModalContainer';
import ModalEditTask from 'components/ModalEditTask/ModalEditTask';
import {
  selectEditingTaskId,
  selectIsModalEditTaskOpen,
} from 'redux/global/selectors';
import {
  deleteTasks,
  requestAllTasks,
  toggleComplete,
} from 'redux/auth/authOperation';
import { useTranslation } from 'react-i18next';

const TasksPage = () => {
  const dispatch = useDispatch();
  const currentUserUid = useSelector(selectCurrentUserUid);
  const editingTaskId = useSelector(selectEditingTaskId);
  const isModalOpen = useSelector(selectIsModalEditTaskOpen);
  const tasks = useSelector(selectActiveTasks);
  const { t } = useTranslation();

  useEffect(() => {
    if (!currentUserUid) return;
    dispatch(requestAllTasks());
  }, [currentUserUid, dispatch]);

  const deleteTask = async taskId => {
    dispatch(deleteTasks(taskId));
  };

  const taskToEdit =
    tasks?.length > 0 && tasks.find(task => task.id === editingTaskId);

  return (
    <main>
      <Container>
        <TitleMain>{t('manager.title')}</TitleMain>
        <Section>
          <TitleTask>{t('manager.yourActive')}</TitleTask>
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
                        onChange={() => {
                          console.log(
                            'toggleComplete',
                            task.id,
                            task.completed
                          );
                          dispatch(
                            toggleComplete({
                              taskId: task.id,
                              completed: !task.completed,
                            })
                          );
                          dispatch(requestAllTasks());
                        }}
                      />
                      <label htmlFor={task.id}></label>
                    </CheckBox>
                    <WrapperTitle>
                      <Title>{task.title}</Title>
                      <TitleDesk>{task.description}</TitleDesk>
                    </WrapperTitle>
                    <WrapperButton>
                      <EditButton
                        onClick={() => dispatch(openModalEditTask(task.id))}
                      >
                        <ImPencil2 />
                      </EditButton>
                      <CloseButton onClick={() => deleteTask(task.id)}>
                        <IconClose />
                      </CloseButton>
                    </WrapperButton>
                  </Wrapper>
                </>
              );
            })}
        </Section>
        {isModalOpen && (
          <ModalContainer>
            <ModalEditTask
              task={taskToEdit}
              // requestAllTasks={requestAllTasks}
            />
          </ModalContainer>
        )}
      </Container>
    </main>
  );
};

export default TasksPage;
