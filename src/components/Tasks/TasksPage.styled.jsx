import styled from 'styled-components';
import { ReactComponent as CloseIcon } from '../../img/close.svg';

export const Container = styled.div`
  height: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  background: #fffcf1;
`;
export const Section = styled.div`
  width: 90%;
  height: auto;
  background: #fff;
  border-radius: 20px;
  padding-right: 30px;
  margin: 0 auto;
  padding-bottom: 30px;
`;

export const SectionCompleted = styled.div`
  width: 90%;
  height: auto;
  background: #fff;
  border-radius: 20px;
  border: 1px solid green;
  padding: 10px;
  margin: 0 auto;
  padding-bottom: 30px;
`;

export const CheckBox = styled.div`
  label {
    width: 20px;
    height: 20px;
    cursor: pointer;
    position: absolute;
    /* top: 25px; */
    top: 40%;
    left: 10px;
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
  position: relative;
  display: flex;
  gap: 20px;
  width: 90%;
  padding: 10px;
  min-height: 100px;
  font-size: 18px;
  margin-top: 20px;
  margin-left: 30px;
  background: ${({ theme }) => theme.asideBackground};
  border-radius: 20px;
  margin-bottom: 30px;
`;

export const WrapperTitle = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const WrapperButton = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  right: 10px;
  top: 20%;
`;

export const Title = styled.p`
  width: 100%;
  word-wrap: break-word;
  overflow: hidden;
`;
export const TitleDesk = styled.p`
  width: 100%;
  word-wrap: break-word;
  overflow: hidden;
`;
export const TitleMain = styled.h2`
  font-size: 58px;
  text-align: center;
  margin-bottom: 30px;
`;
export const TitleTask = styled.h2`
  font-size: 24px;
  text-align: left;
  padding-bottom: 10px;
  padding-top: 30px;
  padding-left: 40px;
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
