import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    max-width: 120px;
    flex-direction: column;
  }
`;

export const NavStyled = styled.nav`
  display: flex;
  gap: 20px;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  height: 150px;
  width: 100%;
  height: 150px;
  background: ${({ theme }) => theme.asideBackground};

  @media screen and (min-width: 768px) {
    max-width: 120px;
    flex-direction: column;
    height: 100%;
    padding-top: 20px;
  }
`;
export const ListStyled = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  z-index: 2;

  @media screen and (min-width: 768px) {
    flex-direction: column;
  }
`;

export const ListItem = styled.li``;

export const Circle = styled.p`
  font-family: 'Comforter Brush', cursive;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  font-weight: 600;
  width: 50px;
  height: 50px;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.text};
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.6) 30%,
    ${({ theme }) => theme.bgcButton} 100%
  );
  border-radius: 100%;
  border: 19px solid ${({ theme }) => theme.bgcButton};
`;

export const NavLinkStyled = styled(NavLink)`
  position: relative;
  text-decoration: none;
  width: 88px;
  height: 88px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;

  color: ${({ theme }) => theme.text};
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0s;
  cursor: pointer;

  &.active {
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.6) 30%,
      ${({ theme }) => theme.bgcButton} 100%
    );
    width: 50px;
    height: 50px;
    left: 20px;

    z-index: -1;
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0s;
    border: 19px solid ${({ theme }) => theme.bgcButton};
    border-radius: 100%;
    box-shadow: ${({ theme }) => theme.shadows.regular};
  }
`;

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  width: 88px;
  height: 88px;
`;

export const Image = styled.img`
  display: block;
  margin: 0 auto;
  fill: #fff;
  stroke: #fff;
`;

export const Container = styled.div`
  width: 100%;
  height: 73px;
  position: relative;
  background: ${({ theme }) => theme.asideBackground};
`;

export const MobileNav = styled.div`
  display: flex;
  justify-content: end;
  margin: 0 auto;

  padding: 20px;
  gap: 20px;
  max-width: 320px;
`;

export const MenuWrapper = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MobileList = styled.ul`
  position: absolute;
  top: 73px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-bottom: 20px;
  width: 100%;
  background: ${({ theme }) => theme.asideBackground};
`;

export const MobileNavLink = styled(NavLink)`
  font-size: ${({ theme }) => theme.fontSizes.l};

  &.active {
    color: ${({ theme }) => theme.bgcButton};
    text-shadow: 1px 1px 2px #fff;
    font-weight: 600;
  }
`;
