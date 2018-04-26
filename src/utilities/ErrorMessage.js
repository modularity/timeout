
import React, { Component } from 'react';
import {Text,View,TouchableOpacity,Image,Modal,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import firebase from 'react-native-firebase';
import StatusBarBackground from './StatusBarBackground';

type Props = {};
export default class TaskFeedback extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      showMsgModal: true,
      errMsg: 'Some message the user needs to see.',
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBarBackground />
        {this.renderMessage()}
      </View>
    );
  }

  // display user error messages
  renderMessage() {
    return (<Modal transparent={false} visible={this.state.showMsgModal} animationType={'fade'}
           onRequestClose={() => this.setState({showMsgModal: false}) }>
      <View style={styles.modalMsgContainer}>
        <View style={styles.modalClose}>
          <TouchableOpacity onPress={() => this.setState({showMsgModal: false, postRecPreGraph: false}) }>
            <Icon name="times" size={25} color="#ecf0f1"/>
          </TouchableOpacity>
        </View>
        <View style={styles.modalHeader}>
          <View style={styles.infoRadius}>
            <Icon name="exclamation-triangle" size={60} color="#777"/>
          </View>
        </View>
        <View style={styles.modalTxtContainer}>
          <Text style={styles.h1Text}>{this.state.errMsg}</Text>
        </View>
      </View>
    </Modal>);
  }
}

var width = Dimensions.get('window').width;
var styles = StyleSheet.create({
  modalMsgContainer: {
   marginTop: 20,
   flex: .6,
   justifyContent:'center',
   alignItems: 'center',
   alignSelf: 'center',
 },
 modalClose: {
   width: width*.8,
   backgroundColor: '#fdba33',
   padding: 5,
 },
 modalHeader: {
   flex: .6,
   width: width*.8,
   backgroundColor: '#fdba33',
   justifyContent: 'center',
   alignItems: 'center',
 },
 infoRadius: {
   borderWidth:2,
   borderColor:'#ecf0f1',
   alignItems:'center',
   justifyContent:'center',
   width:100,
   height:100,
   backgroundColor:'#fff',
   borderRadius:100,
 },
 modalTxtContainer: {
   width: width*.8,
   backgroundColor: '#ecf0f1',
   flex: .3,
   justifyContent: 'center',
   alignItems: 'center',
 },
  h1Text: {
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Avenir',
    textAlign: 'center',
    alignSelf: 'center',
    margin: 3,
    color: '#777',
    backgroundColor: 'transparent',
  },
  modalConfirmBtn: {
    backgroundColor: '#b3d1f2',
    borderRadius: 15,
    padding: 8,
    margin: 8
  },
});
