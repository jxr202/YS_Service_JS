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

class ItemView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            select: this.props.select,
            title: this.props.title,
            subtitle: this.props.subtitle,
            icon: this.props.icon,
        };
    }

    _onClick = () => {
        if (this.state.select === 1) {
            this.setState({select : 0});
        } else if (this.state.select === 0) {
            this.setState({select : 1});
        } else {
            alert('新增校准表');
        }
    };

    render() {
        let selectIcon;
        switch(this.state.select) {
            case 1: //选中状态
                selectIcon = require('./img/选中.png');
                break;
            case 0: //未选中状态
                selectIcon = require('./img/未选中.png');
                break;
            case -1: //加号
                selectIcon = require('./img/加号.png');
                break;
        }
        let subtitleView = this.props.subtitle === undefined ? null : <Text style={{marginLeft: 14, fontSize: 10, color: '#333333'}}>{this.state.subtitle}</Text>;

        return(
          <TouchableOpacity onPress={this._onClick} style={{width: width, height: 55, backgroundColor: '#ffffff', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                  <Image style={{marginLeft: 20}} source={selectIcon} />
                  <View style={{flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                      <Text style={{marginLeft: 14, fontSize: 12, color: '#333333'}}>{this.state.title}</Text>
                      {subtitleView}
                  </View>
              </View>
              <Image style={{marginRight: 20}} source={this.state.icon} />
          </TouchableOpacity>
        );
    }

}

class CalibrationTableSelectScreen extends Component {

    constructor(props) {
        super(props);
    }

    _save() {

    }

    render() {
        return(
            <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#eeeeee', marginTop: 0}}>
                <ScrollView>
                    <CustomNormalNav name="选择校准表" navigation={this.props.navigation}/>

                    <DivideLine />

                    <ItemView select={0} title={"我的校准表"} subtitle={"更新时间:2017-07-07"} icon={require('./img/i.png')} />
                    <DivideLine />

                    <ItemView select={1} title={"爸爸的血压校准表"} subtitle={"更新时间:2017-07-08"}  icon={require('./img/i.png')} />
                    <DivideLine />

                    <DivideLine marginTop={15} />
                    <ItemView select={-1} title={"新增校准表"} icon={require('./img/global_btn_right.png')} />
                    <DivideLine />

                </ScrollView>
            </View>
        )
    }
}

export default CalibrationTableSelectScreen;
//AppRegistry.registerComponent("YS_Service_JS", () => CalibrationTableSelectScreen);