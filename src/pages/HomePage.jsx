import { ContainerHome } from 'components/App.styled';
import phonebook from '../img/phonebook.png';

const HomePage = () => (
  <ContainerHome>
    <h3>Welcome to your Phonebook!</h3>
    <img src={phonebook} alt="phonebook" />
  </ContainerHome>
);

export default HomePage;
