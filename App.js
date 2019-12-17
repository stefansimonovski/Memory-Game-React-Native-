import React from 'react';
import { View, ImageBackground } from 'react-native';
import {NativeRouter, Switch, Route } from 'react-router-native'

import Home from './components/Home'
import Game from './components/Game'

export default class HomeScreen extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ImageBackground source={require('./assets/img/background.jpg')} style={{width: '100%', height: '100%'}}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/game' component={Game} />
            </Switch>
          </ImageBackground>
        </View>
      </NativeRouter>
    );
  }
}
