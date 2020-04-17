import React from 'react';

import Background from '~/components/Background';

import { Content, Title, Text, SignUp, SignIn, SignInText } from './styles';

import background2 from '~/assets/background23.jpg';

export default function Home() {
  return (
    <Background image={background2}>
      <Content>
        <Title>Food</Title>
        <Text>Lorem ipsum lorem ipsum lorem</Text>

        <SignUp>Register</SignUp>
        <SignIn>
          <SignInText>Sign In</SignInText>
        </SignIn>
      </Content>
    </Background>
  );
}
