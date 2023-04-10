import useAuth from 'hooks/useAuth';
import AuthNav from './AuthNavigation/AuthNav';
// import { UserMenu } from './UserMenu/UserMenu';
import { Header } from './UserMenu/Header';
import { useState } from 'react';

export default function AppBar() {
  const [themeTitle, setThemeTitle] = useState('light')

  const switchTheme = () => {
    setThemeTitle(themeTitle === 'light' ? 'dark' : 'light');
  };

  const { currentUser } = useAuth();
  return <header>{currentUser ? <Header switchTheme={switchTheme} themeTitle={themeTitle}/> : <AuthNav />}</header>;
}
