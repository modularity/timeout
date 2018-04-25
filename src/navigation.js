
import React, { Component } from 'react';
import { Alert, AsyncStorage, ActivityIndicator, View } from 'react-native';
// import other pages to load into navigation objects
import TaskList from './components/taskComponents/TaskList';
import TaskDetails from './components/taskComponents/TaskDetails';
import TaskSurvey from './components/taskComponents/TaskSurvey';
import TaskFeedback from './components/taskComponents/TaskFeedback';
import MessageList from './components/messageComponents/MessageList';
import MessageDetail from './components/messageComponents/MessageDetail';
import CalendarView from './components/calendarComponents/CalendarView';
import CalendarList from './components/calendarComponents/CalendarList';
import CalendarDetail from './components/calendarComponents/CalendarDetail';
import Login from './components/registerComponents/Login';
import Consent from './components/registerComponents/Consent';
import NotEnrolled from './components/registerComponents/NotEnrolled';
import Profile from './components/profileComponents/ProfileList';
// import library for navigation objects and routing
import { StackNavigator, TabNavigator } from 'react-navigation';
// import FontAwesome icons for navigation objects
import Icon from 'react-native-vector-icons/FontAwesome';

// navigation objects
// order matters: nested navigation objects must be initialized before they can be referenced

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
    inactiveBackgroundColor: '#20a3dd'
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
      title: 'Consent',
      headerStyle: { backgroundColor: '#20a3dd' },
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
      title: '',
      headerStyle: { backgroundColor: '#20a3dd' },
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
