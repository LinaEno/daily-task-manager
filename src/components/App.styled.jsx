import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  width: 500px;
  background-color: ${p => p.theme.colors.white};
  padding: ${p => p.theme.space[5]}px;
  border: 1px solid;
  border-color: ${p => p.theme.colors.borderBtn};
  border-radius: ${p => p.theme.borders.borderRadius}px;
`;

export const ContainerHome = styled(Container)`
  border: none;
`;

export const ContainerAuth = styled(Container)`
  text-align: center;
`;

export const ContainerWelcome = styled(ContainerAuth)`
  text-align: right;
`;

export const MainTitle = styled.h1`
  font-size: ${p => p.theme.fontSizes.xl};
  color: ${p => p.theme.colors.black};
  text-align: center;
  line-height: ${p => p.theme.lineHeights.title};
`;

export const Title = styled.h2`
  font-size: ${p => p.theme.fontSizes.xl};
  color: ${p => p.theme.colors.black};
  text-align: center;
  line-height: ${p => p.theme.lineHeights.title};
`;

export const Message = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.black};
  text-align: center;
  line-height: ${p => p.theme.lineHeights.title};
`;

export const WelcomeMessage = styled.span`
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.black};
  margin-right: ${p => p.theme.space[4]}px;
  line-height: ${p => p.theme.lineHeights.title};
`;
export const Link = styled(NavLink)`
  font-size: ${p => p.theme.fontSizes.xl};
  color: ${p => p.theme.colors.black};
  text-align: center;
  line-height: ${p => p.theme.lineHeights.title};
  &:not(:last-child) {
    margin-right: ${p => p.theme.space[7]}px;
  }
  text-decoration: none;
  &:hover,
  &:focus {
    border-bottom: 1px solid;
    border-color: ${p => p.theme.colors.borderBtn};
  }
`;
