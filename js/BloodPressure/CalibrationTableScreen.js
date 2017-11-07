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
        return(
          <View style={{width: width, height: 45, backgroundColor: '#ffffff', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <Text style={{marginLeft: 14, fontSize: 14, color: '#333333'}}>{this.props.title}</Text>
              <Text style={{marginRight: 20, width: 150, textAlign: 'right', fontSize: 12, color: '#666666'}}> {this.props.value}</Text>
          </View>
        );
    }

}

class CalibrationTableScreen extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return(
            <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#eeeeee', marginTop: 0}}>
                <ScrollView>
                    <CustomNormalNav name="查看校准表" navigation={this.props.navigation}/>

                    <View style={{width: width, height: 30, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{marginLeft: 10, fontSize: 10, color: '#333333'}}>{"校准日期：2017-07-12"}</Text>
                    </View>

                    <DivideLine />
                    <ItemView title={"测量对象"} value={"爸爸"} />

                    <DivideLine />
                    <DivideLine marginTop={10} />

                    <ItemView title={"性别"} value={"男"} />
                    <DivideLine marginLeft={15} />

                    <ItemView title={"出生年月"} value={"1960-01-01"} />
                    <DivideLine marginLeft={15} />

                    <ItemView title={"身高"} value={"160 cm"} />
                    <DivideLine marginLeft={15} />

                    <ItemView title={"体重"} value={"54 kg"} />
                    <DivideLine />

                    <DivideLine marginTop={10} />
                    <ItemView title={"校准血压一"} value={"135/90 mmHg"} />
                    <DivideLine marginLeft={15} />

                    <ItemView title={"校准血压二"} value={"140/90 mmHg"} />
                    <DivideLine />

                </ScrollView>
            </View>
        )
    }
}

export default CalibrationTableScreen;
//AppRegistry.registerComponent("YS_Service_JS", () => CalibrationTableScreen);