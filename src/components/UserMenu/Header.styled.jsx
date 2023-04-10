import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    max-width: 100px;
    flex-direction: column;
    height: 100vh;
  }
`;

export const NavStyled = styled.nav`
  display: flex;
  gap: 20px;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  height: 150px;
  width: 750px;
  width: 100%;
  height: 150px;
  background: ${({ theme }) => theme.asideBackground};

  @media screen and (min-width: 768px) {
    max-width: 100px;
    flex-direction: column;
    height: 100vh;
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
  font-family: 'Delicious Handrawn', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  width: 50px;
  height: 50px;
  margin-bottom: 40px;
  color: #000;
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

  color: #b0bfd8;
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
    left: 30px;

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
