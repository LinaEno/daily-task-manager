import { ContainerAuth, Link } from 'components/App.styled';

export default function AuthNav() {
  return (
    <ContainerAuth>
      <Link to="register">Registration</Link>
      <Link to="login">Log in</Link>
    </ContainerAuth>
  );
}
