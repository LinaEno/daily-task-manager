import { Box, TopBox, Title, BottomBox } from './ProgressBox.styled';
import { Chart } from 'components/Chart/Chart';
import { StatBox } from 'components/StatBox/StatBox';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUserUid } from 'redux/auth/authSelectors';

export const Progress = () => {
  const currentUserUid = useSelector(selectCurrentUserUid);
  const [totalActive, setTotalActive] = useState([]);
  const [totalCompleted, setTotalCompleted] = useState([]);

  const getCompletedTasks = useCallback(async () => {
    const userTasksRef = collection(db, 'users', currentUserUid, 'tasks');
    const querySnapshot = await getDocs(userTasksRef);
    const tasksData = querySnapshot.docs
      .map(doc => doc.data())
      .filter(task => task.completed);
    setTotalCompleted(tasksData);
  }, [currentUserUid]);

  const getAllActiveTasks = useCallback(async () => {
    const userTasksRef = collection(db, 'users', currentUserUid, 'tasks');
    const querySnapshot = await getDocs(userTasksRef);
    const tasksData = querySnapshot.docs
      .map(doc => doc.data())
      .filter(task => !task.completed);
    setTotalActive(tasksData);
  }, [currentUserUid]);

  useEffect(() => {
    if (!currentUserUid) return;
    getCompletedTasks();
    getAllActiveTasks();
  }, [currentUserUid, getAllActiveTasks, getCompletedTasks]);

  const totalCompletedCount = totalCompleted.length;

  const totalActiveCount = totalActive.length;

  const totalTasks = totalActiveCount + totalCompletedCount;

  const activePercentage = (totalActiveCount / totalTasks) * 100;
  const completedPercentage = (totalCompletedCount / totalTasks) * 100;

  return (
    <Box>
      <TopBox>
        <Title>Activity Graph</Title>
      </TopBox>
      <BottomBox>
        <StatBox
          activePercentage={activePercentage}
          completedPercentage={completedPercentage}
        />
        <Chart
          activePercentage={activePercentage}
          completedPercentage={completedPercentage}
        />
      </BottomBox>
    </Box>
  );
};
