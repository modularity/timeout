/**
  This page shows detailed information for survey task assigned to the user.
  It includes: title, description and link.
  When they return from the webview: they are asked to 'complete task'.
 */
 import React, { Component } from 'react';
 import {Text,View,TouchableOpacity,Linking} from 'react-native';
 import Icon from 'react-native-vector-icons/FontAwesome';
 import styles from '../../stylesheets/tasks/taskSurveyStyles';
 // import firebase from 'react-native-firebase';
 import InfoBtn from '../../utilities/InfoBtn';
 import StatusBarBackground from '../../utilities/StatusBarBackground';

 type Props = {};
 export default class TaskFeedback extends Component<Props> {
   constructor(props) {
     super(props);
     this.state = {
       openedLink: false,
       showMsgModal: true,
       errMsg: 'Some message the user needs to see.',
     }
     //firebase.analytics().setCurrentScreen('TaskSurvey');
   }
   render() {
     const { params } = this.props.navigation.state;
     const title = params ? params.title : null;

     return (
       <View style={styles.container}>
        <View style={styles.innerContainer}>
         <Text style={styles.title}>{params.title}</Text>
         <Text style={styles.subTitle}>{params.subTitle}</Text>
         <Text style={styles.body}>{params.body}</Text>
         {this.renderButton()}
        </View>
       </View>
     );
   }

   renderButton() {
     var title = this.props.navigation.state.params.title;
     if (this.state.openedLink) {
       return (
         <View>
         <TouchableOpacity style={styles.confirmBtn} onPress={() => this.completedTask(title)}>
           <Text style={styles.confirmBtnText}>Complete Task</Text>
         </TouchableOpacity>
         </View>
       );
     }
     return (
       <View>
       <TouchableOpacity style={styles.confirmBtn} onPress={() => this.beginSurvey()}>
         <Text style={styles.confirmBtnText}>Begin</Text>
       </TouchableOpacity>
       </View>
     );
   }

   // route to Linking webview for the given url, update state for conditional button rendering
   beginSurvey() {
     var url = 'https://google.com';
     //firebase.analytics.logEvent("open_survey_link", { id: url });
     Linking.canOpenURL(url).then(supported => {
       if (supported) Linking.openURL(url);
       //else this.setState({showMsgModal: true, message:"Unable to open the survey link "});
     });
     this.setState({openedLink: true});
   }

   // button handler when the user marks the task completed
   // will call API with the task update
   // then update the selected props on the TaskList and route back to that page
   completedTask(title) {
     this.props.navigation.navigate('TaskList', {
       taskDone: title
     });
     this.postSurveyDone();
   }


   // send formData to server
   // placeholder for web service, update params and url
   postSurveyDone() {
     //console.warn('postSurveyDone', this.getFormData());
   /*
     fetch(url, {
       method: 'post',
       body: this.getFormData()
     })
     .then((response) => {
       //console.log('finishRecording res', response);
       if (response.status === 200) {
         response.json().then((data) => {
           if (data.errmsg) {
             this.setState({showMsgModal: true, errMsg:'There was an error running the algorithm.'});
             //firebase.analytics().logEvent('server_sent_algorithm_error');
           } else this.updateGraph(data);
         })
       } else {
         this.setState({showMsgModal: true, errMsg: 'Server error processing the audio file.'});
         //firebase.analytics().logEvent('recording_server_non200_error');
       }
     })
     .catch((error) => {
       //console.log('finishRecording err', error);
       this.setState({showMsgModal: true, errMsg: 'Server error sending the audio file.'});
       //firebase.analytics().logEvent('recording_server_error');
     });
     */
   }
   getFormData() {
     let formData = new FormData();
     formData.append('surveyDone', true);
     return formData;
   }
 }
