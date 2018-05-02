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
      showMsgModal: false,
      taskData: {names:['Jun-fan Lee', 'Edward Lao'], id: "2",
          image: 'https://cdn4.iconfinder.com/data/icons/icoflat-2/512/avatar-512.png'},

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
          {this.renderNameList()}
          <TouchableOpacity style={styles.confirmBtn} onPress={() => this.completedTask(title)}>
            <Text style={styles.confirmBtnText}>Give feedback</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.declineBtn} onPress={() => this.completedTask(title)}>
            <Text style={styles.confirmBtnText}>Did not attend</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }

  renderNameList() {
    var nameList = this.getNameList();
    return (<Modal transparent={true} visible={this.state.showMsgModal} animationType={'fade'}
           onRequestClose={() => this.setState({showMsgModal: false}) }>
      <View style={styles.modalMsgContainer}>
        <View style={styles.modalClose}>
          <TouchableOpacity onPress={() => this.setState({showMsgModal: false}) }>
            <Icon name="times" size={25} color="#ecf0f1"/>
          </TouchableOpacity>
        </View>
        <View style={styles.nameListContainer}>
          {nameList.map((x, i) => {
            return(<TouchableOpacity key={i} style={styles.nameListBtn}
                onPress={() => this.updateName(x) }>
              <Text style={styles.nameListText}>{x.names[0]}</Text>
            </TouchableOpacity>);
          })}
        </View>
      </View>
    </Modal>);
  }

  getNameList() {
    var nameList = [
      {names:['Mabel Weathersby', 'Chip Weathersby'], message:'Cool!', id: "0",
        image: 'https://i.pinimg.com/originals/d3/69/d9/d369d9056795f553e244da66e8297cca.png'},
      {names:['Phineas Smith', 'Rose Lee-Smith'], message:'I am glad to help', id: "1",
        image: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman2-512.png'},
      {names:['Jun-fan Lee', 'Edward Lao'], message:'Great! ', id: "2",
        image: 'https://cdn4.iconfinder.com/data/icons/icoflat-2/512/avatar-512.png'},
    ];
    return nameList;
  }

  // may need to send update to API call
  updateName(newTaskData) {
    //this.setState({taskData: x.names[0],showMsgModal: false})
    this.setState({showMsgModal: false, taskData: newTaskData});
  }

  renderAvatar(person) {
    return(
      <View>
        <View style ={styles.avatarContainer}>
          <TouchableOpacity onPress={() => this.editName()}>
            <Image style={styles.avatar} source= {{uri: this.state.taskData.image}} />
          </TouchableOpacity>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>{this.state.taskData.names[0]}</Text>
          <TouchableOpacity style={styles.editNameBtn} onPress={() => this.editName()}>
            <Icon name={'pencil'} color={'#20a3dd'} size={25} style={styles.icon}/>
          </TouchableOpacity>
        </View>
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
          	numberOfLines={3}
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

  // allows user to select another senior for that session
  editName() {
    this.setState({showMsgModal: true});
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
    //console.warn('completed feedback', this.state.commentText);
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
