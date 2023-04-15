import styled from 'styled-components';

export const QuoteText = styled.p`
  font-family: 'Dancing Script', cursive;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 400;
  letter-spacing: 0.05em;
  color: #393d54;
`;

export const QuoteAuthor = styled(QuoteText)`
  text-align: right;
`;
