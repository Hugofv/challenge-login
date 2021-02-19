import styled from 'styled-components';

export const Label = styled.label`
  color: #383e71;
  padding-left: 0.5em;
  font-size: 0.8rem;
`;

export const Container = styled.div`
  margin-top: 0.5em;
`;

interface Props {
  error?: boolean;
}

export const InputStyled = styled.input`
  width: 100%;
  margin-top: 0.2em;
  height: 48px;
  left: 59px;
  top: 305px;
  font-size: 1rem;
  padding: 0.4rem;
  border: ${(props: Props) =>
    props.error ? '1px solid #ff377f' : '1px solid #989fdb'};
  box-sizing: border-box;
  border-radius: 8px;
  background: transparent;
`;

export const MessageError = styled.span`
  color: #ff377f;
  font-size: 0.8rem;
  font-weight: 400;
  padding-left: 1em;
`;
