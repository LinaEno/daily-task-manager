import axios from 'axios';
import { Box } from 'components/UserProfile/UserProfile.styled';
import { useEffect, useState } from 'react';
import { QuoteAuthor, QuoteText } from './Quote.styled';

const Quote = () => {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    const getQuote = async () => {
      const { data } = await axios.get('https://type.fit/api/quotes');
      setQuote(data);
    };
    getQuote();
  }, []);

  let randomNumber = Math.floor(Math.random() * quote.length);

  let randomElement = quote[randomNumber];

  return (
    <Box>
      <QuoteText>"{randomElement?.text}"</QuoteText>
      <QuoteAuthor>{randomElement?.author}</QuoteAuthor>
    </Box>
  );
};

export default Quote;
