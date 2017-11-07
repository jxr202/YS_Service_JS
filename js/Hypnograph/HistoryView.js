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
    ScrollView,
    TouchableOpacity, Image
} from 'react-native';

const {Surface, Shape, Path, Group} = ART;
const {width, height} = Dimensions.get('window');

import CustomNormalNav from './CustomNormalNav'
import SleepDataView from './SleepDataView'
import HeartRateView from './HeartRateView'
import SleepTimeView from './SleepTimeView'
import WakingTimeView from './WakingTimeView'

class HistoryView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={{flex:1, backgroundColor: '#eeeeee'}}>
                <ScrollView>
                    <CustomNormalNav name="历史记录" navigation={this.props.navigation}/>
                    <SleepDataView style={{marginTop: 20}} />
                    <HeartRateView style={{marginTop: 5}} />
                    <SleepTimeView style={{marginTop: 5}} />
                    <WakingTimeView style={{marginTop: 5, marginBottom: 5}} />
                </ScrollView>
            </View>
        )
    }

}

AppRegistry.registerComponent('YS_Service_JS', () => HistoryView);