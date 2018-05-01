/**
  This is the ContactInfo page referenced by NotEnrolled and Profile pages.
 */
import React, { Component } from 'react';
import {StyleSheet,Text,View,Linking,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import firebase from 'react-native-firebase';


type Props = {};
export default class ContactInfo extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
        contactText: {
        contactPerson: 'Josephine Bruin',
        contactEmail: 'josbruin@ucla.edu',
        contactPhone: '(310) 867-5309',
      }
    }
    //firebase.analytics().setCurrentScreen('ContactInfo');
  }

  render() {
    return (
      <View style={styles.container}>
        <View styles={styles.contactContainer}>
          <Text style={styles.contactText}>
            Contact:    {this.state.contactText.contactPerson}
          </Text>
          <TouchableOpacity style={styles.contactElement} onPress={() => this.startEmail()}>
            <Icon name={"envelope-o"} color={"#777"} size={30} style={styles.sendIcon}/>
            <Text style={styles.contactText}>
              {this.state.contactText.contactEmail}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactElement} onPress={() => this.startCall()}>
            <Icon name={"mobile"} color={"#777"} size={40} style={styles.sendIcon}/>
            <Text style={styles.contactText}>
              {this.state.contactText.contactPhone}
            </Text>
          </TouchableOpacity>
        </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25,
    //backgroundColor: '#E0F7FA'
  },
  contactContainer: {
  },
  contactElement: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start'
  },
  contactText: {
    textAlign: 'left',
    marginTop: 24,
    fontSize: 14,
    fontFamily: 'Avenir',
    color: '#34495e',
    margin: 10,
  },
  sendIcon: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    //paddingRight: 10,
  },
});
