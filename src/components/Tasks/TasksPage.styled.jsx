import styled from 'styled-components';

export const Container = styled.div`
  /* position: absolute; */
  width: 700px;
  height: 600px;
  left: 189px;
  top: 407;
  margin: 0 auto;
  background: ${({ theme }) => theme.mainBackground};
`;

export const Input = styled.input`
  position: absolute;
  width: 35px;
  height: 35px;
  margin-left: 15px;
  margin-top: 20px;
  background: ${({ theme }) => theme.mainBackground};
  border-radius: 20px;
  border: 2px solid black;
`;

export const Wrapper = styled.div`
  /* display:flex; */
  /* justify-content:space-between; */
  width: 650px;
  height: auto;
  left: 231px;
  top: 560px;
  margin-top: 30px;
  background: #a89fee;
  border-radius: 20px;
`;
export const WrapperTitle = styled.div`
  /* display:flex;
flex-direction:column; */
  position: absolute;
  padding-left: 100px;
  padding-top: 20px;
  gap: 5px;
`;

export const WrapperButton = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 580px;
  padding-top: 20px;
  gap: 5px;
`;
