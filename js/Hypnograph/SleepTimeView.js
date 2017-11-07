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

class SleepTimeView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={{alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff', marginTop: 15}}>
                <BaseView title={"入睡时间"} imagePath={require('./img/入睡时间.png')} lineColor={'#7ee8ff'} pointColor={'#9fadff'} yAxisData={['00:00', '23:30', '23:00', '22:30', '22:00']} />
                <View style={{flexDirection: 'row', alignItems: 'center', height: 30, marginTop: 16, marginBottom: 20}}>
                    <Text style={{fontSize: 14, color: '#666666',}}>{"平均入睡时间"}</Text>
                    <Text style={{fontSize: 15, color: '#ff5d42', marginLeft: 5}}>{"22:43"}</Text>
                </View>
            </View>
        )
    }
}

export default SleepTimeView;
//AppRegistry.registerComponent('YS_Service_JS', () => SleepTimeView);