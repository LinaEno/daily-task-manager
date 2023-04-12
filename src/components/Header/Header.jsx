import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher';
import {
  Button,
  Circle,
  Container,
  HeaderContainer,
  ListItem,
  ListStyled,
  MenuWrapper,
  MobileList,
  MobileNav,
  MobileNavLink,
  NavLinkStyled,
  NavStyled,
} from './Header.styled';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetTasksState } from 'redux/tasks/tasksSlice';
import { logout } from 'redux/auth/authOperation';
import useAuth from 'hooks/useAuth';
import { Mobile, Default } from 'components/Media/Media';
import { BsList, BsX, BsBoxArrowRight } from 'react-icons/bs';
import { TbLayoutGrid, TbLayoutGridAdd } from 'react-icons/tb';


export const Header = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [isOpen, setIsOpen] = useState(false);
  const [hideOrShow, setHideOrShow] = useState({});

const handleMenu = () => {
  setIsOpen((prev) => !prev);
  if (isOpen) {
    setHideOrShow(() => {
      return {}
    })
  } else {
    setHideOrShow(() => {
      return {display: "flex"}
    })
  }
}

  function handleLogout() {
    dispatch(logout());
    dispatch(resetTasksState());
    navigate('/');
  }

  return (
    <header>
      <Mobile>
      <Container>
          <MobileNav>
            <ThemeSwitcher />
            {isOpen ? <button type="button" onClick={handleMenu}><BsX size={30} /></button> : <button type="button" onClick={handleMenu}><BsList size={30} /></button>}
            </MobileNav>
            <MenuWrapper style={hideOrShow}>
              <MobileList>
              <li>
                  <MobileNavLink to="/" onClick={handleMenu}>
                    Profile
                  </MobileNavLink>
                </li>
                <li>
                  <MobileNavLink to="/" onClick={handleMenu}>
                    Tasks
                  </MobileNavLink>
                </li>
                <li>
                  <MobileNavLink to="/add" onClick={handleMenu}>
                  Adding
                  </MobileNavLink>
                </li>
                <li>
                  <button type="button" onClick={handleLogout} >
                  Exit
                  </button>
                </li>
              </MobileList>
            </MenuWrapper>
        </Container>
      </Mobile>
      <Default>
        <HeaderContainer>
          <NavStyled>
            <ListStyled>
              <ListItem >
                <Circle >
                  {currentUser.displayName && currentUser.displayName[0]}
                </Circle>
              </ListItem>
              <ListItem>
                <NavLinkStyled to="/">
                <TbLayoutGrid size={30} />
                </NavLinkStyled>
              </ListItem>
              <ListItem>
                <NavLinkStyled to="/add">
                <TbLayoutGridAdd size={30} />
                </NavLinkStyled>
              </ListItem>
              <ListItem>
                <Button type="button" onClick={handleLogout}>
                <BsBoxArrowRight size={30} />
                </Button>
              </ListItem>
            </ListStyled>
            <ThemeSwitcher/>
          </NavStyled>
        </HeaderContainer>
      </Default>
    </header>
  );
};
