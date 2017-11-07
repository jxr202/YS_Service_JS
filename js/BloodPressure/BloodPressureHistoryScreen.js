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

class BloodPressureHistoryScreen extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return(
            <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#eeeeee', marginTop: 0}}>
                <ScrollView>
                    <CustomNormalNav name="历史记录" navigation={this.props.navigation}/>
                    <DivideLine marginTop={25} />
                    <View style={{flexDirection: 'row', alignItems: 'center', width: width, height: 50, backgroundColor: '#ffffff'}}>
                        <Image style={{width: 24, height: 24, marginLeft: 18}} source={require('./img/血压记录.png')} />
                        <Text style={{marginLeft: 10, fontSize: 12, color: '#333333'}}>{"血压记录"}</Text>
                        <Text style={{marginLeft: 100, marginRight: 12, fontSize: 12}}>{"今日 10:40"}</Text>
                        <Image style={{marginRight: 12}} source={require('./img/手表.png')} />
                    </View>
                    <DivideLine />

                    <View style={{flexDirection: 'row', justifyContent: 'center', backgroundColor: '#ffffff'}}>
                        <View style={{width: 50, height: 170, justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: 10, marginRight: 6}}>
                            <Text style={{fontSize: 12}}>{"200"}</Text>
                            <Text style={{fontSize: 12, marginBottom: 30}}>50</Text>
                        </View>

                        <View style={{flexDirection: 'column', height: 170, width: width - 50}}>
                            <View style={{width: 300, height: 1, marginTop: 20, backgroundColor: '#e0e0e0',}} />
                            <View style={{width: 300, height: 100}}>
                                <Image style={{left: 60, top:30}} source={require('./img/收缩压.png')} />
                                <Image style={{left: 60, top:60}} source={require('./img/收缩压.png')} />
                            </View>
                            <View style={{width: 300, height: 1, marginTop: 10, backgroundColor: '#e0e0e0',}} />

                            <View style={{width: 300, flexDirection: 'row', justifyContent: 'space-between', marginTop: 10,}}>
                                <Text style={{fontSize: 12}}>0</Text>
                                <Text style={{fontSize: 12}}>12</Text>
                                <Text style={{fontSize: 12}}>24</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: width, height: 40, marginTop: 0, paddingTop: 10, backgroundColor: '#ffffff'}}>
                        <Image source={require('./img/收缩压.png')} />
                        <Text style={{fontSize: 12, marginLeft: 8}} >收缩压</Text>
                        <Image style={{marginLeft: 30}}  source={require('./img/舒张压.png')} />
                        <Text style={{fontSize: 12, marginLeft: 8}} >舒张压</Text>
                    </View>

                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: width, height: 60, marginTop: 0, paddingTop: 10, paddingBottom: 20, backgroundColor: '#ffffff'}}>
                        <Text style={{fontSize: 12}} >{"收缩压:"}</Text>
                        <Text style={{fontSize: 14, color: '#ff5d42', marginLeft: 5}}>{"108-120"}</Text>
                        <Text style={{fontSize: 12}} >{" / 舒张压:"}</Text>
                        <Text style={{fontSize: 14, color: '#ff5d42', marginLeft: 5}}>{"80-95"}</Text>
                        <Text style={{fontSize: 12}} >{"mmHg"}</Text>
                    </View>

                    <DivideLine />

                    <MorningBPCardView title={"清晨血压"} icon={require('./img/清晨血压.png')} />
                    <MorningBPCardView title={"午间血压"} icon={require('./img/午间血压.png')} />
                    <MorningBPCardView title={"睡前血压"} icon={require('./img/睡前血压.png')} />
                </ScrollView>
            </View>
        )
    }
}

export default BloodPressureHistoryScreen;
//AppRegistry.registerComponent("YS_Service_JS", () => BloodPressureHistoryScreen);