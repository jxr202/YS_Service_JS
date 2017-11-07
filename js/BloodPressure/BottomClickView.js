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
    Image,
} from 'react-native';

import DivideLine from './DivideLine';

class  BottomClickView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: this.props.number,
            title: this.props.title,
            icon: this.props.icon,
        }
    }

    render() {

        let bottomClickView;

        switch (this.state.number) {
            case 1:
                bottomClickView =
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity style={{backgroundColor: '#f8f8f8', height: 44, alignItems: 'center', justifyContent: 'center', flex: 1}} onPress={() => {this.props.onClick(0)}} >
                            <Text style={{fontSize: 15, color: '#666666', fontWeight: '500'}}>{this.state.title}</Text>
                        </TouchableOpacity>
                    </View>
                break;
            case 2:
                bottomClickView =
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity style={{backgroundColor: '#f8f8f8', height: 44, alignItems: 'center', justifyContent: 'center', flex: 1}} onPress={() => {this.props.onClick(0)}} >
                            <Text style={{fontSize: 15, color: '#666666', fontWeight: '500'}}>{this.state.title[0]}</Text>
                        </TouchableOpacity>
                        <View style={{width: 0.5, backgroundColor: '#e0e0e0'}} />
                        <TouchableOpacity style={{backgroundColor: '#f8f8f8', height: 44, alignItems: 'center', justifyContent: 'center', flex: 1}} onPress={() => {this.props.onClick(1)}} >
                            <Text style={{fontSize: 15, color: '#ff5d42', fontWeight: '500'}}>{this.state.title[1]}</Text>
                        </TouchableOpacity>
                    </View>
                break;
            case 3:
                bottomClickView =
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity style={{flexDirection: 'row', backgroundColor: '#f8f8f8', height: 44, alignItems: 'center', justifyContent: 'center', flex: 1}} onPress={() => {this.props.onClick(0)}} >
                            <Image source={this.state.icon[0]} />
                            <Text style={{backgroundColor: '#f8f8f8', fontSize: 12, color: '#666666'}}>{this.state.title[0]}</Text>
                        </TouchableOpacity>
                        <View style={{width: 0.5, backgroundColor: '#e0e0e0'}} />
                        <TouchableOpacity style={{flexDirection: 'row', backgroundColor: '#f8f8f8', height: 44, alignItems: 'center', justifyContent: 'center', flex: 1}} onPress={() => {this.props.onClick(1)}} >
                            <Image source={this.state.icon[1]} />
                            <Text style={{fontSize: 12, color: '#666666'}}>{this.state.title[1]}</Text>
                        </TouchableOpacity>
                        <View style={{width: 0.5, backgroundColor: '#e0e0e0'}} />
                        <TouchableOpacity style={{flexDirection: 'row', backgroundColor: '#f8f8f8', height: 44, alignItems: 'center', justifyContent: 'center', flex: 1}} onPress={() => {this.props.onClick(2)}} >
                            <Image source={this.state.icon[2]} />
                            <Text style={{fontSize: 12, color: '#ff5d42'}}>{this.state.title[2]}</Text>
                        </TouchableOpacity>
                    </View>
                break;
        }

        return (
            <View style={{height: 46, flexDirection: 'column', margin: 0}}>
                <DivideLine />
                { bottomClickView }
                <DivideLine />
            </View>
        )
    }
}

export default BottomClickView;