/**
 * Created by jxr20 on 2017/7/17.
 */
import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

class DivideLine extends Component {
    render() {
        let marginLeft = this.props.marginLeft === undefined ? 0: this.props.marginLeft;
        let marginTop = this.props.marginTop === undefined ? 0: this.props.marginTop;
        let marginRight = this.props.marginRight === undefined ? 0: this.props.marginRight;
        let marginBottom = this.props.marginBottom === undefined ? 0: this.props.marginBottom;
        console.debug("marginTop: " + marginTop + ", marginLeft: " + marginLeft);
        return(
            <View style={[styles.divide, {marginLeft: marginLeft, marginTop: marginTop, marginRight: marginRight, marginBottom: marginBottom}]} />
        );
    }
}

const styles = StyleSheet.create({
    divide: {
        width: width,
        marginTop: 0,
        marginBottom: 0,
        backgroundColor: '#e0e0e0',
        height: 1
    },
});

export default DivideLine;