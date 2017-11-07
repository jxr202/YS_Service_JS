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
    Image, ScrollView, Modal, TouchableHighlight, TextInput,
} from 'react-native';

import CustomNormalNav from './CustomNormalNav';
import DivideLine from './DivideLine';
import BottomClickView from "./BottomClickView";
import QuickLinksItem from './QuickLinksItem';
import MorningBPCardView from "./BPCardView";

const width = Dimensions.get('window').width;
const {Surface, Shape, Path, Group} = ART;


class Stage1 extends Component {

    _next = () => {

    };

    render() {
        return(
            <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#eeeeee', marginTop: 0}}>
                <ScrollView>
                    <View style={{width: width, marginTop: 10, backgroundColor: '#ffffff', alignItems: 'center', justifyContent: 'center'}}>
                        <Image style={{marginTop: 0}} source={require('./img/图1.png')} />
                    </View>

                    <View style={{width: width, height: 40, marginTop: 10, backgroundColor: '#ffffff', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text style={{marginLeft: 14, fontSize: 12, color: '#333333'}}>{"测量对象"}</Text>
                        <TextInput placeholder="比如爷爷奶奶" underlineColorAndroid='transparent' style={{marginRight: 20, width: 150, textAlign: 'right', fontSize: 12, color: '#666666', value: '比如爷爷奶奶'}} />
                    </View>

                    <View style={{width: width, height: 35, backgroundColor: '#eeeeee', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                        <Text style={{marginLeft: 14, fontSize: 10, color: '#333333'}}>{"以下资料将作为血压评估依据，请依照实际情况录入"}</Text>
                    </View>

                    <View style={{width: width, height: 45, backgroundColor: '#ffffff', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text style={{marginLeft: 14, fontSize: 12, color: '#333333'}}>{"性别"}</Text>
                        <TextInput underlineColorAndroid='transparent' style={{marginRight: 20, width: 150, textAlign: 'right', fontSize: 12, color: '#666666'}} />
                    </View>

                    <DivideLine marginLeft={10} />

                    <View style={{width: width, height: 40, backgroundColor: '#ffffff', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text style={{marginLeft: 14, fontSize: 12, color: '#333333'}}>{"出生年月"}</Text>
                        <TextInput underlineColorAndroid='transparent' style={{marginRight: 20, width: 150, textAlign: 'right', fontSize: 12, color: '#666666'}} />
                    </View>

                    <DivideLine marginLeft={10} />

                    <View style={{width: width, height: 40, backgroundColor: '#ffffff', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text style={{marginLeft: 14, fontSize: 12, color: '#333333'}}>{"身高"}</Text>
                        <TextInput underlineColorAndroid='transparent' style={{marginRight: 20, width: 150, textAlign: 'right', fontSize: 12, color: '#666666'}} />
                    </View>

                    <DivideLine marginLeft={10} />

                    <View style={{width: width, height: 40, backgroundColor: '#ffffff', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text style={{marginLeft: 14, fontSize: 12, color: '#333333'}}>{"体重"}</Text>
                        <TextInput underlineColorAndroid='transparent' style={{marginRight: 20, width: 150, textAlign: 'right', fontSize: 12, color: '#666666'}} />
                    </View>

                    <TouchableOpacity onPress={() => {this.props.next()}} style={{width: width - 40, height: 40, marginLeft: 20, marginRight: 20, marginTop: 30, borderRadius: 5,
                        backgroundColor: '#ff5d42', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{color: '#ffffff'}}>下一步</Text>
                    </TouchableOpacity>

                    <View style={{marginBottom: 30, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{marginTop: 8, fontSize: 12}}>{"为什么要校准？"}</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

class Stage2 extends Component {

    _next = () => {

    };

    render() {
        return(
            <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#eeeeee', marginTop: 0}}>
                <ScrollView>
                    <View style={{width: width, marginTop: 10, backgroundColor: '#ffffff', alignItems: 'center', justifyContent: 'center'}}>
                        <Image style={{marginTop: 0}} source={require('./img/图2.png')} />
                    </View>

                    <View style={{width: width, height: 35, backgroundColor: '#eeeeee', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                        <Text style={{marginLeft: 14, fontSize: 10, color: '#333333'}}>{"请输入国家认证合格的血压计测量值"}</Text>
                    </View>

                    <View style={{width: width, height: 45, backgroundColor: '#ffffff', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text style={{marginLeft: 14, fontSize: 12, color: '#333333'}}>{"收缩压（高压）"}</Text>
                        <TextInput underlineColorAndroid='transparent' style={{marginRight: 20, width: 150, textAlign: 'right', fontSize: 12, color: '#666666'}} />
                    </View>

                    <DivideLine marginLeft={10} />

                    <View style={{width: width, height: 40, backgroundColor: '#ffffff', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text style={{marginLeft: 14, fontSize: 12, color: '#333333'}}>{"舒张压（低压）"}</Text>
                        <TextInput underlineColorAndroid='transparent' style={{marginRight: 20, width: 150, textAlign: 'right', fontSize: 12, color: '#666666'}} />
                    </View>


                    <TouchableOpacity onPress={() => this.props.next()} style={{width: width - 40, height: 40, marginLeft: 20, marginRight: 20, marginTop: 80, borderRadius: 5,
                        backgroundColor: '#ff5d42', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{color: '#ffffff'}}>下一步</Text>
                    </TouchableOpacity>

                    <View style={{marginBottom: 30, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{marginTop: 8, fontSize: 12}}>{"为什么要校准？"}</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

class Stage3 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        }
    }

    reMeasure = () => {
        this.setState({visible: true});
    };

    setModalVisible(visible) {
        this.setState({visible: visible});
    }

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
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image style={{marginTop: 25}} source={require('./img/心.png')} />
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'center', width: width, backgroundColor: '#ffffff'}}>
                        <Text style={{fontSize: 20, color: '#ff5d42'}}>{"--"}</Text>
                        <Text style={{marginLeft: 8, fontSize: 16, marginTop: 5, color: '#333333'}}>{"次/分钟"}</Text>
                    </View>

                    <TouchableOpacity onPress={() => {this.reMeasure()}} style={{marginLeft: 20, marginRight: 20, marginTop: 130, height: 50, borderRadius: 5,
                        backgroundColor: '#ff5d42', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{color: '#ffffff'}}>{"等待测量"}</Text>
                    </TouchableOpacity>

                    <View style={{marginBottom: 30, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{marginTop: 8, fontSize: 12}}>{"测量原理是什么？"}</Text>
                    </View>

                    <Modal
                        animationType={"slide"}
                        transparent={true}
                        visible={this.state.visible}
                        onRequestClose={() => {this.setModalVisible(!this.state.visible)}}
                    >
                        <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{width: 300, height: 300, backgroundColor: 'white', borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}>
                                <TouchableHighlight onPress={() => {this.setModalVisible(!this.state.visible)}}>
                                    <Image source={require('./img/图2.png')} />
                                </TouchableHighlight>
                            </View>
                        </View>
                    </Modal>
                </ScrollView>
            </View>
        )
    }
}

class BloodPressureCalibrationScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '血压校准1',
            stage: 1,
        }
    }

    _next() {
        this.state.stage ++;
        console.debug("index: " + this.state.stage);
        this.setState({
            title: "血压校准" + this.state.stage,
            stage: this.state.stage,
        });
    };

    render() {
        let StageView;
        if (this.state.stage === 1) {
            StageView = <Stage1 next={() => {this._next()}} />
        } else if (this.state.stage === 2) {
            StageView = <Stage2 next={() => {this._next()}} />
        } else if (this.state.stage === 3) {
            StageView = <Stage3 next={() => {this._next()}} />
        }

        return(
            <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff', marginTop: 0}}>
                <CustomNormalNav name={this.state.title} navigation={this.props.navigation}/>
                {StageView}
            </View>
        );
    }
}

export default BloodPressureCalibrationScreen;
//AppRegistry.registerComponent("YS_Service_JS", () => BloodPressureCalibrationScreen);