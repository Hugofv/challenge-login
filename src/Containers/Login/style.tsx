import styled from 'styled-components';

export const BackgroundImage = styled.div`
  background-image: url('../../assets/img/background.jpg');
  background-size: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  bottom: 0;
  left: 0;
  overflow: auto;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  height: 100vh;
  > div:first-child {
    background: linear-gradient(180deg, #130525 0%, rgba(105, 57, 153, 0) 100%);
    height: 100%;
    width: 100%;
    transform: rotate(-180deg);
  }
`;

export const Card = styled.div`
  background: #faf5ff;
  position: absolute;
  padding: 1em;
  width: 80%;
  left: 10%;
  height: 50vh;
  margin-top: 50%;
  z-index: 5;
  border-radius: 8px;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  line-height: 32px;
  text-align: center;
  color: #383e71;
`;

export const Subtitle = styled.span`
  font-weight: 600;
  font-size: .9rem;
  line-height: 2.5em;
  color: #989fdb;
`;
