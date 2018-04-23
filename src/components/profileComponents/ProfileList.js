/**
  This is the profile page that the user can edit.
 */
import React, { Component } from 'react';
import {ScrollView,Text,View,Image,TextInput,TouchableOpacity,Modal,Alert,KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../stylesheets/profile/profileStyles';
// import firebase from 'react-native-firebase';
import InfoBtn from '../../utilities/InfoBtn';
import StatusBarBackground from '../../utilities/StatusBarBackground';

type Props = {};
export default class ProfileList extends Component<Props> {
  render() {
    return (
      <View>
        <StatusBarBackground />
        <Profile
          name={"John Smith"}
          role={"www.jsmith.com"}
          bio={"I like dogs"}
          />
      </View>
    );
  }
}
class Profile extends Component<Props> {
  constructor(props) {
      super(props)
      this.state = {
          editable: false,
          selected: false,
          showCancel: false,
          showModal: false,
          name: props.name,
          role: props.role,
          bio: props.bio
      }
      this.data = {
        name: this.state.name,
        role: this.state.role,
        bio: this.state.bio
      }
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          {this.renderHeader()}
          <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View style ={styles.avatarContainer}>
              <Image style={styles.avatar} source= {{uri: 'https://www.acqueon.com/wp-content/uploads/2017/08/avatar-image.png'}} />
            </View>
            <View style={styles.attributeContainer}>
              <Text style={styles.attributeTitle}>Name</Text>
              <TextInput style={this.state.editable? styles.editText : styles.attributeText}
                        editable={this.state.editable}
                        value={this.state.name}
                        onChangeText={this.handleChangeName}/>
            </View>
            <View style={styles.attributeContainer}>
              <Text style={styles.attributeTitle}>Role</Text>
              <TextInput style={this.state.editable? styles.editText : styles.attributeText}
                         editable={this.state.editable}
                         value={this.state.role} />
            </View>
            <View style={styles.attributeContainer}>
              <Text style={styles.attributeTitle}>Bio</Text>
              <TextInput style={this.state.editable? styles.editText : styles.attributeText}
                        editable={this.state.editable}
                        multiline={true}
                        value={this.state.bio}
                        onChangeText={this.handleChangeBio} />
            </View>
            {this._renderCancel()}
            {this._renderModalPopup()}
          </KeyboardAvoidingView>
        </View>
      </View>
    );
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
      showModal: !prev.showModal
    }));
    this.data = {
        name: this.state.name,
        role: this.state.role,
        bio: this.state.bio
    }
  };

  renderHeader() {
    return<View>
      <TouchableOpacity onPress={this.state.selected? this.onPressSave : this.onPressEdit}>
      <Icon
          name={this.state.selected? 'save' : 'pencil'}
          size={25}
          style={{ color: '#fff'}}
      />
      </TouchableOpacity>
    </View>
  }
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
  onPressCancel = () => {
    this.setState(prev => ({
      selected: !prev.selected,
      editable: !prev.editable,
      showCancel: !prev.showCancel,
      name: this.data.name,
      role: this.data.role,
      bio: this.data.bio
    }));
  };

  _renderCancel = () => {
      if (this.state.showCancel) {
          return (
            <TouchableOpacity style={styles.cancelButtonContainer} onPress={this.onPressCancel}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          );
      } else {
          return (<View style={styles.footer}/>);
      }
  }

//              Text Change Events            //
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
