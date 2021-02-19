import * as UserActions from '../../store/modules/user/actions';
import * as Yup from 'yup';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import {
  BackgroundImage,
  BoxButton,
  Card,
  Subtitle,
  Title,
  BoxForgot,
  Container,
} from './style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useFormik } from 'formik';
import { useToasts } from 'react-toast-notifications';
import history from '../../services/history';

const Login: React.FC = () => {
  const user = useSelector((state: ApplicationState) => state.user);
  const { addToast } = useToasts();

  const formik = useFormik({
    validateOnBlur: false,
    validateOnChange: false,
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required('Informe o campo de e-mail')
        .email('Digite um e-mail válido'),
      password: Yup.string().required('Informe a senha!'),
    }),
    onSubmit: (value) => {
      dispatch(UserActions.loginRequest(value));
    },
  });

  useEffect(() => {
    if (user.currentUser.name && user.currentUser.id) {
      addToast('Login Realizado com sucesso!', {
        appearance: 'success',
        autoDismiss: true,
      });
      localStorage.setItem('acesso', JSON.stringify(user.currentUser))
      history.push('home')
    } else if (!user.loading && user.error) {
      addToast('Username ou senha incorretos!', {
        appearance: 'error',
        autoDismiss: true,
      });
    }
  }, [addToast, user.currentUser, user.error, user.loading]);

  const dispatch = useDispatch();

  return (
    <>
      <Container>
        <BackgroundImage>
          <div />
        </BackgroundImage>
        <Card>
          <Title>
            Olá seja <br /> bem-vindo!
          </Title>

          <Subtitle>Para acessar a plataforma, faça seu login.</Subtitle>
          <Input
            label='E-MAIL'
            placeholder='user.name@mail.com'
            name='email'
            error={formik.errors.email}
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <Input
            label='SENHA'
            type='password'
            placeholder='********'
            error={formik.errors.password}
            name='password'
            value={formik.values.password}
            onChange={formik.handleChange}
          />

          <BoxButton>
            <Button onClick={formik.submitForm}>ENTRAR</Button>
          </BoxButton>

          <BoxForgot>
            Esqueceu seu login ou senha?
            <p>
              Clique <a>aqui</a>
            </p>
          </BoxForgot>
        </Card>
      </Container>
    </>
  );
};

export default Login;
