import useAuth from 'hooks/useAuth';
import AuthNav from './AuthNavigation/AuthNav';
// import { UserMenu } from './UserMenu/UserMenu';
import { Header } from './Header/Header';

export default function AppBar() {
  

  const { currentUser } = useAuth();
  return (
    <header>
      {currentUser ? (
        <Header />
      ) : (
        <AuthNav />
      )}
    </header>
  );
}
