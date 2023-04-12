import styled from 'styled-components';
import { ReactComponent as CloseIcon } from '../../img/close.svg';

export const Container = styled.div`
  width: 800px;
  height: auto;
  margin: 0 auto;
  background: ${({ theme }) => theme.mainBackground};
`;

export const CheckBox = styled.div`
  width: 50px;
  position: relative;

  label {
    width: 20px;
    height: 20px;
    cursor: pointer;
    position: absolute;
    top: 25px;
    left: 45px;
    background: #fcfff4;
    background: linear-gradient(top, #fcfff4 0%, #dfe5d7 40%, #b3bead 100%);
    border-radius: 4px;
    box-shadow: inset 0px 1px 1px white, 0px 1px 3px rgba(0, 0, 0, 0.5);
    &:after {
      content: '';
      width: 9px;
      height: 5px;
      position: absolute;
      top: 4px;
      left: 4px;
      border: 3px solid #333;
      border-top: none;
      border-right: none;
      background: transparent;
      opacity: 0;
      transform: rotate(-45deg);
    }
  }
  input[type='checkbox'] {
    visibility: hidden;
    &:checked + label:after {
      opacity: 1;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  min-height: 100px;
  font-size: 18px;
  margin-top: 30px;
  background: #a89fee;
  border-radius: 20px;
`;
export const WrapperTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-right: 110px;
  padding-top: 25px;
  padding-left: 60px;
  padding-bottom: 15px;
`;

export const WrapperButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding-right: 45px;
  padding-top: 10px;
  padding-left: 5px;
`;

export const Title = styled.p`
  width: 600px;
`;
export const TitleDesk = styled.p`
  width: 600px;
  height: auto;
`;
export const CloseButton = styled.button`
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: #000000;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;
`;
export const IconClose = styled(CloseIcon)`
  width: 16px;
  height: 16px;
  stroke: currentColor;
`;

export const EditButton = styled.button`
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: #000000;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;
`;
