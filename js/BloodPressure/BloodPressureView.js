/**
 * Created by jxr20 on 2017/7/17.
 */
import React, {Component} from 'react'
import {
    ART,
    Text,
    View,
    Dimensions,
    AppRegistry,
    TouchableOpacity,
    Image,
} from 'react-native';

import DivideLine from './DivideLine';
import BottomClickView from "./BottomClickView";
import QuickLinksItem from './QuickLinksItem';

const width = Dimensions.get('window').width;
const titleArray = ['历史记录', '血压校准', '开始测量'];
const iconArray = [require('./img/历史记录.png'), require('./img/血压校准.png'), require('./img/开始测量.png')];
const linkIcons = [require('./img/系统设置.png'), require('./img/系统设置.png'), require('./img/在线商城.png')];
const linkTitles = ['同步"健康"数据', '启用迅智蓝牙血压计', '在线商城'];

class BloodPressureView extends Component {

    constructor(props) {
        super(props);
    }

    _onClick(index) {
        alert('点击了: ' + index);
    }

    _onItemClick(index) {
        alert('点击了条目: ' + index);
    }

    render() {
        return(
            <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff', marginTop: 15}}>
                <DivideLine />
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
                        <View style={{width: 300, height: 0.5, marginTop: 10, backgroundColor: '#e0e0e0',}} />

                        <View style={{width: 300, flexDirection: 'row', justifyContent: 'space-between', marginTop: 10,}}>
                            <Text style={{fontSize: 12}}>0</Text>
                            <Text style={{fontSize: 12}}>12</Text>
                            <Text style={{fontSize: 12}}>24</Text>
                        </View>
                    </View>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', height: 30, marginTop: 10, backgroundColor: '#ffffff'}}>
                    <Image source={require('./img/收缩压.png')} />
                    <Text style={{fontSize: 12, marginLeft: 8}} >收缩压</Text>
                    <Image style={{marginLeft: 30}}  source={require('./img/舒张压.png')} />
                    <Text style={{fontSize: 12, marginLeft: 8}} >舒张压</Text>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', height: 30, marginTop: 10, marginBottom: 20, backgroundColor: '#ffffff'}}>
                    <Text style={{fontSize: 12}} >{"收缩压:"}</Text>
                    <Text style={{fontSize: 14, color: '#ff5d42', marginLeft: 5}}>{"108-120"}</Text>
                    <Text style={{fontSize: 12}} >{" / 舒张压:"}</Text>
                    <Text style={{fontSize: 14, color: '#ff5d42', marginLeft: 5}}>{"80-95"}</Text>
                    <Text style={{fontSize: 12}} >{"mmHg"}</Text>
                </View>

                <BottomClickView number={3} title={titleArray} icon={iconArray} onClick={(index) => {this._onClick(index)}} />

                <View style={{flexDirection: 'row', alignItems: 'center', width: width, height: 30, marginTop: 0, backgroundColor: '#eeeeee'}}>
                    <Text style={{marginLeft: 15, fontSize: 10}}>{"快速链接"}</Text>
                </View>

                <View style={{flexDirection: 'column', alignItems: 'center', width: width, marginTop: 0, backgroundColor: 'green'}}>
                    <DivideLine />
                    <QuickLinksItem index={0} icon={linkIcons[0]} title={linkTitles[0]} onClick={(i) => {this._onItemClick(i)}}/>
                    <DivideLine left={50} style={{marginLeft: 10}} />
                    <QuickLinksItem index={1} icon={linkIcons[1]} title={linkTitles[1]} onClick={(i) => {this._onItemClick(i)}}/>
                    <DivideLine style={{marginLeft: 10}} />
                    <QuickLinksItem index={2} icon={linkIcons[2]} title={linkTitles[2]} onClick={(i) => {this._onItemClick(i)}}/>
                    <DivideLine />
                </View>
            </View>
        )
    }
}

export default BloodPressureView;
//AppRegistry.registerComponent("YS_Service_JS", () => BloodPressureView);