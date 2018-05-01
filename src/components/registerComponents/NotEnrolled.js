/**
  This is a landing page for people that haven't been approved by admin yet.
 */
import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View,Image,Linking,TouchableOpacity} from 'react-native';
import styles from '../../stylesheets/register/notEnrolledStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
// import firebase from 'react-native-firebase';
import ContactInfo from '../../utilities/ContactInfo';

type Props = {};
export default class NotEnrolled extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Thank you for interest in TimeOut',
      description: 'An adminstrator will contact you soon with more information about your role in the program.',
      contactText: {
        contactPerson: 'Josephine Bruin',
        contactEmail: 'josbruin@ucla.edu',
        contactPhone: '(310) 867-5309',
      }
    }
    //firebase.analytics().setCurrentScreen('NotEnrolled');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {this.state.title}
        </Text>
        <Text style={styles.text}>
          {this.state.description}
        </Text>
        <ContactInfo />
      </View>
    );
  }
  startEmail() {
    // 'mailto:example@gmail.com?subject=example&body=example'
    var emailPayload = 'mailto:'+this.state.contactEmail+'?subject='+'Request to join TimeOut';
    console.warn('mailto:',emailPayload);
    Linking.openURL(emailPayload);
  }
  startCall() {
    var parseNumber = this.state.contactPhone.match(/\d/g).join("");
    var phonePayload = 'tel:'+parseNumber;
    console.warn('tel', parseNumber);
    Linking.openURL(phonePayload);
  }
}
