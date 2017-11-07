'use strict';

import React, {Component} from 'react'
import {
  Text,
  Button,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';

const {width, height} = Dimensions.get('window');
const [titleLeft] = [width * 0.5 - 3 * 18 - 10 - 20]

class CustomNormalNav extends Component {
  constructor(props) {
    super(props)
  }

  _goBack = () => {
    this.props.navigation.goBack()
  }

  render() {
    return (
      <View>
        <View style={{height: 20, backgroundColor: '#fe7f41'}}></View>
        <View style={{flexDirection: 'row', height: 44, backgroundColor: '#fe7f41'}}>
          <TouchableOpacity style={{justifyContent: 'center'}} onPress={this._goBack}>
            <Text style={{
              color: '#ffffff',
              marginLeft: 20,
            }}>返回</Text>
          </TouchableOpacity>
          <View style={{
            flex: 1,
            justifyContent: 'center',
          }}>
            <Text style={{
              color: '#ffffff',
              marginLeft: titleLeft,
              fontSize: 18,
              fontWeight: 'bold'
            }}>{this.props.name}</Text>
          </View>
        </View>
      </View>
    );
  }
}

module.exports = CustomNormalNav;