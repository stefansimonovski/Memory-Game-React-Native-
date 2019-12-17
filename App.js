import React from 'react';
import { View } from 'react-native';
import {NativeRouter, Switch, Route } from 'react-router-native'

import Home from './components/Home'
import Game from './components/Game'

export default class HomeScreen extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/game' component={Game} />
          </Switch>
        </View>
      </NativeRouter>
    );
  }
}
