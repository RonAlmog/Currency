import React, { Component } from 'react';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/home';

EStyleSheet.build({
    $primaryBlue: '#4F6D7A'
});

export default () => <Home />;
