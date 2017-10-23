import React, {Component} from 'react';
import { ScrollView, StatusBar, Platform } from 'react-native';
import { ListItem, Separator } from '../components/list';
import  Icon  from 'react-native-vector-icons/Octicons';
// import {Ionicons } from '@expo/vector-icons';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component {
  render() {
    handleThemePress = () => {

    }
    handleSitePress = () => {

    }
    return (
      <ScrollView >
        <StatusBar translucent={false} barStyle="default" /> 
        <ListItem 
            text='Themes' 
            onPress={this.handleThemePress} 
            customIcon={<Icon name={`${ICON_PREFIX}-arrow-right`}     
                        color={ICON_COLOR} 
                        size={ICON_SIZE} />}
        /> 
        <Separator />  
        <ListItem 
            text='Fixer.io' 
            onPress={this.handleSitePress} 
            customIcon={<Icon name={`${ICON_PREFIX}-arrow-right`} 
                        size={ICON_SIZE} 
                        color={ICON_COLOR} />} 
        />  
      </ScrollView>
    );
  }
} 

export default Options;


