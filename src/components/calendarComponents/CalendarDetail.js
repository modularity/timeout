/**
  This page lists the TimeOut session for the day selected on CalendarList page.
  It lists each event(1+) for the given day and the marked availability.
  Options are 'confirm': green, 'refuse': red, 'edit': gray
  There are also dots to the left of the event text.
  The dot is grey when unselected, green for confirmed, red for refused.
 */
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

type Props = {};
export default class CalendarDetail extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          CalendarDetail
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
