import styled from 'styled-components';

export const Section = styled.section`
  height: auto;
  margin: 0 auto;
  margin-bottom: 70px;
  margin-top: 50px;
`;

export const AddTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-align: center;
  margin-bottom: 30px;
`;

export const TextArea = styled.textarea`
  border: none;
  outline: none;
  resize: none;
  border-radius: 6px;
  padding: 10px;
  border-radius: 10px;
  background: ${({ theme }) => theme.asideBackground};
`;

export const AddForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 0 auto;
  background: ${({ theme }) => theme.blockBackground};
  border-radius: 20px;
  padding: 20px;
`;

export const LabelBox = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  color: #393d54;
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const Check = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AddBtn = styled.button`
  font-weight: 700;
  font-size: 16px;
  line-height: 15.45px;
  padding: 12px 20px;
  box-shadow: ${({ theme }) => theme.shadows.small};
  border-radius: 10px;
  background: ${({ theme }) => theme.bgcButton};
  cursor: pointer;

  &:hover,
  :focus {
    transform: scale(1.1);
  }
`;

export const CheckName = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 15.45px;
  color: #393d54;
  margin-left: 30px;
`;
