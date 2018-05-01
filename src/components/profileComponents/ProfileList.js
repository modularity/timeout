/**
  This is the user profile page that the user can edit.
 */
import React, { Component } from 'react';
import {ScrollView,Text,View,Image,TextInput,TouchableOpacity,Modal,Alert,KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../stylesheets/profile/profileStyles';
import markdownStyles from '../../stylesheets/profile/markdownStyles';
// import firebase from 'react-native-firebase';
import InfoBtn from '../../utilities/InfoBtn';
import StatusBarBackground from '../../utilities/StatusBarBackground';
// library for user to select image from device storage or take a new photo
import ImagePicker from 'react-native-image-picker';
import ContactInfo from '../../utilities/ContactInfo';

type Props = {};
export default class ProfileList extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      showEula: false,
      showContact: false,
      contactText: {
        contactPerson: 'Josephine Bruin',
        contactEmail: 'josbruin@ucla.edu',
        contactPhone: '(310) 867-5309',
      },
      eulaText: 'Just relax and let it flow. That easy. You can get away with a lot. As trees get older they lose their chlorophyll. I like to beat the brush. Sometimes you learn more from your mistakes than you do from your masterpieces. That is a son of a gun of a cloud. In your world you have total and absolute power. Nothing wrong with washing your brush. I think there is an artist hidden in the bottom of every single one of us. Just let this happen. We just let this flow right out of our minds. A little happy sunlight shining through there. Is that not fantastic that you can create an almighty tree that fast? In life you need colors. Volunteering your time, it pays you and your whole community fantastic dividends. You have to make almighty decisions when you are the creator. We spend so much of our life looking - but never seeing. Maybe there was an old trapper that lived out here and maybe one day he went to check his beaver traps, and maybe he fell into the river and drowned. Trees cover up a multitude of sins. If you do not like it - change it. It is your world. Let that brush dance around there and play. The first step to doing anything is to believe you can do it. See it finished in your mind before you ever start. Use what happens naturally, do not fight it. Water is like me. It is laaazy ... Boy, it always looks for the easiest way to do things I want everybody to be happy. That is what it is all about. The shadows are just like the highlights, but we are going in the opposite direction. Get away from those little Christmas tree things we used to make in school. Let us put some happy trees and bushes back in here. Work that paint. These things happen automatically. All you have to do is just let them happen.',
    }
    //firebase.analytics().setCurrentScreen('profile');
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderEula()}
        {this.renderContact()}
        <Profile
          name={"John Smith"}
          role={"Student Volunteer"}
          bio={"I like dogs"}
          />
      {this.renderFooter()}
      </View>
    );
  }

  renderFooter() {
    return(<View style={styles.footerContainer}>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerBtn} onPress={() => this.setState({showContact:true})}>
          <Icon name={'mobile'} size={25} style={{ color: '#20a3dd'}} />
          <Text style={styles.footerText}>Contact Us</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerBtn} onPress={() => this.setState({showEula:true})}>
          <Icon name={'book'} size={25} style={{ color: '#20a3dd'}} />
          <Text style={styles.footerText}>Terms of Use</Text>
        </TouchableOpacity>
      </View>
    </View>);
  }

  renderEula() {
    return (<Modal transparent={false} visible={this.state.showEula} animationType={'fade'}
           onRequestClose={() => this.setState({showEula: false}) }>
    <View style={styles.modalMsgContainer}>
      <View style={styles.modalClose}>
        <TouchableOpacity onPress={() => this.setState({showEula: false}) }>
         <Icon name="times" size={25} color="#ecf0f1"/>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.eulaContainer}>
        <Text style={styles.eulaText}>
          {this.state.eulaText}
        </Text>
      </ScrollView>
    </View>
  </Modal>);
  }

  renderContact() {
    return (<Modal transparent={false} visible={this.state.showContact} animationType={'fade'}
           onRequestClose={() => this.setState({showContact: false}) }>
    <View style={styles.modalMsgContainer}>
      <View style={styles.modalClose}>
        <TouchableOpacity onPress={() => this.setState({showContact: false}) }>
          <Icon name="times" size={25} color="#fff"/>
        </TouchableOpacity>
      </View>
      <ContactInfo />
    </View>
  </Modal>);
  }
}
class Profile extends Component<Props> {
  constructor(props) {
      super(props)
      this.state = {
          avatarSource: {uri: 'https://www.acqueon.com/wp-content/uploads/2017/08/avatar-image.png'},
          editable: false,
          selected: false,
          showCancel: false,
          //showModal: false,
          name: props.name,
          role: props.role,
          bio: props.bio,
      }
      this.data = {
        name: this.state.name,
        role: this.state.role,
        bio: this.state.bio
      }
  }
  render() {
    return (
      <View style={styles.innerContainer}>
      <StatusBarBackground />
        {this.renderHeader()}
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View style ={styles.avatarContainer}>
            <TouchableOpacity onPress={() => this.selectPhoto()}>
              <Image style={styles.avatar} source= {this.state.avatarSource} />
            </TouchableOpacity>
          </View>
          <View style={styles.attributeContainer}>
            <Text style={styles.attributeTitle}>Name</Text>
            <TextInput style={this.state.editable? styles.editText : styles.attributeText}
                      editable={this.state.editable}
                      value={this.state.name}
                      onChangeText={this.handleChangeName}/>
          </View>
          <View style={styles.attributeContainer}>
            <Text style={styles.attributeTitle}>Bio</Text>
            <TextInput style={this.state.editable? styles.editText : styles.attributeText}
                      editable={this.state.editable}
                      multiline={true}
                      value={this.state.bio}
                      onChangeText={this.handleChangeBio} />
          </View>
          <View style={styles.attributeContainer}>
            <Text style={styles.attributeTitle}>Role</Text>
            <TextInput style={styles.attributeText}
                       editable={false}
                       value={this.state.role} />
          </View>
          </KeyboardAvoidingView>
          {this._renderCancel()}
      </View>
    );
  }

  selectPhoto() {
    var options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };

    /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info below in README)
     */
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let avatarSource = { uri: response.uri };
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({ avatarSource });
      }
    });
  }


  onPressEdit = () => {
    this.setState(prev => ({
      selected: !prev.selected,
      editable: !prev.editable,
      showCancel: !prev.showCancel
    }));
  };

  onPressSave = () => {
    this.setState(prev => ({
      selected: !prev.selected,
      editable: !prev.editable,
      showCancel: !prev.showCancel,
      //showModal: !prev.showModal
    }));
    this.data = {
        name: this.state.name,
        role: this.state.role,
        bio: this.state.bio
    }
  };

  renderHeader() {
    return(<View style={styles.editSaveBtn}>
      <TouchableOpacity onPress={this.state.selected? this.onPressSave : this.onPressEdit}>
        <Icon name={this.state.selected? 'save' : 'pencil'} size={25} style={{ color: '#20a3dd'}} />
      </TouchableOpacity>
    </View>);
  }

  onPressCancel = () => {
    this.setState(prev => ({
      selected: !prev.selected,
      editable: !prev.editable,
      showCancel: !prev.showCancel,
      name: this.data.name,
      role: this.data.role,
      bio: this.data.bio,
    }));
  };

  _renderCancel = () => {
      if (this.state.showCancel) {
          return (<View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.cancelButtonContainer} onPress={this.onPressCancel}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.confirmBtn} onPress={this.onPressSave}>
              <Text style={styles.confirmBtnText}>Save</Text>
            </TouchableOpacity>
            </View>
          );
      } else {
          return (<View style={styles.footer}/>);
      }
  }

// Text Change Events
  handleChangeName = (text) => {
    this.setState({
      name: String(text)
    });
  }
  handleChangeWeb = (text) => {
    this.setState({
      role: String(text)
    });
  }
  handleChangeBio = (text) => {
    this.setState({
      bio: String(text)
    });
  }
}

/*
// not being used
_renderModalPopup = () => {
  if (this.state.showModal) {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.showModal}>
        <View style={{marginTop: 40}}>
          <View>
            <Text style={styles.modalTitle}> Your changes </Text>
            <Text style={styles.modalText}>{JSON.stringify(this.data).replace(/,|{|}/g, "\n")}</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                this.setState(prev => ({
                  showModal: !prev.showModal
                }));
              }}>
              <Text style={styles.cancelButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}
*/
