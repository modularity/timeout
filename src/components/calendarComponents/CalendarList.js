/**
  This page lists all the calendar events that the user has confirmed to their schedule.
 */
import React, { Component } from 'react';
import {ScrollView,FlatList,Text,View,Image,TextInput,TouchableOpacity,Modal,Alert,KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../stylesheets/calendar/calendarListStyles';
// import firebase from 'react-native-firebase';
import InfoBtn from '../../utilities/InfoBtn';
import StatusBarBackground from '../../utilities/StatusBarBackground';
import moment from 'moment';

type Props = {};
export default class CalendarList extends Component<Props> {
  constructor() {
    super();
    /*
    const { params } = this.props.navigation.state;
    // could check for null first
    const data = params ? params.title : null;
    this.state = {
        events: data,
      }
    */
    this.state = {
      // original data
      events: [{sessionID: 1, date: '2018-5-8', SessionStartTime: '11am', SessionStopTime: '12pm', SessionTitle: 'Session 1', isAvailable: 'yes' },
        {sessionID: 2, date: '2018-5-9', SessionStartTime: '11am', SessionStopTime: '12pm', SessionTitle: 'Session 2', isAvailable: 'yes' },
        {sessionID: 3, date: '2018-5-10', SessionStartTime: '10am', SessionStopTime: '11am', SessionTitle: 'Session 3', isAvailable: 'yes' },
        {sessionID: 4, date: '2018-5-14', SessionStartTime: '4pm', SessionStopTime: '5pm', SessionTitle: 'Session 4', isAvailable: 'yes' },
        {sessionID: 5, date: '2018-5-19', SessionStartTime: '2pm', SessionStopTime: '3pm', SessionTitle: 'Session 5', isAvailable: 'yes' },
        {sessionID: 6, date: '2018-5-29', SessionStartTime: '4pm', SessionStopTime: '5pm', SessionTitle: 'Session 6', isAvailable: 'yes' }],
      // transformed data for rending
      data: [{'May 8, 2018': [{sessionID: 1, SessionStartTime: '11am', SessionStopTime: '12pm', SessionTitle: 'Session 1', isAvailable: 'yes' }]},
          {'May 9, 2018': [{sessionID: 2, SessionStartTime: '11am', SessionStopTime: '12pm', SessionTitle: 'Session 2', isAvailable: 'yes' },
                      {sessionID: 3, SessionStartTime: '10am', SessionStopTime: '11am', SessionTitle: 'Session 3', isAvailable: 'yes' }]},
          {'May 14, 2018': [{sessionID: 4, SessionStartTime: '4am', SessionStopTime: '5pm', SessionTitle: 'Session 4', isAvailable: 'yes' }]},
          {'May 19, 2018': [{sessionID: 5, SessionStartTime: '2am', SessionStopTime: '3pm', SessionTitle: 'Session 5', isAvailable: 'yes' }]}],
    }
  }
//
  render() {

      return (
        <View style={styles.container}>
             <FlatList
               data={this.state.events}
               extraData={this.state}
               keyExtractor={item => item.sessionID.toString()}
               ListEmptyComponent={this.noCalenderItems}
               renderItem={this.renderCalenderItem}
              />
        </View>
      );
    }

    // each day item may have mutliple events to render
    renderCalenderItem = ({item}) => (
        <View style={styles.itemContainer}>
          <Text style={[styles.eventDate]}>{this.parseDate(item.date)}</Text>
          <View style={styles.seperator}/>
          <View style={[styles.element, styles.rowContainer]}>
              <View style={styles.elementLeft}>
                <Icon name="circle" size={20} color={this.color(item.isAvailable)} />
              </View>
              <View style={styles.elementRight}>
                <View style={styles.eventContainer}>
                     <Text style={[styles.eventDescription]}>{item.SessionTitle} from {item.SessionStartTime}-{item.SessionStopTime} confirmed. </Text>
                </View>
              </View>
          </View>
          <View style={styles.seperator}/>
        </View>
    );

  parseDate(date) {
    return moment(date, 'YYYY-MM-DD').format('MMM DD, YYYY');
  }
  color(isAvailable) {
    const calConfig = {'no': {selected: true, color: '#fdba33', shape:'circle'},
      'yes': {selected: true, color: '#71c172', shape:'circle'},
      'na': {selected: true, color: '#ccc', shape:'square'}
    }
    return calConfig[isAvailable].color;
  }

   // default for when a selected programCode has zero entries
   noCalenderItems = () => (
     <View style={styles.noEventsContainer}>
       <Text style={styles.noEventsText}>
         Check back later for updates {"\n"} Or select another program above
       </Text>
    </View>
    );
  }
