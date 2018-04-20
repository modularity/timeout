import React, { Component } from 'react';
import {ScrollView,FlatList,Text,View,Image,TextInput,TouchableOpacity,Modal,Alert,KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../stylesheets/calendar/calendarListStyles';
// import firebase from 'react-native-firebase';
import InfoBtn from '../../utilities/InfoBtn';
import StatusBarBackground from '../../utilities/StatusBarBackground';

type Props = {};
export default class CalendarList extends Component<Props> {
  constructor() {
    super();
    this.state = {
        events: [
          {activity_session_id: 123, activity_title: 'Title goes here', session_title: 'Session title here', open_date_pretty: '2/18/2018 9:00AM', close_date_pretty: '2/20/2018 5:00PM'},
          {activity_session_id: 123, activity_title: 'Title goes here', session_title: 'Session title here', open_date_pretty: '2/18/2018 9:00AM', close_date_pretty: '2/20/2018 5:00PM'},
          {activity_session_id: 123, activity_title: 'Title goes here', session_title: 'Session title here', open_date_pretty: '2/18/2018 9:00AM', close_date_pretty: '2/20/2018 5:00PM'}]
      }
  }

  render() {
      return (
        <View style={styles.container}>
          <View style={styles.statusBar} />
             <FlatList
               data={this.state.events}
               extraData={this.state}
               keyExtractor={item => item.activity_session_id}
               ListEmptyComponent={this.noCalenderItems}
               renderItem={this.renderCalenderItem}
              />
        </View>
      );
    }

  // style={[styles.element, styles.rowContainer]}
    renderCalenderItem = ({item}) => (
      <View>
        <View style={[styles.element, styles.rowContainer]}>
            <View style={styles.elementLeft}>
              <Icon name="calendar" size={20} color="#34495e" />
            </View>
            <View style={styles.elementRight}>
              <View style={styles.eventContainer}>
                   <Text style={[styles.eventTitle, styles.textDarkBlue]}>{item.activity_title}</Text>
                   <Text style={[styles.eventDetail, styles.textDarkBlue]}>{item.session_title}</Text>
                   <Text style={[styles.eventDate, styles.textDarkBlue]}>{item.open_date_pretty} - {item.close_date_pretty}</Text>
              </View>
            </View>
        </View>
        <View style={styles.seperator}/>
      </View>
    );

   // default for when a selected programCode has zero entries
   noCalenderItems = () => (
     <View style={styles.noEventsContainer}>
       <Text style={styles.noEventsText}>
         Check back later for updates {"\n"} Or select another program above
       </Text>
    </View>
    );
  }
