/**
  This page lists information: title, description for general activity tasks.
  There is button for the user to mark 'complete task'.
  This button will update the task status to completed by self.
 */
import React, { Component } from 'react';
import {Text,View,TouchableOpacity,Image,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../stylesheets/tasks/taskDetailsStyles';
// import firebase from 'react-native-firebase';
import InfoBtn from '../../utilities/InfoBtn';
import StatusBarBackground from '../../utilities/StatusBarBackground';

type Props = {};
export default class TaskDetails extends Component<Props> {
  render() {
    const { params } = this.props.navigation.state;
    // could check for null first
    const title = params ? params.title : null;

    return (
      <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>{params.title}</Text>
        <Text style={styles.subTitle}>{params.subTitle}</Text>
        <View style ={styles.avatarContainer}>
          <Image style={styles.avatar} source= {{uri: 'https://www.acqueon.com/wp-content/uploads/2017/08/avatar-image.png'}} />
        </View>
        <Text style={styles.personText}>{params.person}</Text>
        <Text style={styles.body}>{params.body}</Text>
        <TouchableOpacity style={styles.confirmBtn} onPress={() => this.completedTask(title)}>
          <Text style={styles.confirmBtnText}>Complete Task</Text>
        </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
  // button handler when the user marks the task completed
  // will call API with the task update
  // then update the selected props on the TaskList and route back to that page
  completedTask(title) {
    this.props.navigation.navigate('TaskList', {
      taskDone: title
    });
  }
}
