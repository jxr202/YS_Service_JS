/**
 * Created by jxr20 on 2017/7/13.
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

class WakingTimeView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={{alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff', marginTop: 15, marginBottom: 20}}>
                <BaseView title={"起床时间"} imagePath={require('./img/起床时间.png')} lineColor={'#ffdc7e'} pointColor={'#ffc89f'} yAxisData={['09:00', '08:30', '07:00', '06:30', '05:00']} />
                <View style={{flexDirection: 'row', alignItems: 'center', height: 30, marginTop: 16, marginBottom: 20}}>
                    <Text style={{fontSize: 14, color: '#666666',}}>{"平均起床时间"}</Text>
                    <Text style={{fontSize: 16, color: '#ff5d42', marginLeft: 5}}>{"08:30"}</Text>
                </View>
            </View>
        )
    }
}

export default WakingTimeView;
//AppRegistry.registerComponent('YS_Service_JS', () => WakingTimeView);