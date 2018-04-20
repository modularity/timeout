import React, { Component } from 'react';
import {Alert,View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

//UI imports
import Icon from 'react-native-vector-icons/FontAwesome';
//import styles from '../stylesheets/InfoBtnStyle';//*

// import firebase from 'react-native-firebase';

export default class InfoBtn extends Component {
  static propTypes = {
    page: PropTypes.string,
  }

  // create alert with page specific content in message
  infoPress() {
    //firebase.analytics().logEvent('selected_info_button', { id: this.props.page });

    var message = "Placeholder text here with some description to describe the current page and what kinds of things people can do on this page.";
    if (this.props.page === 'Login') {
      message = "Please login if you have an existing account with TimeOut.";
    }
/*
    else if (this.props.page === 'Signup') {
      message = "Welcome to the Biomedical Scholars, a national collaborative through the Diversity Program Consortium and in partnership with the NIH. \n Please register with your closest university: \n\n CSULB:  Cal State University, Long Beach, \n CSUN:  Cal State University, Northridge \n MSU: Morgan State University \n PSU: Portland State University \n SFSU: San Francisco State University \n UAF: University of Alaska, Fairbanks \n UDM: University of Detroit Mercy \n UMBC: University of Maryland, Baltimore County \n UTEP: University of Texas, El Paso \n Xavier: Xavier University of Louisiana";
    } else if (this.props.page === 'Calendar') {
      message = "Locations host different events, so feel free to select another program from the top left to see what’s happening there.";
    } else if (this.props.page === 'Outcomes') {
      message = "We’d love to hear about your recent achievements. Choose from the list above and attach an image if you have one. It’s a quick way to share with your network on Facebook.";
    } else if (this.props.page === 'QA') {
      message = "Your program location occasionally hosts local events and you can join in here. A full list of current events are available on the Alerts page.";
    } else if (this.props.page === 'Notifications') {
      message = "Every so often, we will send you a quick survey as part of the ongoing NIH research study. Many of them have extra incentives, like Starbucks gift cards. \n\n Local events are hosted by your program location.  List of active events is available here for you to join. Instructors also have the option to start and end events on this page.";
    } else if (this.props.page === 'CalendarModal') {
      message = "CSULB:  Cal State University, Long Beach, \n CSUN:  Cal State University, Northridge \n MSU: Morgan State University \n PSU: Portland State University \n SFSU: San Francisco State University \n UAF: University of Alaska, Fairbanks \n UDM: University of Detroit Mercy \n UMBC: University of Maryland, Baltimore County \n UTEP: University of Texas, El Paso \n Xavier: Xavier University of Louisiana";
    }
*/
    Alert.alert("Info", message);
  }

  render() {
    return (
      <View>
        <View style={styles.viewInfoBtn}>
          <TouchableOpacity style={styles.infoBtn} onPress={() => this.infoPress()}>
            <Icon name="info" color="#3b5998" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    viewInfoBtn: {
      justifyContent: 'flex-start',
      alignItems: 'flex-end',
    },
    infoBtn: {
      borderWidth:2,
      borderColor:'#338ce0',
      alignItems:'center',
      justifyContent:'center',
      width:30,
      height:30,
      backgroundColor:'#fff',
      borderRadius:30,
    },
    container: {
      height: 50,
    },
  });
