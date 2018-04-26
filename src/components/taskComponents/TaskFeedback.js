/**
  This page lists the feedback for a session that the user attended.
  They are asked to rate the session 1-5 and leave comments.
  Selecting 'Give Feedback' will update the task to completed by user.
 */
import React, { Component } from 'react';
import {ScrollView,Text,View,TouchableOpacity,Image,TextInput,Modal} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../stylesheets/tasks/taskFeedbackStyles';
// import firebase from 'react-native-firebase';
import InfoBtn from '../../utilities/InfoBtn';
import StatusBarBackground from '../../utilities/StatusBarBackground';

type Props = {};
export default class TaskFeedback extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      selected: (new Map(): Map<string, boolean>),
      starCfg: [{"name": 'star-o', "color": '#999'},
                {"name": 'star-o', "color": '#999'},
                {"name": 'star-o', "color": '#999'},
                {"name": 'star-o', "color": '#999'},
                {"name": 'star-o', "color": '#999'} ],
      commentText: '',
      stars: 0,
    }
    //firebase.analytics().setCurrentScreen('TaskFeedback');
  }
  render() {
    const { params } = this.props.navigation.state;
    // could check for null first
    const title = params ? params.title : null;

    return (
      <View style={styles.container}>
        <ScrollView style={styles.innerContainer}>
          <Text style={styles.title}>{params.title}</Text>
          <Text style={styles.subTitle}>{params.subTitle}</Text>
          {this.renderAvatar(params.person)}
          {this.renderStars()}
          {this.renderCommentInput()}
          <TouchableOpacity style={styles.confirmBtn} onPress={() => this.completedTask(title)}>
            <Text style={styles.confirmBtnText}>Give Feedback</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }

  renderAvatar(person) {
    var image = 'https://www.acqueon.com/wp-content/uploads/2017/08/avatar-image.png';
    return(
      <View>
        <View style ={styles.avatarContainer}>
          <Image style={styles.avatar} source= {{uri: image}} />
        </View>
        <Text style={styles.personText}>{person}</Text>
      </View>
    );
  }

  renderCommentInput() {
    return (
      <View>
        <Text style={styles.header}>Comments:</Text>
        <View style={styles.commentBox}>
          <TextInput
            editable = {true}
            maxLength = {200}
            multiline={true}
          	numberOfLines={4}
          	blurOnSubmit={false}
            style={styles.commentText}
            onChangeText={(commentText) => this.setState({commentText})}
            value={this.state.commentText}
          />
        </View>
    </View>
    );
  }

  renderStars() {
    var str = this.state.starCfg;
    return(
      <View>
        <Text style={styles.header}>Please rate your experience:</Text>
        <View style={styles.starContainer}>
        <TouchableOpacity style={styles.star} onPress={() => this.starPressed(0)}>
          <Icon name={str[0].name} color={str[0].color} size={35} style={styles.icon}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.star} onPress={() => this.starPressed(1)}>
          <Icon name={str[1].name} color={str[1].color} size={35} style={styles.icon}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.star} onPress={() => this.starPressed(2)}>
          <Icon name={str[2].name} color={str[2].color} size={35} style={styles.icon}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.star} onPress={() => this.starPressed(3)}>
          <Icon name={str[3].name} color={str[3].color} size={35} style={styles.icon}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.star} onPress={() => this.starPressed(4)}>
          <Icon name={str[4].name} color={str[4].color} size={35} style={styles.icon}/>
        </TouchableOpacity>
        </View>
      </View>
    );
  }

  // button handler to update number of stars selected in feedback form
  // need to reset back to default in case user changes from 5 to 3, etc
  starPressed(idx) {
    var stars = idx+1;
    var starCfg = [{"name": 'star-o', "color": '#999'},
              {"name": 'star-o', "color": '#999'},
              {"name": 'star-o', "color": '#999'},
              {"name": 'star-o', "color": '#999'},
              {"name": 'star-o', "color": '#999'} ];
    for (var i=0; i<=idx; i++) {
      starCfg[i] = {"name": "star", "color": "#3ecb6d"};
    }
    this.setState({starCfg, stars});
  }

  // button handler when the user marks the task completed
  // will call API with the task update
  // then update the selected props on the TaskList and route back to that page
  completedTask(title) {
    this.props.navigation.navigate('TaskList', {
      taskDone: title
    });
    this.postFeedback();
  }

  // send formData to server
  // placeholder for web service, update params and url
  postFeedback() {
    //console.warn('postFeedback', this.getFormData());
  /*
    fetch(url, {
      method: 'post',
      body: this.getFormData()
    })
    .then((response) => {
      //console.log('response', response);
      if (response.status === 200) {
        response.json().then((data) => {
          if (data.errmsg) {
            //this.setState({showMsgModal: true, errMsg:'Server error'});
            //firebase.analytics().logEvent('server_sent_errMsg');
          }
        })
      } else {
        //this.setState({showMsgModal: true, errMsg: 'Server error'});
        //firebase.analytics().logEvent('recording_server_non200_error');
      }
    })
    .catch((error) => {
      //console.log('post err', error);
      //this.setState({showMsgModal: true, errMsg: 'Server error'});
      //firebase.analytics().logEvent('recording_server_error');
    });
    */
  }
  getFormData() {
    let formData = new FormData();
    formData.append('stars', this.state.stars);
    formData.append('comments', this.state.commentText);
    return formData;
  }

}
