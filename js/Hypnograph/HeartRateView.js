/**
 * Created by jxr20 on 2017/7/12.
 */

import React, {Component} from 'react'
import {
    ART,
    Text,
    View,
    Dimensions,
    AppRegistry,
    TouchableOpacity, Image
} from 'react-native';

const {Surface, Shape, Path, Group} = ART;
const {width, height} = Dimensions.get('window');

import BaseView from './BaseView'

class HeartRateView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={{alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff', marginTop: 15}}>
                <BaseView title={"睡眠心率"} imagePath={require('./img/heart.png')} lineColor={'#ffb27e'} pointColor={'#ca9fff'} yAxisData={[90, 80, 70, 60, 50]} />
                <View style={{flexDirection: 'row', alignItems: 'center', height: 30, marginTop: 16, marginBottom: 20}}>
                    <Text style={{fontSize: 14, color: '#666666',}}>{"平均睡眠心率"}</Text>
                    <Text style={{fontSize: 16, color: '#ff5d42', marginLeft: 5, marginRight: 5}}>{"68"}</Text>
                    <Text style={{fontSize: 14, color: '#666666',}}>{"次/分"}</Text>
                </View>
            </View>
        )
    }

}

export default HeartRateView;
//AppRegistry.registerComponent('YS_Service_JS', () => HeartRateView);
