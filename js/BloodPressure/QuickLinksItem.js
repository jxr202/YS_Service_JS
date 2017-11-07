/**
 * Created by jxr20 on 2017/7/19.
 */

import React, {Component} from 'react'
import {
    Text,
    Button,
    StyleSheet,
    View,
    TouchableOpacity,
    Dimensions,
    Image
} from 'react-native';
import DivideLine from "./DivideLine";

const width = Dimensions.get('window').width;

class QuickLinksItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: this.props.index,
            icon: this.props.icon,
            title: this.props.title,
        }
    }

    render() {
        return (
            <TouchableOpacity style={{width: width}} onPress={() => {this.props.onClick(this.state.index)}}>
                <View style={{height: 41, flexDirection: 'row', backgroundColor: '#ffffff'}}>
                    <View style={{width: 56, alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={this.state.icon}/>
                    </View>
                    <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'center'}}>
                        <Text style={{color: '#333333', fontSize: 13}}>{this.state.title}</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                        <Image source={require('./img/global_btn_right.png')} style={{marginRight: 12}}/>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

export default QuickLinksItem;