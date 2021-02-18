import React from 'react';
import { Container, InputStyled, Label } from './styles';

interface Props {
  label: string;
  placeholder?: string;
  type?: 'email' | 'password' | 'number';
}

const Input: React.FC<Props> = ({ label, placeholder, type }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputStyled placeholder={placeholder} type={type} />
    </Container>
  );
};

export default Input;
