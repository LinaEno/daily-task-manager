import { Progress } from 'components/ProgressBox/ProgressBox';
import Quote from 'components/Quote/Quote';
import UserProfile from 'components/UserProfile/UserProfile';

const Aside = () => {
  return (
    <aside>
      <UserProfile />
      <Progress />
      <Quote />
    </aside>
  );
};

export default Aside;
