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
    render() {
        let textColor, value;
        if (this.props.value === undefined) {
            textColor = '#999999';
            value = '未填写';
        } else {
            textColor = '#666666';
            value = this.props.value;
        }
        return(
          <View style={{width: width, height: 45, backgroundColor: '#ffffff', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <Text style={{marginLeft: 14, fontSize: 14, color: '#333333'}}>{this.props.title}</Text>
              <Text style={{marginRight: 20, width: 150, textAlign: 'right', fontSize: 12, color: textColor}}>{value}</Text>
          </View>
        );
    }

}

class ManualInputScreen extends Component {

    constructor(props) {
        super(props);
    }

    _save() {
        alert('abc');
    }

    render() {
        return(
            <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#eeeeee', marginTop: 0}}>
                <ScrollView>
                    <CustomNormalNav name="手动录入" navigation={this.props.navigation}/>

                    <DivideLine marginTop={10} />

                    <ItemView title={"日期"} value={"2017-05-05"} />
                    <DivideLine marginLeft={15} />

                    <ItemView title={"时间"} value={"12：12"} />
                    <DivideLine marginLeft={15} />

                    <ItemView title={"收缩压"} />
                    <DivideLine marginLeft={15} />

                    <ItemView title={"舒张压"} />
                    <DivideLine />

                    <TouchableOpacity onPress={() => {this._save()}} style={{marginLeft: 20, marginRight: 20, marginTop: 30, marginBottom: 30, height: 50, borderRadius: 5,
                        backgroundColor: '#ff5d42', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{color: '#ffffff'}}>保存</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}

export default ManualInputScreen;
//AppRegistry.registerComponent("YS_Service_JS", () => ManualInputScreen);