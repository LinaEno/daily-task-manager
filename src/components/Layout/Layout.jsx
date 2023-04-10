import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import GlobalStyles from 'styles/GlobalStyles/GlobalStyles';
import { colors } from 'styles/colors';
import { theme } from 'styles/theme';
import { HeaderContainer } from 'components/UserMenu/Header.styled';
import useAuth from 'hooks/useAuth';
import { Header } from 'components/UserMenu/Header';
import AuthNav from 'components/AuthNavigation/AuthNav';

export const Layout = () => {
  const [themeTitle, setThemeTitle] = useState('light')
  
  const normalizedTheme = { ...theme, ...colors[themeTitle] }

  const switchTheme = () => {
    setThemeTitle(themeTitle === 'light' ? 'dark' : 'light');
  };

  const { currentUser } = useAuth();


  return (
    <ThemeProvider theme={normalizedTheme}>
      <GlobalStyles />
      {currentUser ? <Header switchTheme={switchTheme} themeTitle={themeTitle}/> : <AuthNav />}
    </ThemeProvider>
  );
};
