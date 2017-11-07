'use strict';

import React, {Component} from 'react'
import {
    View,
    Image,
    StyleSheet,
    AppRegistry,
    Text,
    TouchableOpacity, ScrollView
} from 'react-native'

//import {actions} from '../../actions/Login'
//import {connect} from 'react-redux'

const testNumber = 3;
const unit = "分";
const nomalDownNumber = 8;
const nomalUpNumber = 20;
const stateLowIndicator = "健康";
const stateNormalIndicator = "疑似患病";
const stateHighIndicator = "很严重";

const [numberDownLeft, numberUpLeft] = [106 - 16, 106 + 107 - 16];
const [lowIndicatorLeft, normalIndicatorLeft, highIndicatorLeft] = [106 * 0.5 - 14, 106 * 1.5 - 14, 106 * 2.5 - 14];

class PsychologicalExaminationResultView extends Component {
  constructor(props) {
    super(props);
    this.state = {
        count: this.props.count,
    }
  }

  render() {
    return (
      <View style={styles.containers}>
        <View style={styles.numberContainer}>
          <Text style={styles.fontNumber}>{this.state.count}</Text>
          <Text style={styles.fontUnit}>{unit}</Text>
        </View>
        <View style={{alignItems: 'center', marginTop: 30}}>
          <View style={{width: 320, flexDirection: 'row'}}>
            <View style={{
              width: 106,
              height: 10,
              backgroundColor: '#ffde42',
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5
            }}/>
            <View style={{width: 107, height: 10, backgroundColor: '#ff8e42'}}/>
            <View style={{
              width: 106,
              height: 10,
              backgroundColor: '#a4cf42',
              borderBottomRightRadius: 5,
              borderTopRightRadius: 5
            }}/>
          </View>
        </View>

        <View style={{alignItems: 'center', marginTop: 10}}>
          <View style={styles.nomalNumberContainer}>
            <Text style={{
              fontSize: 14,
              color: '#333333',
              fontWeight: '500',
              left: lowIndicatorLeft,
              position: 'absolute',
              top: 10
            }}>{stateLowIndicator}</Text>
            <Text style={{
              fontSize: 12,
              color: '#ff6a42',
              left: numberDownLeft,
              position: 'absolute'
            }}>{nomalDownNumber}</Text>
            <Text style={{
              fontSize: 14,
              color: '#333333',
              fontWeight: '500',
              left: normalIndicatorLeft,
              position: 'absolute',
              top: 10
            }}>{stateNormalIndicator}</Text>
            <Text style={{
              fontSize: 12,
              color: '#ff6a42',
              left: numberUpLeft,
              position: 'absolute'
            }}>{nomalUpNumber}</Text>
            <Text style={{
              fontSize: 14,
              color: '#333333',
              fontWeight: '500',
              left: highIndicatorLeft,
              position: 'absolute',
              top: 10
            }}>{stateHighIndicator}</Text>
          </View>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
    containers: {
        flex: 1,
        backgroundColor: '#ffffff',
        height: 420,
    },
  numberContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 170
  },
  fontNumber: {
    fontSize: 30,
    color: '#ff5d42',
    fontWeight: '500'
  },
  fontUnit: {
    fontSize: 15,
    color: '#666666',
    top: 15
  },
  nomalNumberContainer: {
    flexDirection: 'row',
    width: 320,
  }

});

module.exports = PsychologicalExaminationResultView;
//AppRegistry.registerComponent('YS_Service_js', () => PsychologicalExaminationResultView);