import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

import styles from './styles';

const Logo = () => (
    <View style={styles.container}>
        <Image 
            resizeMode="contain"
            style={styles.containerImage} 
            source={require(('./images/background.png'))}>
                <Image 
                    resizeMode="contain"
                    style={styles.image} 
                    source={require(('./images/logo.png'))} />
        </Image>
        <Text style={styles.text}>Currency Converter</Text>
    </View>
);

export default Logo;