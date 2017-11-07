/**
 * Created by jxr20 on 2017/7/10.
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

import {BarChart} from 'react-native-charts-wrapper';

const {Surface, Shape, Path} = ART;
const {width, height} = Dimensions.get('window');

class Square extends Component {

    render(){
        let path1 = new Path().moveTo(1,1).lineTo(1,150).lineTo(28,150).lineTo(28,1).close();
        let path2 = new Path().moveTo(28,75).lineTo(28,150).lineTo(80,150).lineTo(80,75).close();
        let path3 = new Path().moveTo(80,1).lineTo(80,150).lineTo(239,150).lineTo(239,1).close();
        let path4 = new Path().moveTo(239,112).lineTo(239,150).lineTo(256,150).lineTo(256,112).close();
        let path5 = new Path().moveTo(256,75).lineTo(256,150).lineTo(273,150).lineTo(273,75).close();
        let path6 = new Path().moveTo(273,1).lineTo(273,150).lineTo(350,150).lineTo(350,1).close();

        return(
            <View style={this.props.style}>
                <Surface width={350} height={200}>
                    <Shape d={path1} stroke="#000000" fill="#b8d4ff" strokeWidth={0} />
                    <Shape d={path2} stroke="#000000" fill="#ffdeb8" strokeWidth={0} />
                    <Shape d={path3} stroke="#000000" fill="#b8d4ff" strokeWidth={0} />
                    <Shape d={path4} stroke="#000000" fill="#b7ecff" strokeWidth={0} />
                    <Shape d={path5} stroke="#000000" fill="#ffdeb8" strokeWidth={0} />
                    <Shape d={path6} stroke="#000000" fill="#b8d4ff" strokeWidth={0} />
                </Surface>
            </View>
        )
    }
}

class SleepDataView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            legend: {
                enabled: true,
                textSize: 14,
                form: 'SQUARE',
                formSize: 14,
                xEntrySpace: 10,
                yEntrySpace: 5,
                formToTextSpace: 0,
                wordWrapEnabled: true,
                maxSizePercent: 0.5
            },
            data: {
                dataSets: [{
                    values: [{y: 100}, {y: 75}, {y: 100}, {y: 85}, {y: 75}, {y: 100}],
                    label: 'Bar dataSet',

                }],
            },
            xAxis: {
                valueFormatter: ['22:00', '', '', '', '', '06:35'],
                granularityEnabled: true,
                granularity : 1,
            }
        };
    }

    handleSelect(event) {
        let entry = event.nativeEvent
        if (entry === null) {
            this.setState({...this.state, selectedEntry: null})
        } else {
            this.setState({...this.state, selectedEntry: JSON.stringify(entry)})
        }
    }

    render() {
        return(
            <View style={{alignItems: 'center', backgroundColor: '#ffffff', marginTop: 15}}>
                <View style={{width: width, height: 0.33, marginTop: 0, backgroundColor: '#e0e0e0'}} />
                <View style={{flexDirection: 'row', alignItems: 'center', height: 40, marginTop: 6}}>
                    <Image style={{width: 24, height: 24, marginLeft: 12}} source={require('./img/moon_start.png')} />
                    <Text style={{marginLeft: 10, color: '#333333'}}>{"睡眠记录"}</Text>
                    <Text style={{marginLeft: 140, marginRight: 12, fontSize: 12}}>{"今日 10:40"}</Text>
                    <Image style={{width: 20, height: 20, marginRight: 12}} source={require('./img/watch.png')} />
                </View>
                <View style={{width: width, height: 0.66, marginTop: 10, backgroundColor: '#e0e0e0'}} />

                <Square style={{width: 350, height: 150, alignItems: 'center', marginTop: 20}} />
                <View style={{flexDirection: 'row', alignItems: 'center',justifyContent: 'space-between', width: 350, height: 30, marginTop: 10}}>
                    <Text style={{marginLeft: 20}}>{"22:00"}</Text>
                    <Text style={{marginRight: 20}}>{"06:35"}</Text>
                </View>

                {/*<View style={{height: 300}} >
                    <BarChart
                        style={{flex: 1}}
                        data={this.state.data}
                        xAxis={this.state.xAxis}
                        animation={{durationX: 2000}}
                        legend={this.state.legend}
                        drawBarShadow={false}
                        drawValueAboveBar={true}
                        drawHighlightArrow={true}
                        onSelect={this.handleSelect.bind(this)}
                    />
                </View>*/}
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
                    <View style={{width: 20, height: 20, backgroundColor: '#ffb17d',}} />
                    <Text style={{marginLeft: 5}}>{"清醒"}</Text>
                    <View style={{width: 20, height: 20, backgroundColor: '#b7ecff', marginLeft: 40}} />
                    <Text style={{marginLeft: 5}}>{"浅睡"}</Text>
                    <View style={{width: 20, height: 20, backgroundColor: '#b8d4ff', marginLeft: 40}} />
                    <Text style={{marginLeft: 5}}>{"深睡"}</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', height: 50, marginTop: 15, marginBottom: 20}}>
                    <View style={{flexDirection: 'column', alignItems: 'center', flex: 1}}>
                        <Text>{"浅睡"}</Text>
                        <Text style={{marginTop: 10}}>{"5小时20分钟"}</Text>
                    </View>
                    <View style={{width: 1, height: 50, marginTop: 6, backgroundColor: '#e0e0e0'}} />
                    <View style={{flexDirection: 'column', alignItems: 'center', flex: 1}}>
                        <Text>{"深睡"}</Text>
                        <Text style={{marginTop: 10}}>{"2小时20分钟"}</Text>
                    </View>
                    <View style={{width: 1, height: 50, marginTop: 6, backgroundColor: '#e0e0e0'}} />
                    <View style={{flexDirection: 'column', alignItems: 'center', flex: 1}}>
                        <Text>{"平均心跳"}</Text>
                        <Text style={{marginTop: 10}}>{"67次/分钟"}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default SleepDataView;

//AppRegistry.registerComponent('YS_Service_JS', () => SleepDataView);