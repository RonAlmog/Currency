import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text, View, StatusBar
  } from 'react-native';

  import { Container } from '../components/container';
  import { Logo } from '../components/logo';

  export default () => (
    <Container>
      <StatusBar translucent={false} barStyle="light-content" /> 
      <Logo />

    </Container>
  );
