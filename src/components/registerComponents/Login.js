/**
  Login page with email/password and token generation on server side
 */
import React, { Component } from 'react';
import { Text,TextInput,TouchableOpacity,View,Image,Linking,Alert,Platform,Modal,KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../stylesheets/register/loginStyles';
// import firebase from 'react-native-firebase';
import InfoBtn from '../../utilities/InfoBtn';
import StatusBarBackground from '../../utilities/StatusBarBackground';

type Props = {};
export default class Login extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errMsg: 'testing',
      showMsgModal: false,
    }
    //firebase.analytics().setCurrentScreen('Login');
  }

  render() {
    //<KeyboardAvoidingView behavior= {(Platform.OS === 'android')? "padding" : null} style={{ flex: 1 }}>
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;
    //<KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
    return (
    <View style={styles.outerContainer}>
      <StatusBarBackground />
      {this.renderMessage()}
      <InfoBtn page='Login' />
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../../images/timeout_logo_app.png')} />
        <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
        <View style={styles.loginContainer}>
          {this.renderInputFields()}
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={ () => this.loginPressed()}
                              style={styles.confirmBtn}>
                <Text style={styles.pageText}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
        </KeyboardAvoidingView>
      </View>
    </View>
    );
  }

  renderInputFields() {
    return (<View>
      <View style={styles.inputSection}>
        <Icon name="user-o" style={styles.inputImage}/>
        <TextInput
              style={styles.input}
              placeholder='email'
              placeholderTextColor='#b6ccef'
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}
              autoCapitalize='none'
              keyboardType='email-address'
              autoCorrect={false}
              underlineColorAndroid='transparent'
            />
      </View>
      <View style={styles.inputSection}>
        <Icon name="lock" style={styles.inputImage} />
          <TextInput
              style={styles.input}
              placeholder='password'
              placeholderTextColor='#b6ccef'
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
              autoCapitalize='none'
              keyboardType='default'
              autoCorrect={false}
              secureTextEntry={true}
              underlineColorAndroid='transparent'
            />
      </View>
    </View>);
  }

  // display user error messages
  renderMessage() {
    return (<Modal transparent={false} visible={this.state.showMsgModal} animationType={'fade'}
           onRequestClose={() => this.setState({showMsgModal: false}) }>
      <View style={styles.modalMsgContainer}>
        <View style={styles.modalClose}>
          <TouchableOpacity onPress={() => this.setState({showMsgModal: false, postRecPreGraph: false}) }>
            <Icon name="times" size={25} color="#ecf0f1"/>
          </TouchableOpacity>
        </View>
        <View style={styles.modalHeader}>
          <View style={styles.infoRadius}>
            <Icon name="exclamation-triangle" size={60} color="#777"/>
          </View>
        </View>
        <View style={styles.modalTxtContainer}>
          <Text style={styles.h1Text}>{this.state.errMsg}</Text>
        </View>
      </View>
    </Modal>);
  }

  loginPressed() {
    var errorMsg = '';
    // check required fields: email, firstName, lastName, programCode
    if (this.state.email === '') errorMsg += "Please enter your email. \n";
    if (this.state.password === '') errorMsg += "Please enter your password.";
    if (errorMsg === '') {
      this.login();
    } else {
      Alert.alert("Login error", errorMsg);
    }
  }

  // call signup API
  login(user) {
    /*
    var formData = this.createLoginFormData(user);
    axios({
       url: this.props.user.mainurl + 'v1/ws/auth/firebase_login',
       method: 'post',
       data: formData
    })
    .then((response) => { // display modal: registration requires email confirmation within 24hours to login
      //this.updateTokenRedux(response);
      // without redux, will need to save token and user data to disk via AsyncStorage
    })
    // errors would already been handled for firebase, just handle server expecting valid json
    .catch((error) => {
      if (error.response) { // request made and server responded with a status code out of 2xx range
        var msg = error.response.data.error_description;
        if (msg) this.setState({showMsgModal: true, message: msg});
      } else if (error.request) { // The request was made but no response was received
        this.setState({showMsgModal: true, message:'Sorry, unable to connect to our server right now. Please try again later.'});
      } else { // Something happened in setting up the request that triggered an Error
        this.setState({showMsgModal: true, message:'Hmm something went wrong. Please check your internet connection and try again.'});
      }
      this.setState({showMsgModal: true, message:'Hmm something went wrong. Please check your internet connection and try again.'});
    })
    .done( () => { } );
    */
    this.props.navigation.navigate('Consent');
  }

  createLoginFormData() { // FormData to send to firebase_login API
    var formData = new FormData();
    formData.append('email', this.state.email);
    formData.append('uuid', v4());
    return formData;
  }
}
