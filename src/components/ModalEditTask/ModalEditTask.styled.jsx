import styled from 'styled-components';

export const Box = styled.div``;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: #000;
`;

export const ModalLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 90%;
  letter-spacing: 0.1em;
  text-align: left;
`;

export const TextArea = styled.textarea`
  width: 90%;
  border: none;
  border: 1px solid rgba(255, 255, 255, 0.5);
  outline: none;
  resize: none;
  border-radius: 6px;
  padding: 10px;
`;

export const ModalBtn = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: #000;
  padding: 10px 20px;
  border: 1px solid #fff;
  box-shadow: 2px 2px 10px #fff;
  border-radius: 10px;
  cursor: pointer;

  &:hover,
  :focus {
    transform: scale(1.1);
  }
`;
