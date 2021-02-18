import * as UserActions from '../../store/modules/user/actions';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import { BackgroundImage, Card, Subtitle, Title } from './style';
import Input from '../../components/Input';

const Login: React.FC = () => {
  const user = useSelector((state: ApplicationState) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(UserActions.loginRequest());
  }, []);

  return (
    <>
      <div style={{ position: 'relative' }}>
        <BackgroundImage>
          <div />
        </BackgroundImage>
        <Card>
          <Title>Olá Seja <br/> bem-vindo!</Title>

          <Subtitle>Para acessar a plataforma, faça seu login.</Subtitle>
          <Input label='E-MAIL' placeholder='user.name@mail.com' />
          <Input label='SENHA' type='password' placeholder='......' />
        </Card>
      </div>
    </>
  );
};

export default Login;
