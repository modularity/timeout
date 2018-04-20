import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

export default class StatusBarBackground extends Component{
  render(){ //This part is just so you can change the color of the status bar from the parents by passing it as a prop
    return(
      <View style={[styles.statusBarBackground, this.props.style || {}]}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusBarBackground: {
    height: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: "transparent",
  }

})
