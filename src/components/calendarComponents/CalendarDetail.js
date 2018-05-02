/**
  This page lists the TimeOut session for the day selected on CalendarList page.
  It lists each event(1+) for the given day and the marked availability.
  Options are 'confirm': green, 'refuse': red, 'edit': gray
  There are also dots to the left of the event text.
  The dot is grey when unselected, green for confirmed, red for refused.
 */
 import React, { Component } from 'react';
 import {ScrollView,FlatList,Text,View,Image,TextInput,TouchableOpacity,Modal,Alert} from 'react-native';
 import Icon from 'react-native-vector-icons/FontAwesome';
 import styles from '../../stylesheets/calendar/calendarDetailsStyles';
 // import firebase from 'react-native-firebase';
 import InfoBtn from '../../utilities/InfoBtn';
 import StatusBarBackground from '../../utilities/StatusBarBackground';
 import moment from 'moment';

type Props = {};
export default class CalendarDetail extends Component<Props> {
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
        date: '2018-5-9',
        events: [{sessionID: 1, date: '2018-5-9', SessionStartTime: '11am', SessionStopTime: '12pm', SessionTitle: 'Session 1', isAvailable: 'yes' },
          {sessionID: 2, date: '2018-5-9', SessionStartTime: '11am', SessionStopTime: '12pm', SessionTitle: 'Session 2', isAvailable: 'no' },
          {sessionID: 3, date: '2018-5-9', SessionStartTime: '10am', SessionStopTime: '11am', SessionTitle: 'Session 3', isAvailable: 'na' }],
      }
    }
    render() {
        return (
          <View style={styles.container}>
            <Text style={[styles.eventDate]}>{this.parseDate()}</Text>
            <View style={styles.seperator}/>
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
            <View style={[styles.element, styles.rowContainer]}>
                <View style={styles.elementLeft}>
                  <Icon name="circle" size={20} color={this.color(item.isAvailable)} />
                </View>
                <View style={styles.elementRight}>
                  <View style={styles.eventContainer}>
                       <Text style={[styles.eventDescription]}>{item.SessionTitle} from {item.SessionStartTime}-{item.SessionStopTime} </Text>
                  </View>
                </View>
            </View>
            {this.renderBtns(item)}
            <View style={styles.seperator}/>
          </View>
      );

    parseDate() {
      return moment(this.state.date, 'YYYY-MM-DD').format('MMM DD, YYYY');
    }

    color(isAvailable) {
      const calConfig = {'no': {selected: true, color: '#fdba33', shape:'circle'},
        'yes': {selected: true, color: '#71c172', shape:'circle'},
        'na': {selected: true, color: '#ccc', shape:'square'}
      }
      return calConfig[isAvailable].color;
    }

    // conditional render between edit for yes/no and na
    renderBtns(item) {
      if (item.isAvailable === 'na') {
        return (<View style={styles.btnRow}>
          <TouchableOpacity style={styles.confirmBtn} onPress={() => this.confirm(item)}>
            <Text style={styles.confirmBtnText}>Confirm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.declineBtn} onPress={() => this.decline(item)}>
            <Text style={styles.confirmBtnText}>Decline</Text>
          </TouchableOpacity>
      </View>);
      }
      return (<View style={styles.btnRow}>
        <TouchableOpacity style={styles.editBtn} onPress={() => this.edit(item)}>
          <Text style={styles.confirmBtnText}>Edit</Text>
        </TouchableOpacity>
      </View>);
    }
   // default for when a selected programCode has zero entries
   noCalenderItems = () => (
     <View style={styles.noEventsContainer}>
       <Text style={styles.noEventsText}>
         Check back later for updates {"\n"} Or select another program above
       </Text>
    </View>
    );
    confirm(session) {
        // update API and state to reflect confirm session
    }
    decline(session) {
        // update API and state to reflect decline session
    }
    edit(item) {
      // create modal with option to render confirm and decline
    }
  }
