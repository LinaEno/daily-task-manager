import useAuth from 'hooks/useAuth';
import AuthNav from './AuthNavigation/AuthNav';
import { UserMenu } from './UserMenu/UserMenu';

export default function AppBar() {
  const { currentUser } = useAuth();
  return <header>{currentUser ? <UserMenu /> : <AuthNav />}</header>;
}
