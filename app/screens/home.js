import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text, View, StatusBar, KeyboardAvoidingView
  } from 'react-native';
  import {connect} from 'react-redux';
  import PropTypes  from 'prop-types'

  import { Container } from '../components/container';
  import { Logo } from '../components/logo';
  import { InputWithButton } from '../components/textinput';
  import { ClearButton } from '../components/button'; 
  import { LastConverted } from '../components/text';
  import { Header } from '../components/header';

  import { swapCurrency, changeCurrencyAmount } from '../actions/currencies';

  class Home extends Component {
    static propTypes = {
      navigation: PropTypes.object, 
      dispatch: PropTypes.func,
      baseCurrency: PropTypes.string,
      quoteCurrency: PropTypes.string,
      amount: PropTypes.number,
      conversionRate: PropTypes.number,
      isFetching: PropTypes.bool,
      lastConvertedDate: PropTypes.object
    }
    handlePressBaseCurrency = () => {
      console.log('press base');
      this.props.navigation.navigate('CurrencyList', {title: 'Base Currency'});
    }
    handlePressQuoteCurrency = () => { 
      console.log('press quote');
      this.props.navigation.navigate('CurrencyList', {title: 'Quote Currency'});
    }
    handleTextChange = (text) => {
      this.props.dispatch(changeCurrencyAmount(text));
      
    }
    handleSwapCurrency = () => {
      console.log('swap currency');
      this.props.dispatch(swapCurrency());
    }
    handleOptionsPress = () => {
      console.log('options press');
      this.props.navigation.navigate('Options');
    }


    render () {
      let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);
      if (this.props.isFetching) {
        quotePrice = '...'
      }
      
      return (
        <Container>
          <StatusBar translucent={false} barStyle="light-content" />  
          <Header onPress={this.handleOptionsPress} />
          <KeyboardAvoidingView behavior="padding">
          <Logo />
          <InputWithButton 
            buttonText={this.props.baseCurrency}
            onPress={this.handlePressBaseCurrency} 
            defaultValue={this.props.amount.toString()}
            keyboardType="numeric"
            onChangeText={this.handleTextChange}
          />
          <InputWithButton 
            buttonText={this.props.quoteCurrency}
            onPress={this.handlePressQuoteCurrency}
            editable={false}
            value={quotePrice}
          />
          <LastConverted
            base={this.props.baseCurrency}
            quote={this.props.quoteCurrency}
            date={this.props.lastConvertedDate}
            conversionRate={this.props.conversionRate}
          />
          <ClearButton
            text="Reverse Currencies" 
            onPress={this.handleSwapCurrency}
          />
          </KeyboardAvoidingView>
        </Container>
      )
    }
  } 

const mapStateToProps = (state) => {
  const baseCurrency = state.currencies.baseCurrency;
  const quoteCurrency = state.currencies.quoteCurrency;
  const conversionSelector = state.currencies.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};

  return {
    baseCurrency,
    quoteCurrency,
    amount: state.currencies.amount,
    conversionRate: rates[quoteCurrency] || 0,
    isFetching: conversionSelector.isFetching,
    lastConvertedDate: conversionSelector.date ? new Date(conversionSelector.date) : new Date()
  };
};

export default connect(mapStateToProps)(Home);
