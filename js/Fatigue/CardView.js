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

class CardView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            imagePath: this.props.imagePath,
            lineColor: this.props.lineColor,
            pointColor: this.props.pointColor,
            yAxisData: this.props.yAxisData,    //[90, 80, 70, 60, 50]
        };
    }

    render() {
        let pathLine = new Path();
        let pathPoint = new Path();
        let pathCell = new Path();
        for (let i = 0; i < 5; i ++) {
            pathCell.moveTo(0, 10 + 30 * i).lineTo(320, 10 + 30 * i);
        }
        for (let i = 0; i < 7; i ++) {
            pathCell.moveTo(10 + 50 * i, 0).lineTo(10 + 50 * i, 140);
        }
        let yAxisData = this.state.yAxisData;
        let xAxisData = ['07.03', '07.04', '07.05', '07.06', '07.07', '07.08', '07.09'];
        let data = [73, 80, 66, 88, 76, 70, 68];
        let xCell = 50.0, yCell = 30.0;
        data.map((value, index) => {
            let xAxis = 10 + index * xCell;
            let yAxis = 10 + (90 - value) / 10.0 * yCell;
            if (index === 0) {
                pathLine.moveTo(xAxis, yAxis);
            } else {
                pathLine.lineTo(xAxis, yAxis);
            }
            pathPoint.moveTo(xAxis, yAxis - 5).arc(0, 10, 5).arc(0, -10, 5);
            return {x: xAxis, y: yAxis};
        });

        return(
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <View style={{width: width, height: 1, marginTop: 0, backgroundColor: '#e0e0e0'}} />
                <View style={{flexDirection: 'row', alignItems: 'center', height: 40, marginTop: 10, width: width}}>
                    <Image style={{width: 30, height: 30, marginLeft: 12}} source={this.state.imagePath} />
                    <Text style={{marginLeft: 10, color: '#333333', fontSize: 14}}>{this.state.title}</Text>
                </View>
                <View style={{width: width, height: 1, marginTop: 10, backgroundColor: '#e0e0e0'}} />

                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <View style={{width: 50, height: 155, justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: 10, marginRight: 6}}>
                        {yAxisData.map((data, index) => {
                            return <Text key={index} style={{fontSize: 12}}>{data}</Text>;
                        })}
                    </View>

                    <View style={{flexDirection: 'column', justifyContent: 'center', width: width - 50}}>
                        <Surface width={width - 50} height={150} style={{marginTop: 10}}>
                            <Shape d={pathCell} stroke="#e0e0e0" strokeWidth={2} strokeDash={[10, 10]} />
                            <Shape d={pathLine} stroke={this.state.lineColor} strokeWidth={3} />
                            <Shape d={pathPoint} stroke="#FFFFFF" fill={this.state.pointColor} strokeWidth={1} />
                        </Surface>
                        <View style={{width: 320, flexDirection: 'row', justifyContent: 'space-between', marginTop: 10,}}>
                            {xAxisData.map((data, index) => {
                                return <Text key={index} style={{fontSize: 10}}>{data}</Text>;
                            })}
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default CardView