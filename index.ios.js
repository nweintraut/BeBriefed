/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import MainContainer from './components/MainContainer'

class BeBriefed extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedService: 'mail',
			services: [
				{ key: 'web',  isUp: true,  lastUpTime: null },
				{ key: 'db',   isUp: false, lastUpTime: (new Date((new Date()).getTime() - 5 * 60 * 1000))},
				{ key: 'mail', isUp: true,  lastUpTime: null },
			],
		}
	}
  render() {
    return (
      <MainContainer 
      	selectedService={this.state.selectedService}
      	services={this.state.services}
      />
    );
  }
}


AppRegistry.registerComponent('BeBriefed', () => BeBriefed);
