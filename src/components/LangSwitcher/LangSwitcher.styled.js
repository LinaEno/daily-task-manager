import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  gap: 4px;

  @media screen and (min-width: 480px) {
    align-items: center;
    gap: 8px;
  }
`;

export const Button = styled.button`
  width: 20px;
  height: 20px;
  font-weight: ${p => (p.isActive ? '700' : '400')};
  text-transform: uppercase;
  background-color: transparent;
  border: none;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Separator = styled.span`
  display: block;
  width: 1px;
  height: 30px;
  background-color: #bdbdbd;
`;
