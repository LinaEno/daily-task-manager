import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectCurrentUser } from 'redux/auth/authSelectors';

const AuthRoute = ({ children }) => {
  const currentUser = useSelector(selectCurrentUser);
  return currentUser ? children : <Navigate to="login" />;
};

export default AuthRoute;
