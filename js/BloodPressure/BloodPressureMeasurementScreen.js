/**
 * Created by jxr20 on 2017/7/19.
 */
import React, {Component} from 'react'
import {
    ART,
    Text,
    View,
    Dimensions,
    AppRegistry,
    TouchableOpacity,
    Image, ScrollView,
} from 'react-native';

import CustomNormalNav from './CustomNormalNav';
import DivideLine from './DivideLine';
import BottomClickView from "./BottomClickView";
import QuickLinksItem from './QuickLinksItem';
import MorningBPCardView from "./BPCardView";

const width = Dimensions.get('window').width;
const {Surface, Shape, Path, Group} = ART;

class BloodPressureMeasurementScreen extends Component {

    constructor(props) {
        super(props);
    }

    reMeasure = () => {

    };

    render() {
        let xCell = 10.0, yCell = 20.0;
        let pathPoint = new Path();
        let pathCell = new Path();
        for (let i = 0; i < 8; i ++) {
            pathCell.moveTo(0, yCell * i).lineTo(300, yCell * i);
        }
        for (let i = 0; i < 31; i ++) {
            pathCell.moveTo(xCell * i, 0).lineTo(xCell * i, 140);
        }

        return(
            <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff', marginTop: 0}}>
                <ScrollView style={{}}>
                    <CustomNormalNav name="血压测量" navigation={this.props.navigation}/>
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image style={{marginTop: 25}} source={require('./img/心.png')} />
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'center', width: width, backgroundColor: '#ffffff'}}>
                        <Text style={{fontSize: 20, color: '#ff5d42'}}>{"120/80"}</Text>
                        <Text style={{marginLeft: 8, fontSize: 12, marginTop: 10, color: '#333333'}}>{"mmHg"}</Text>
                    </View>

                    <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
                        <Text style={{fontSize: 12, color: '#333333'}}>{"血压正常"}</Text>
                    </View>

                    <View style={{alignItems: 'center', justifyContent: 'center', width: width, marginTop: 20}}>
                        <Surface width={300} height={150} style={{marginTop: 10, }}>
                            <Shape d={pathCell} stroke="#e0e0e0" strokeWidth={2} />
                            <Shape d={pathPoint} stroke="#FFFFFF" fill={'#333333'} strokeWidth={1} />
                        </Surface>
                    </View>

                    <View style={{alignItems: 'center', justifyContent: 'center', width: width, marginTop: 10}}>
                        <Surface width={300} height={150} style={{marginTop: 10}}>
                            <Shape d={pathCell} stroke="#e0e0e0" strokeWidth={2} />
                            <Shape d={pathPoint} stroke="#FFFFFF" fill={'#333333'} strokeWidth={1} />
                        </Surface>
                    </View>

                    <TouchableOpacity onPress={() => {this.reMeasure()}} style={{marginLeft: 20, marginRight: 20, marginTop: 30, height: 50, borderRadius: 5,
                        backgroundColor: '#ff5d42', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{color: '#ffffff'}}>再测一次</Text>
                    </TouchableOpacity>

                    <View style={{marginBottom: 30, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{marginTop: 8, fontSize: 12}}>{"测量原理是什么？"}</Text>
                    </View>

                </ScrollView>
            </View>
        )
    }
}

export default BloodPressureMeasurementScreen;
//AppRegistry.registerComponent("YS_Service_JS", () => BloodPressureMeasurementScreen);