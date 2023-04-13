import styled from 'styled-components';

export const QuoteText = styled.p`
  font-family: 'Delicious Handrawn', sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: 400;
  letter-spacing: 0.05em;
`;

export const QuoteAuthor = styled(QuoteText)`
  text-align: right;
`;
