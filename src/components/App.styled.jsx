import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  background-color: ${p => p.theme.colors.white};
  padding: ${p => p.theme.space[5]}px;
`;

export const ContainerTitleHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 20px;
`;

export const DivHome = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const DivDiagram = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
`;

export const TaskGrid = styled.ul`
  display: grid;
  padding: 10px;
  gap: 5px;
  background: rgba(72, 209, 227, 0.51);
`;
export const TaskEl = styled.li`
  padding: 5px;
  border-radius: 5px;
  background: rgba(210, 239, 243, 0.51);
`;

export const WorkActivityBlock = styled.div`
  padding: 5px;
  margin-top: 10px;
  font-size: 14px;
  border-radius: 5px;
  background: rgba(72, 209, 227, 0.51);
`;
export const ContainerHome = styled(Container)`
  font-size: 14px;
  border: none;
  background: rgba(178, 233, 240, 0.51);
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
