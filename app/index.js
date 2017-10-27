import React, { Component } from 'react';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/home';
import CurrencyList from './screens/currencylist';
import Options from './screens/options';
import Themes from './screens/themes'; 
import Navigator from './config/routes';
import { AlertProvider } from './components/alert';

EStyleSheet.build({
    $primaryBlue: '#4F6D7A',
    $primaryGreen: '#00Bd9D',
    $primaryOrange: '#D57A66',
    $primaryPurple: '#9E768F',  
    $white: '#FFFFFF',
    $border: '#E2E2E2',
    $inputText: '#797979',  
    $lightGray: '#F0F0F0',
    $darkText: '#343434',
   
});

// $outline: 1, 

export default () => <AlertProvider><Navigator /></AlertProvider>;   
