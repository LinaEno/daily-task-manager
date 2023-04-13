import styled from 'styled-components';

export const Section = styled.section`
  width: 700px;
  height: auto;
  margin: 0 auto;
`;

export const TextArea = styled.textarea`
  border: none;

  outline: none;
  resize: none;
  border-radius: 6px;
  padding: 10px;
  border-radius: 10px;
  background: #a89fee;
`;

export const AddForm = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
`;

export const LabelBox = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const Check = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AddBtn = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  padding: 10px;
  border: 1px solid #a89fee;
  box-shadow: 2px 2px 10px #a89fee;
  border-radius: 10px;
  cursor: pointer;

  &:hover,
  :focus {
    transform: scale(1.1);
  }
`;

export const ChackName = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const ChackInput = styled.label`
  font-size: 2rem;
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;
`;
