import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import Feed from './src/screen/Feed';
import Comments from './src/screen/Comments'

const MainNavigation = createStackNavigator ({
  Feed: Feed,
  Comments: Comments
}, {
  initialRouteName: 'Feed'
});


export default class App extends React.Component {
  render() {
    return (
      <MainNavigation/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
