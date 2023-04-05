import useAuth from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

const AuthRoute = ({ children }) => {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="login" />;
};

export default AuthRoute;
