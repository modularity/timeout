/**
  This page shows detailed information for survey task assigned to the user.
  It includes: title, description and link.
  When they return from the webview: they are asked to 'complete task'.
 */
 import React, { Component } from 'react';
 import {Text,View,TouchableOpacity} from 'react-native';
 import Icon from 'react-native-vector-icons/FontAwesome';
 import styles from '../../stylesheets/tasks/taskSurveyStyles';
 // import firebase from 'react-native-firebase';
 import InfoBtn from '../../utilities/InfoBtn';
 import StatusBarBackground from '../../utilities/StatusBarBackground';

 type Props = {};
 export default class TaskFeedback extends Component<Props> {
   render() {
     const { params } = this.props.navigation.state;
     const title = params ? params.title : null;

     return (
       <View style={styles.container}>
         <Text style={styles.title}>{params.title}</Text>
         <Text style={styles.subTitle}>{params.subTitle}</Text>
         <Text style={styles.personText}>{params.person}</Text>
         <Text style={styles.body}>{params.body}</Text>
         <TouchableOpacity style={styles.confirmBtn} onPress={() => this.completedTask(title)}>
           <Text style={styles.confirmBtnText}>Complete Task</Text>
         </TouchableOpacity>
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
