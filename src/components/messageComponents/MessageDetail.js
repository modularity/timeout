/**
  This page lists the message history with person selected on the MessageList page.
 */
import React, { Component } from 'react';
import {ScrollView,Text,View,Image,TextInput,TouchableOpacity,Modal,Alert,KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../stylesheets/messages/messageDetailStyles';
// import firebase from 'react-native-firebase';
import InfoBtn from '../../utilities/InfoBtn';
import StatusBarBackground from '../../utilities/StatusBarBackground';


type Props = {};
export default class MessageDetail extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      message: '',
      showMsgModal: false,
    }
    //firebase.analytics().setCurrentScreen('Login');
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBarBackground />
        <Text style={styles.welcome}>
          MessageList
        </Text>
        <View style={styles.footer}>
          <TextInput
            value={this.state.typing}
            onChangeText={text => this.setState({typing: text})}
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Type something nice"
          />
        </View>
      </View>
    );
  }
}
