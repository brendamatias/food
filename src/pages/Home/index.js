import React from 'react';
import { View } from 'react-native';

import Button from '~/components/Button';
// import { Container } from './styles';

export default function Home() {
  return (
    <View>
      <Button>Register</Button>
      <Button>Sign In</Button>
    </View>
  );
}
