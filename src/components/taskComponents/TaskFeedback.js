/**
  This page lists the feedback for a session that the user attended.
  They are asked to rate the session 1-5 and leave comments.
  Selecting 'Give Feedback' will update the task to completed by user.
 */
import React, { Component } from 'react';
import {Text,View,TouchableOpacity,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../stylesheets/tasks/taskFeedbackStyles';
// import firebase from 'react-native-firebase';
import InfoBtn from '../../utilities/InfoBtn';
import StatusBarBackground from '../../utilities/StatusBarBackground';

type Props = {};
export default class TaskFeedback extends Component<Props> {
  render() {
    const { params } = this.props.navigation.state;
    // could check for null first
    const title = params ? params.title : null;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{params.title}</Text>
        <Text style={styles.subTitle}>{params.subTitle}</Text>
        <View style ={styles.avatarContainer}>
          <Image style={styles.avatar} source= {{uri: 'https://www.acqueon.com/wp-content/uploads/2017/08/avatar-image.png'}} />
        </View>
        <Text style={styles.personText}>{params.person}</Text>
        {this.renderStars()}
        <TouchableOpacity style={styles.confirmBtn} onPress={() => this.completedTask(title)}>
          <Text style={styles.confirmBtnText}>Give Feedback</Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderStars() {
    var iconName = 'star-o'
    var iconColor = "#999";
    /*
    if (this.props.selected) {
      iconName = "check-circle";
      iconColor = "#3ecb6d";
    }
    */
    return(
      <View style={styles.starContainer}>
      <TouchableOpacity style={styles.star} onPress={() => this.starPressed()}>
        <Icon name={iconName} color={iconColor} size={30} style={styles.icon}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.star} onPress={() => this.starPressed()}>
        <Icon name={iconName} color={iconColor} size={30} style={styles.icon}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.star} onPress={() => this.starPressed()}>
        <Icon name={iconName} color={iconColor} size={30} style={styles.icon}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.star} onPress={() => this.starPressed()}>
        <Icon name={iconName} color={iconColor} size={30} style={styles.icon}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.star} onPress={() => this.starPressed()}>
        <Icon name={iconName} color={iconColor} size={30} style={styles.icon}/>
      </TouchableOpacity>
      </View>
    );
  }

  starPressed() {

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
