/**
  This page lists all the given calendar events for the TimeOut program(per quarter).
  The user selects their availability on the CalendarDetail page
  The calendar legend: yes is blue circle, no is red circle, yellow square is unselected.
  They can select list to view all the session they have signed up for on the CalendarList page.
 */

import React, { Component } from 'react';
import {ScrollView,FlatList,Text,View,Image,TextInput,TouchableOpacity,Modal,Alert,KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../stylesheets/calendar/calendarViewStyles';
// import firebase from 'react-native-firebase';
import InfoBtn from '../../utilities/InfoBtn';
import StatusBarBackground from '../../utilities/StatusBarBackground';
import { Calendar } from 'react-native-calendars' // 1.16.1
import moment from 'moment';

const _format = 'YYYY-MM-DD'
const _today = moment().format(_format)
const _maxDate = moment().add(90, 'days').format(_format)


const calConfig = {'no': {selected: true, color: '#fdba33', shape:'circle'},
  'yes': {selected: true, color: '#71c172', shape:'circle'},
  'na': {selected: true, color: '#ccc', shape:'square'}
}

// gold #fdba33
// blue #20A3DD
// green #71c172

type Props = {};
export default class CalendarList extends Component<Props> {
  // It is not possible to select some to current day.
  initialState = {
      [_today]: {disabled: true}
  }
  constructor() {
    super();
    this.state = {
      showCalList: false,
      _markedDates: { // testing values
            '2018-05-08': {startingDay: true, color: '#71c172', textColor: '#fff', endingDay: true},
            '2018-05-09': {startingDay: true, color: '#71c172', textColor: '#fff', endingDay: true},
            '2018-05-14': {startingDay: true, color: '#fdba33', textColor: 'black', endingDay: true},
            '2018-05-21': {startingDay: true, color: '#ccc', textColor: 'black', endingDay: true},
            '2018-05-22': {startingDay: true, color: '#ccc', textColor: 'black', endingDay: true},
            '2018-05-24': {startingDay: true, color: '#fdba33', textColor: 'black', endingDay: true},
            '2018-05-25': {startingDay: true, color: '#ccc', textColor: 'black', endingDay: true},
            '2018-05-26': {startingDay: true, color: '#ccc', textColor: 'black', endingDay: true}},
      datesData: [
        {sessionID: 1, date: '2018-5-8', SessionStartTime: '11am', SessionStopTime: '12pm', SessionTitle: 'Session 1', isAvailable: 'yes' },
        {sessionID: 2, date: '2018-5-9', SessionStartTime: '11am', SessionStopTime: '12pm', SessionTitle: 'Session 2', isAvailable: 'no' },
        {sessionID: 3, date: '2018-5-10', SessionStartTime: '10am', SessionStopTime: '11am', SessionTitle: 'Session 3', isAvailable: 'na' },
        {sessionID: 4, date: '2018-5-14', SessionStartTime: '4am', SessionStopTime: '5pm', SessionTitle: 'Session 4', isAvailable: 'yes' },
        {sessionID: 5, date: '2018-5-19', SessionStartTime: '2am', SessionStopTime: '3pm', SessionTitle: 'Session 5', isAvailable: 'no' }
      ]
    };
  }

  // postprocess calendar API json to prep for calendar API
  processData() {
    const dates = this.state.datesData.reduce((acc,x) => {
      const {selected,color} = calConfig[x.isAvailable];
      acc[x.date] = {selected, color};
      return acc;
    }, {});
    this.setState({_markedDates: dates});
  }

  onDaySelect = (day) => {
    this.props.navigation.navigate('CalendarDetail');
  }

  updateDay = (day) => {
    /*
      const _selectedDay = moment(day.dateString).format(_format);

      let selected = true;
      if (this.state._markedDates[_selectedDay]) {
        // Already in marked dates, so reverse current marked state
        selected = !this.state._markedDates[_selectedDay].selected;
      }

      // Create a new object using object property spread since it should be immutable
      // Reading: https://davidwalsh.name/merge-objects
      const updatedMarkedDates = {...this.state._markedDates, ...{ [_selectedDay]: { selected } } }

      // Triggers component to render again, picking up the new state
      this.setState({ _markedDates: updatedMarkedDates });
      */
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.listBtn}>
          <TouchableOpacity onPress={() => this.renderCalList()}>
            <Icon name={"th-list"} color={'#20a3dd'} size={30} style={styles.sendIcon}/>
          </TouchableOpacity>
        </View>
        <Calendar
            minDate={_today}
            maxDate={_maxDate}
            onDayPress={this.onDaySelect}
            markedDates={this.state._markedDates}
            markingType={'period'}
        />
        <View style={styles.seperator}/>
        <View style={styles.legendContainer}>
          <View style={styles.legendItem}>
            <Icon name="circle" size={20} color={'#ccc'} />
            <Text>Session date</Text>
          </View>
          <View style={styles.legendItem}>
            <Icon name="circle" size={20} color={'#71c172'} />
            <Text>Session date confirmed</Text>
          </View>
          <View style={styles.legendItem}>
            <Icon name="circle" size={20} color={'#fdba33'} />
            <Text>Session date refused</Text>
          </View>
        </View>
      </View>
    );
  }

  renderCalList() {
    this.props.navigation.navigate('CalendarList');
  }
}
