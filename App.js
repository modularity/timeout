/**
  TimeOut mobile application
  This app is for the UCLA Division of Geriatrics(GeroNET).
  It is a research program tool to faciliate training and communication between volunteers and participants.
  http://www.geronet.ucla.edu/timeout
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, YellowBox
} from 'react-native';
import Navigation from './src/navigation';

import TaskList from './src/components/taskComponents/TaskList';
import TaskDetails from './src/components/taskComponents/TaskDetails';
import TaskSurvey from './src/components/taskComponents/TaskSurvey';
import TaskFeedback from './src/components/taskComponents/TaskFeedback';
import MessageList from './src/components/messageComponents/MessageList';
import MessageDetail from './src/components/messageComponents/MessageDetail';
import CalendarView from './src/components/calendarComponents/CalendarView';
import CalendarList from './src/components/calendarComponents/CalendarList';
import CalendarDetail from './src/components/calendarComponents/CalendarDetail';
import Login from './src/components/registerComponents/Login';
import Consent from './src/components/registerComponents/Consent';
import NotEnrolled from './src/components/registerComponents/NotEnrolled';
import Profile from './src/components/profileComponents/ProfileList';
// import library for navigation objects and routing
import { StackNavigator, TabNavigator } from 'react-navigation';
// import FontAwesome icons for navigation objects
import Icon from 'react-native-vector-icons/FontAwesome';

// hidding know bug: https://github.com/react-navigation/react-navigation/issues/3956
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <TabNav navigator={this.props.navigation} />
  }
}

// navigation objects where order matters
// nested nav objects must be initialized before referencing

// task tab navigation object
const TaskNav = StackNavigator({
  TaskList: { screen: TaskList,
    navigationOptions: ({ navigation }) => ({
      header: null,
      }),
    },
  TaskDetails: { screen: TaskDetails,
    navigationOptions: ({ navigation }) => ({
      header: null,
      }),
    },
  TaskSurvey: { screen: TaskSurvey,
    navigationOptions: ({ navigation }) => ({
      header: null,
      }),
    },
  TaskFeedback: { screen: TaskFeedback,
    navigationOptions: ({ navigation }) => ({
      header: null,
      }),
    },
});

// message tab navigation object
const MessageNav = StackNavigator({
  MessageList: { screen: MessageList,
    navigationOptions: ({ navigation }) => ({
      header: null,
      }),
    },
  MessageDetail: { screen: MessageDetail,
    navigationOptions: ({ navigation }) => ({
      header: null,
      }),
    },
});

// calendar tab navigation object
const CalendarNav = StackNavigator({
  CalendarView: { screen: CalendarView,
    navigationOptions: ({ navigation }) => ({
      header: null,
      }),
    },
  CalendarList: { screen: CalendarList,
    navigationOptions: ({ navigation }) => ({
      header: null,
      }),
    },
  CalendarDetail: { screen: CalendarDetail,
    navigationOptions: ({ navigation }) => ({
      header: null,
      }),
    },
});

// tabs navigation object
const TabNav = TabNavigator({
  TaskNav: { screen: TaskNav,
            navigationOptions: {
              tabBarLabel: 'Tasks',
              tabBarIcon: ({ tintColor }) =>
                  <Icon name="tasks" size={25} color={tintColor} />
            }
          },
  MessageNav: { screen: MessageNav,
            navigationOptions: {
              tabBarLabel: 'Messages',
              tabBarIcon: ({ tintColor }) =>
                  <Icon name="comments" size={25} color={tintColor} />
            }
         },
  CalendarNav: { screen: CalendarNav,
            navigationOptions: {
              tabBarLabel: 'Calendar',
              tabBarIcon: ({ tintColor }) =>
                  <Icon name="calendar" size={25} color={tintColor} />
            }
        },
  Profile: { screen: Profile,
            navigationOptions: {
              tabBarLabel: 'Profile',
              tabBarIcon: ({ tintColor }) =>
                  <Icon name="user" size={25} color={tintColor} />
            }
        },
  }, {
  tabBarOptions: {
    activeTintColor: '#fff',
    activeBackgroundColor: '#fdba31',
    inactiveTintColor: '#fff',
    inactiveBackgroundColor: '#5f97cb'
  },
  //swipeEnabled: true,
  //animationEnabled: true,
});

// root navigation object to handle onboarding
const MainNav = StackNavigator({
  Login: { screen: Login,
    navigationOptions: ({ navigation }) => ({
      header: null,
      }),
    },
  Consent: { screen: Consent,
    navigationOptions: ({ navigation }) => ({
      title: 'Terms and Conditions',
      headerLeft: null,
      headerStyle: { backgroundColor: '#5f97cb' },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Avenir',
        color: '#fff',
      },
    }),
  },
  NotEnrolled: { screen: NotEnrolled,
    navigationOptions: ({ navigation }) => ({
      title: 'Account Pending',
      headerLeft: null,
      headerStyle: { backgroundColor: '#5f97cb' },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Avenir',
        color: '#fff',
      },
    }),
  },
  TabNav: { screen: TabNav,
    navigationOptions: ({ navigation }) => ({
      header: null
    }),
  },
});
