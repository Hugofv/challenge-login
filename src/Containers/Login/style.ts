import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

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

  @media (min-width: 768px) {
    background-position: 80% 50%;
  }

  @media (min-width: 1024px) {
    background-position: -10em 0;
  }
`;

export const Card = styled.div`
  background: #faf5ff;
  position: absolute;
  padding: 1em;
  width: 80%;
  left: 10%;
  height: 55vh;
  margin-top: 25%;
  z-index: 5;
  border-radius: 8px;

  @media (min-width: 768px) {
    height: 100vh;
    margin: 0;
    padding: 3em;
    left: unset;
    width: 60%;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    height: 100vh;
    margin: 0;
    padding: 3em;
    left: unset;
    width: 40%;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  line-height: 32px;
  text-align: center;
  color: #383e71;
  font-weight: 400;

  @media (min-width: 768px) {
    text-align: left;
    line-height: 1em;
    font-size: 2.7rem;
  }
`;

export const Subtitle = styled.span`
  font-weight: 600;
  font-size: 0.9rem;
  line-height: 2.5em;
  color: #989fdb;

  @media (min-width: 768px) {
    font-size: 1.3rem;
    line-height: 1.5em;
    padding: 2em 0;
  }
`;

export const BoxButton = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1em;
  justify-content: center;
  > button {
    width: 70%;

    @media (min-width: 768px) {
      width: 100%;
      box-shadow: 0px 10px 25px #CF99DB;
    }
  }
`;

export const BoxForgot = styled.div`
  color: #fff;
  width: 100%;
  margin-top: 15%;
  text-align: center;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    text-decoration: underline;

    @media (min-width: 768px) {
      color: #9f38b3;
    }
  }

  @media (min-width: 768px) {
    color: #989fdb;
  }
`;
