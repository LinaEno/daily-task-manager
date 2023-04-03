// import { ContainerWelcome, WelcomeMessage } from 'components/App.styled';
// import { Button } from 'components/ContactList/ContactList.styled';
// import { useDispatch, useSelector } from 'react-redux';
// import { authSignOutUser } from 'redux/auth/authOperation';
// import { getUserName, selectUserName } from 'redux/auth/authSelectors';

// export const UserMenu = () => {
//   const dispatch = useDispatch();

//   const user = useSelector(selectUserName);

//   const handleChange = () => {
//     dispatch(authSignOutUser());
//   };

//   return (
//     <ContainerWelcome>
//       <WelcomeMessage>Welcome, {user}</WelcomeMessage>
//       <Button type="button" onClick={handleChange}>
//         Logout
//       </Button>
//     </ContainerWelcome>
//   );
// };
