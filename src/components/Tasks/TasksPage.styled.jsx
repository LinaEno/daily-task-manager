import styled from 'styled-components';

export const Container = styled.div`
  /* position: absolute; */
  width: 700px;
  height: 600px;
  /* left: 189px;
  top: 407; */
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
    top: 0;
    left: 0;
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

  width: 650px;
  height: auto;
  /* left: 231px;
  top: 560px; */
  margin-top: 30px;
  background: ${({ theme }) => theme.bgcButton};

  border-radius: 20px;
`;
export const WrapperTitle = styled.div`
  display: flex;
  flex-direction: column;
  /* position: absolute; */
  /* padding-left: 100px; */
  /* padding-top: 20px; */
  gap: 5px;
`;

export const WrapperButton = styled.div`
  display: flex;
  flex-direction: column;
  /* padding-left: 580px; */
  /* padding-top: 20px; */
  gap: 5px;
`;
