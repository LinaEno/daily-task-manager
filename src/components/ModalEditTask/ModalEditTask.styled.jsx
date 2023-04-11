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
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const ModalLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
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
  box-shadow: 2px 2px 14px #032751;
  outline: none;
  resize: none;
  border-radius: 6px;
  padding: 10px;
`;

export const ModalBtn = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  &:hover {
    transform: scale(1.5, 1);
    text-shadow: 0px 0px 14px rgba(253, 251, 45, 1);
  }
`;
