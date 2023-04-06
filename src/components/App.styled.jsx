import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  background: ${({ theme }) => theme.mainBackground};
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


export const Link = styled(NavLink)`

`;
