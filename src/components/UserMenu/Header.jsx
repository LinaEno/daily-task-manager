import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher';
import {
  Button,
  Circle,
  HeaderContainer,
  Image,
  ListItem,
  ListStyled,
  NavLinkStyled,
  NavStyled,
} from './Header.styled';
import React from 'react';
import main from '../../img/tasks.svg';
import add from '../../img/add.svg';
import logoutsvg from '../../img/log-out.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetTasksState } from 'redux/tasks/tasksSlice';
import { logout } from 'redux/auth/authOperation';
import useAuth from 'hooks/useAuth';
import { Mobile, Default } from 'components/Media/Media';

export const Header = ({ switchTheme, themeTitle }) => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
    dispatch(resetTasksState());
    navigate('/');
  }

  return (
    <header>
      <Mobile>

      </Mobile>
      <Default>
        <HeaderContainer>
          <NavStyled>
            <ListStyled>
              <ListItem>
                <Circle>
                  {currentUser.displayName && currentUser.displayName[0]}
                </Circle>
              </ListItem>
              <ListItem>
                <NavLinkStyled to="/">
                  <Image src={main} alt="category" width={24} />
                </NavLinkStyled>
              </ListItem>
              <ListItem>
                <NavLinkStyled to="/add">
                  <Image src={add} alt="add" width={24} />
                </NavLinkStyled>
              </ListItem>
              <ListItem>
                <Button type="button" onClick={handleLogout}>
                  <Image src={logoutsvg} alt="logout" width={24} />
                </Button>
              </ListItem>
            </ListStyled>
            <ThemeSwitcher themeTitle={themeTitle} switchTheme={switchTheme} />
          </NavStyled>
        </HeaderContainer>
      </Default>
    </header>
  );
};
