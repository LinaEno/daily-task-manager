import { ContainerHome } from 'components/App.styled';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function PageNotFound404() {
  const navigate = useNavigate();

  useEffect(() => {
    const timerId = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timerId);
  }, [navigate]);

  return (
    <ContainerHome>
      <h3>Page not Found!</h3>
    </ContainerHome>
  );
}

export default PageNotFound404;
