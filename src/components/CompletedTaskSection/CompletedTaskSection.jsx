import {
  CheckBox,
  CloseButton,
  IconClose,
  Title,
  TitleDesk,
  WrapperButton,
  WrapperTitle,
  SectionCompleted,
  Section,
  TitleTask,
  WrapperCompl,
  Wrapper,
} from 'components/Tasks/TasksPage.styled';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCompletedTasks,
  selectCurrentUserUid,
} from 'redux/auth/authSelectors';
import { AddTitle } from 'components/AddTaskSection/CreateTaskPage.styled';
import { deleteTasks, requestAllTasks } from 'redux/auth/authOperation';

const CompletedTaskSection = () => {
  const currentUserUid = useSelector(selectCurrentUserUid);
  const tasks = useSelector(selectCompletedTasks);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUserUid) return;

    dispatch(requestAllTasks());
  }, [currentUserUid, dispatch]);

  const deleteTask = async taskId => {
    dispatch(deleteTasks(taskId));
  };

  return (
    <Section>
      <TitleTask>Your comleted tasks</TitleTask>
      {tasks?.length > 0 &&
        tasks.map(task => {
          return (
            <WrapperCompl key={task.id}>
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
                <CloseButton onClick={() => deleteTask(task.id)}>
                  <IconClose />
                </CloseButton>
              </WrapperButton>
            </WrapperCompl>
          );
        })}
    </Section>
  );
};

export default CompletedTaskSection;
