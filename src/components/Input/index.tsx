import React from 'react';
import { Container, InputStyled, Label, MessageError } from './styles';

interface Props {
  label: string;
  name: string;
  error?: string;
  value: any;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'email' | 'password' | 'number';
}

const Input: React.FC<Props> = ({
  label,
  placeholder,
  type,
  onChange,
  name,
  value,
  error,
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputStyled
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        name={name}
        value={value}
        error={!!error}
      />
      <MessageError>{error}</MessageError>
    </Container>
  );
};

export default Input;
