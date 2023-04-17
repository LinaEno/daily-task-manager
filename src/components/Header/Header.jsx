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
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/authOperation';
import { Mobile, Default } from 'components/Media/Media';
import { BsList, BsX, BsBoxArrowRight } from 'react-icons/bs';
import { TbLayoutGrid, TbLayoutGridAdd } from 'react-icons/tb';
import { selectCurrentUser } from 'redux/auth/authSelectors';
import LangSwitcher from 'components/LangSwitcher/LangSwitcher';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  // const { currentUser } = useAuth();
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [hideOrShow, setHideOrShow] = useState({});

  const { t } = useTranslation();

  const handleMenu = () => {
    setIsOpen(prev => !prev);
    if (isOpen) {
      setHideOrShow(() => {
        return {};
      });
    } else {
      setHideOrShow(() => {
        return { display: 'flex' };
      });
    }
  };

  function handleLogout() {
    dispatch(logout());
    navigate('/');
  }

  return (
    <header>
      <Mobile>
        <Container>
          <MobileNav>
            <ThemeSwitcher />
            <LangSwitcher />
            {isOpen ? (
              <button type="button" onClick={handleMenu}>
                <BsX size={30} />
              </button>
            ) : (
              <button type="button" onClick={handleMenu}>
                <BsList size={30} />
              </button>
            )}
          </MobileNav>
          <MenuWrapper style={hideOrShow}>
            <MobileList>
              <li>
                <MobileNavLink to="/profile" onClick={handleMenu}>
                  {t('header.profile')}
                </MobileNavLink>
              </li>
              <li>
                <MobileNavLink to="/" onClick={handleMenu}>
                  {t('header.activeTasks')}
                </MobileNavLink>
              </li>
              <li>
                <MobileNavLink to="/add" onClick={handleMenu}>
                  {t('header.createTask')}
                </MobileNavLink>
              </li>
              <li>
                <button type="button" onClick={handleLogout}>
                  {t('header.exit')}
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
              <ListItem>
                <Circle>
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
            <ThemeSwitcher />
            <LangSwitcher />
          </NavStyled>
        </HeaderContainer>
      </Default>
    </header>
  );
};
