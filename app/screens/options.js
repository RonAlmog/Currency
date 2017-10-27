import React, {Component} from 'react';
import { ScrollView, StatusBar, Platform, Linking } from 'react-native';
import PropTypes  from 'prop-types'
import { ListItem, Separator } from '../components/list';
import  Icon  from 'react-native-vector-icons/Octicons';
import { connectAlert } from '../components/alert';
// import {Ionicons } from '@expo/vector-icons';

const ICON_PREFIX = 'md'; //  Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    name: PropTypes.string,
    alertWithType: PropTypes.func,  
  }
  handleThemePress = () => {
    this.props.navigation.navigate('Themes');
  }
  handleSitePress = () => {   
    Linking.openURL('httwp://fixer.io').catch(() => 
      this.props.alertWithType('error','Sorry!','Fixer.io cannot be opened righ now'));
  } 

  render() {
   
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

export default connectAlert(Options);


