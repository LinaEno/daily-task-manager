import { Progress } from 'components/ProgressBox/ProgressBox';
import UserProfile from 'components/UserProfile/UserProfile';

const Aside = () => {
  return (
    <aside>
      <UserProfile />
      <Progress />
    </aside>
  );
};

export default Aside;
