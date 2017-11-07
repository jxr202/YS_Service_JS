/**
 * Created by jxr20 on 2017/7/20.
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

const {Surface, Shape, Path} = ART;
const width = Dimensions.get('window').width;
const titleArray = '历史记录';
const iconArray = require('./img/历史记录.png');
const linkIcons = [require('./img/心电手环.png'), require('./img/系统设置.png'), require('./img/在线商城.png')];
const linkTitles = ['绑定迅智心电手环', '启用迅智蓝牙血压计', '在线商城'];

class FatigueScreen extends Component {

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
        let points = [{x: 80, y: 120}, {x: 110, y: 90}, {x: 180, y: 90}, {x: 220, y: 40}];
        let pathRect1 = new Path().moveTo(0, 0).lineTo(300, 0).lineTo(300, 50).lineTo(0, 50).close();
        let pathRect2 = new Path().moveTo(0, 50).lineTo(300, 50).lineTo(300, 100).lineTo(0, 100).close();
        let pathRect3 = new Path().moveTo(0, 100).lineTo(300, 100).lineTo(300, 150).lineTo(0, 150).close();
        let pathLine = new Path();
        let pathPoint = new Path();
        points.map((data, index) => {
            if (index === 0) {
                pathLine.moveTo(data.x, data.y)
            } else {
                pathLine.lineTo(data.x, data.y)
            }
            pathPoint.moveTo(data.x, data.y - 5).arc(0, 10, 5).arc(0, -10, 5);
        });

        return(
            <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff', marginTop: 15}}>
                <DivideLine />
                <View style={{flexDirection: 'row', alignItems: 'center', width: width, height: 50, backgroundColor: '#ffffff'}}>
                    <Image style={{width: 24, height: 24, marginLeft: 18}} source={require('./img/疲劳度.png')} />
                    <Text style={{marginLeft: 10, fontSize: 12, color: '#333333'}}>{"疲劳度"}</Text>
                    <Text style={{marginLeft: 120, marginRight: 12, fontSize: 12}}>{"今日 10:40"}</Text>
                    <Image style={{marginRight: 12}} source={require('./img/手表.png')} />
                </View>
                <DivideLine />

                <View style={{marginTop: 20, marginBottom: 40, flexDirection: 'row', justifyContent: 'center', backgroundColor: '#ffffff'}}>
                    <View style={{width: 50, height: 170, justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: 10, marginRight: 6}}>
                        <Text style={{fontSize: 8, marginTop: 18}}>{"精力充沛"}</Text>
                        <Text style={{fontSize: 8}}>{"轻度疲劳"}</Text>
                        <Text style={{fontSize: 8, marginBottom: 18}}>{"十分疲劳"}</Text>
                    </View>

                    <View style={{flexDirection: 'column', justifyContent: 'center', width: width - 50}}>
                        <Surface width={width - 50} height={150} style={{marginTop: 10}}>
                            <Shape d={pathRect1} stroke="#000000" fill="#ccf5ff" strokeWidth={0} />
                            <Shape d={pathRect2} stroke="#000000" fill="#8ae8ff" strokeWidth={0} />
                            <Shape d={pathRect3} stroke="#000000" fill="#7dbdff" strokeWidth={0} />
                            <Shape d={pathLine} stroke="#ff8042" strokeWidth={3} />
                            <Shape d={pathPoint} stroke="#FFFFFF" fill="#ff8042" strokeWidth={1} />
                        </Surface>
                        <View style={{width: 300, flexDirection: 'row', justifyContent: 'space-between', marginTop: 10,}}>
                            <Text style={{fontSize: 12}}>{"0"}</Text>
                            <Text style={{fontSize: 12}}>{"8"}</Text>
                            <Text style={{fontSize: 12}}>{"16"}</Text>
                            <Text style={{fontSize: 12}}>{"24"}</Text>
                        </View>
                    </View>
                </View>

                <BottomClickView number={1} title={titleArray} icon={iconArray} onClick={(index) => {this._onClick(index)}} />

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

export default FatigueScreen;
//AppRegistry.registerComponent("YS_Service_JS", () => FatigueScreen);