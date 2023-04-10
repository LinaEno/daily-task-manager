import useAuth from 'hooks/useAuth';
import AuthNav from './AuthNavigation/AuthNav';
import { UserMenu } from './UserMenu/UserMenu';
import { Header } from './UserMenu/Header';
import { colors } from 'styles/colors';
import { theme } from 'styles/theme';
import { useState } from 'react';

export default function AppBar() {
  const [themeTitle, setThemeTitle] = useState('light')
  
  const normalizedTheme = { ...theme, ...colors[themeTitle] }

  const switchTheme = () => {
    setThemeTitle(themeTitle === 'light' ? 'dark' : 'light');
  };

  const { currentUser } = useAuth();
  return <header>{currentUser ? <Header switchTheme={switchTheme} themeTitle={themeTitle}/> : <AuthNav />}</header>;
}
