/**
  This page lists all the given calendar events for the TimeOut program(per quarter).
  The user selects their availability on the CalendarDetail page
  The calendar legend: yes is blue circle, no is red circle, yellow square is unselected.
  They can select list to view all the session they have signed up for on the CalendarList page.
 */

import React, { Component } from 'react';
import {ScrollView,FlatList,Text,View,Image,TextInput,TouchableOpacity,Modal,Alert,KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../stylesheets/calendar/calendarListStyles';
// import firebase from 'react-native-firebase';
import InfoBtn from '../../utilities/InfoBtn';
import StatusBarBackground from '../../utilities/StatusBarBackground';
import { Calendar } from 'react-native-calendars' // 1.16.1
import moment from 'moment';

const _format = 'YYYY-MM-DD'
const _today = moment().format(_format)
const _maxDate = moment().add(15, 'days').format(_format)

type Props = {};
export default class CalendarList extends Component<Props> {
  // It is not possible to select some to current day.
  initialState = {
      [_today]: {disabled: true}
  }

  constructor() {
    super();
    this.state = {
      _markedDates: this.initialState
    }
  }

  onDaySelect = (day) => {
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
  }

  render() {
    return (
      <View style={styles.container}>
        <Calendar

            // we use moment.js to give the minimum and maximum dates.
            minDate={_today}
            maxDate={_maxDate}

            // hideArrows={true}

            onDayPress={this.onDaySelect}
            markedDates={this.state._markedDates}
        />
      </View>
    );
  }
}
