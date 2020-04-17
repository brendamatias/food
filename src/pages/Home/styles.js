import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-family: 'Pacifico Regular';
  font-size: 100px;
  line-height: 140px;
  width: 100%;
  text-align: center;
  color: #222222;
`;

export const Text = styled.Text`
  font-family: 'Open sans';
  font-size: 18px;
  margin-top: -20px;
  margin-bottom: 50px;
  color: #222222;
`;

export const SignUp = styled(Button)`
  width: 100%;
  margin-bottom: 14px;
`;

export const SignIn = styled(Button)`
  width: 100%;
  background: #fff;
`;

export const SignInText = styled.Text`
  color: #1b1b1b;
`;
