import {
  CheckBox,
  IconClose,
  Title,
  TitleDesk,
  WrapperTitle,
  Section,
  TitleTask,
  Btn,
  WrapperCompleted,
} from 'components/Tasks/TasksPage.styled';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCompletedTasks,
  selectCurrentUserUid,
} from 'redux/auth/authSelectors';
import { deleteTasks, requestAllTasks } from 'redux/auth/authOperation';
import { useTranslation } from 'react-i18next';

const CompletedTaskSection = () => {
  const currentUserUid = useSelector(selectCurrentUserUid);
  const tasks = useSelector(selectCompletedTasks);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    if (!currentUserUid) return;

    dispatch(requestAllTasks());
  }, [currentUserUid, dispatch]);

  const deleteTask = async taskId => {
    dispatch(deleteTasks(taskId));
  };

  return (
    <Section>
      <TitleTask>{t('addTask.completedTitle')}</TitleTask>
      {tasks?.length > 0 &&
        tasks.map(task => {
          return (
            <WrapperCompleted key={task.id}>
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
              <Btn onClick={() => deleteTask(task.id)}>
                <IconClose />
              </Btn>
            </WrapperCompleted>
          );
        })}
    </Section>
  );
};

export default CompletedTaskSection;
