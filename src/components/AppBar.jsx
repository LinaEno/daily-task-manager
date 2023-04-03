import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import AuthNav from './AuthNavigation/AuthNav';
import { UserMenu } from './UserMenu/UserMenu';

export default function AppBar() {
  return (
    <header>
      <UserMenu />
      <AuthNav />
    </header>
  );
}
