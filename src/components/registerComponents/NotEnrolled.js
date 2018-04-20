import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View,Image} from 'react-native';
import styles from '../../stylesheets/register/notEnrolledStyles';
// import firebase from 'react-native-firebase';


type Props = {};
export default class NotEnrolled extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../../images/puppy-2.jpg')} />
        <Text style={styles.title}>
          Thank you for interest in TimeOut
        </Text>
        <Text style={styles.text}>
          An adminstrator will contact you soon with more information about your role in the program.
        </Text>
      </View>
    );
  }
}
