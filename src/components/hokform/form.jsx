import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Input, Label } from 'components/Filter/Filter.styled';
import { Button } from 'components/ContactList/ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { registration } from 'redux/auth/authOperation';
import { useNavigate } from 'react-router-dom';
import { getUserName } from 'redux/auth/authSelectors';
import { useEffect } from 'react';
import { Container, Title } from 'components/App.styled';

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required('Please provide a valid password'),
  })
  .required();

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(getUserName);

  useEffect(() => {
    if (user !== null) navigate('/contacts');
  }, [user, navigate]);

  const onSubmit = ({ name, email, password }) => {
    dispatch(registration({ name, email, password }));

    reset();
  };

  return (
    <Container>
      <Title>Registration</Title>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Label>
          Name
          <Input type="text" {...register('name')} />
        </Label>
        {errors?.name && (
          <div style={{ color: 'red' }}>{errors.name.message}</div>
        )}
        <Label>
          E-mail
          <Input type="email" {...register('email')} />
        </Label>
        {errors?.email && (
          <div style={{ color: 'red' }}>{errors.email.message}</div>
        )}
        <Label>
          Password
          <Input type="password" {...register('password')} />
        </Label>
        {errors?.password && (
          <div style={{ color: 'red' }}>{errors.password.message}</div>
        )}
        <Button type="submit">Registration</Button>
      </form>
    </Container>
  );
};

export default Form;
