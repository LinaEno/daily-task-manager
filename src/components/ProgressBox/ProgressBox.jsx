import { Box, Title } from './ProgressBox.styled';
import { Chart } from 'components/Chart/Chart';
import { StatBox } from 'components/StatBox/StatBox';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUserUid } from 'redux/auth/authSelectors';
import { requestAllTasks } from 'redux/auth/authOperation';
import { useTranslation } from 'react-i18next';

export const Progress = () => {
  const dispatch = useDispatch();
  const currentUserUid = useSelector(selectCurrentUserUid);
  const totalActive = useSelector(state => state.auth.activeTasks);
  const totalCompleted = useSelector(state => state.auth.completedTasks);
  const { t } = useTranslation();

  useEffect(() => {
    if (!currentUserUid) return;

    dispatch(requestAllTasks());
  }, [currentUserUid, dispatch]);

  const totalCompletedCount = totalCompleted.length;

  const totalActiveCount = totalActive.length;

  const totalTasks = totalActiveCount + totalCompletedCount;

  const activePercentage = (totalActiveCount / totalTasks) * 100;
  const completedPercentage = (totalCompletedCount / totalTasks) * 100;

  return (
    <Box>
      <Title>{t('profile.activityGraph')}</Title>
      <StatBox
        activePercentage={activePercentage}
        completedPercentage={completedPercentage}
      />
      <Chart
        activePercentage={activePercentage}
        completedPercentage={completedPercentage}
      />
    </Box>
  );
};
