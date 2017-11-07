/**
 * Created by jxr20 on 2017/6/23.
 */
import React, {Component} from 'react'
import {
    View,
    Image,
    StyleSheet,
    AppRegistry,
    Text,
    TouchableOpacity, ScrollView
} from 'react-native'
import CustomNormalNav from  './CustomNormalNav';
//import PsychologicalExaminationResultView from './PsychologicalExaminationResultView';
import PsychologicalExaminationResultView from './PsychologicalExaminationResultView';

const imgUnchecked = require('./img/check.png');
const imgChecked = require('./img/checked.png');
const ImageUnchecked = <Image source={imgUnchecked} />;
const ImageChecked = <Image source={imgChecked} />;
const titles =  [
    "1.悲伤：你是否一直感到伤心或悲伤",
    "2.泄气：你是否感到前景渺茫",
    "3.缺乏自尊心：你是否觉得自己没有价值或自认为是一个失败者",
    "4.自卑：你是否觉得力不从心或自叹比不上别人？",
    "5.内疚：你是否对任何事都自责？",
    "6.犹豫：你是否在作决定时犹豫不决？ ",
    "7.焦躁不安：这段时间你是否一直处于愤怒和不满状态？",
    "8.对生活丧失兴趣：你对事业、家庭、爱好、或朋友是否丧失了兴趣？",
    "9.丧失动机：你是否感到一蹶不振，做事情毫无动力？",
    "10.自我印象可怜：你是否以为自己已衰老或失去魅力？",
    "11.食欲变化：你是否感到食欲不振或情不自禁的暴饮暴食？",
    "12.睡眠变化：你是否患有失眠症？或整天感到体力不支，昏昏欲睡？",
    "13.丧失性欲：你是否丧失了对性的兴趣？",
    "14.臆想症：你是否经常担心自己的健康？",
    "15.自杀冲动：你是否认为生存没有价值，或生不如死？"];

class AnswerView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            title: this.props.title,//"1.悲伤：你是否一直感到伤心或悲伤",
            answer: -1,
        };
    }

    _handleChecked(value) {
        //console.debug("_handleChecked.. id: " + this.state.id + ", value: " + value);
        this.setState({answer: value}, () => this.props.onChange(this.state.id, value));
    }

    render() {
        let Image0 , Image1, Image2, Image3;
        switch (this.state.answer) {
            case -1:
                Image0 = Image1 = Image2 = Image3 = ImageUnchecked;
                break;
            case  0:
                (Image0 = ImageChecked) && (Image1 = Image2 = Image3 = ImageUnchecked);
                break;
            case  1:
                (Image1 = ImageChecked) && (Image0 = Image2 = Image3 = ImageUnchecked);
                break;
            case  2:
                (Image2 = ImageChecked) && (Image0 = Image1 = Image3 = ImageUnchecked);
                break;
            case  3:
                (Image3 = ImageChecked) && (Image0 = Image1 = Image2 = ImageUnchecked);
                break;
        }

        return (
            <View style={{margin: 10}}>
                <Text style={{color: '#333333'}}>{this.state.title}</Text>
                <TouchableOpacity onPress={() => this._handleChecked(0)}>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                        {Image0}<Text style={{marginLeft: 10}}>{"没有"}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._handleChecked(1)}>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                        {Image1}<Text style={{marginLeft: 10}}>{"偶尔"}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._handleChecked(2)}>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                        {Image2}<Text style={{marginLeft: 10}}>{"经常"}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._handleChecked(3)}>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                        {Image3}<Text style={{marginLeft: 10}}>{"几乎不间断"}</Text>
                    </View>
                </TouchableOpacity>
                <View style={{width:300, height: 1, marginTop: 10, backgroundColor: '#e0e0e0'}} />
            </View>
        );
    }
}

let result = [];
let count = 0;

class PsychologicalExaminationView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCompleted: false,
        }
    }
    static navigationOptions = props => {
        return {
            tabBarVisible: false,
            headerVisible: false,
        }
    };
    _startTapped = () => {
        count = 0;
        result.forEach((value, index) => {
            console.debug("index: " + index + ", value: " + value);
            count += value;
        });
        console.debug("result.length: " + result.length + ", count: " + count);
        /*if (result.length < titles.length) {
            alert("小子，题目没做完就想跑? 没门...");
            return;
        }*/
        this.setState({isCompleted : !this.state.isCompleted});
        //alert(result);
    };
    _handleChecked(id, value) {
        console.debug("_handleChecked.. id: " + id + ", value: " + value);
        result[id] = value;
    }
    render() {
        let text = this.state.isCompleted ? "再测一次": "提交";
        let examView;
        if (this.state.isCompleted === true) {
            examView = <PsychologicalExaminationResultView count={count} style={{height: 450}} />;
        } else {
            examView =
                <ScrollView style={{height: 420}}>
                    {
                        titles.map((elements, index) => {
                            return <AnswerView key={index} id={index} title={elements} onChange={(id, val) => this._handleChecked(id, val)} />;
                        })
                    }
                </ScrollView>;
        }
        return (
          <View style={{flex:1}}>
              <CustomNormalNav name="心理检测" navigation={this.props.navigation}/>
              {examView}
              <TouchableOpacity onPress={this._startTapped} style={styles.commit}>
                  <Text style={{color: '#ffffff'}}>{text}</Text>
              </TouchableOpacity>
          </View>
        );
    }
}

let styles = StyleSheet.create({
    commit: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        height: 50,
        borderRadius: 5,
        backgroundColor: '#ff5d42',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

//export default PsychologicalExaminationViewC;
AppRegistry.registerComponent('YS_Service_js', () => PsychologicalExaminationView);