import { StackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';
import Home from '../screens/home';
import CurrencyList from '../screens/currencylist';
import Options from '../screens/options';
import Themes from '../screens/themes';

const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null,
    }
  },
  Options: {
    screen: Options,
    navigationOptions: {
      headerTitle: 'Options'
    }
  },
  Themes: {
    screen: Themes
  }
}, {
  headerMode: 'screen'
})

export default StackNavigator({
  Home: {
    screen: HomeStack,
    
  },
  CurrencyList: {
    screen: CurrencyList,
    navigationOptions:({navigation}) => ({
      headerTitle: navigation.state.params.title
    }),
  }

}, {
  mode: 'modal',
  headerMode: 'none',
  cardStyle: {}
})

// card style
// paddingTop: StatusBar.currentHeight 