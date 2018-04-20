import React, { Component } from 'react';
import {ScrollView,Text,View,TouchableOpacity,Modal,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../stylesheets/register/consentStyles';
// import firebase from 'react-native-firebase';
import InfoBtn from '../../utilities/InfoBtn';
import StatusBarBackground from '../../utilities/StatusBarBackground';

type Props = {};
export default class Consent extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      showMsgModal: false,
    }
    //firebase.analytics().setCurrentScreen('Login');
  }

  render() {

    return (
      <View style={styles.container}>
        <StatusBarBackground />
        <ScrollView style={styles.scroll}>
          <Text style={styles.title}>
            Please review the information below.
          </Text>
          <Text style={styles.text}>
            Just relax and let it flow. That easy. You can get away with a lot. As trees get older they lose their chlorophyll. I like to beat the brush. Sometimes you learn more from your mistakes than you do from your masterpieces. That is a son of a gun of a cloud. ~\n In your world you have total and absolute power. Nothing wrong with washing your brush. I think there is an artist hidden in the bottom of every single one of us. Just let this happen. We just let this flow right out of our minds. A little happy sunlight shining through there. Is that not fantastic that you can create an almighty tree that fast? In life you need colors. Volunteering your time, it pays you and your whole community fantastic dividends. You have to make almighty decisions when you're the creator. We spend so much of our life looking - but never seeing. Maybe there was an old trapper that lived out here and maybe one day he went to check his beaver traps, and maybe he fell into the river and drowned. Trees cover up a multitude of sins. If you do not like it - change it. It is your world. Let that brush dance around there and play. The first step to doing anything is to believe you can do it. See it finished in your mind before you ever start. Use what happens naturally, do not fight it. Water's like me. It's laaazy ... Boy, it always looks for the easiest way to do things I want everybody to be happy. That's what it's all about. The shadows are just like the highlights, but we're going in the opposite direction. Get away from those little Christmas tree things we used to make in school. Let's put some happy trees and bushes back in here. Work that paint. These things happen automatically. All you have to do is just let them happen.
          </Text>
        </ScrollView>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.notConfirmBtn}
                onPress={() => this.notConfirmPressed()} >
            <Text style={styles.btnText}>I do not accept</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.confirmBtn}
                onPress={() => this.confirmPressed()} >
            <Text style={styles.btnText}>I accept the Terms & Conditions</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  notConfirmPressed() {
    Alert.alert("Info", "You must first agree to the Terms & Conditions before continuing with the application.");
    //{this.renderMessage()}
    //this.setState({showMsgModal: true});
  }
  confirmPressed() {
    this.props.navigation.navigate('TabNav');
    //this.props.navigation.navigate('NotEnrolled');
  }

  // display message when selecting to not confirm
  renderMessage() {
    var message = "You must first agree to the Terms & Condition before continuing with the application.";
    return (<Modal transparent={false} visible={this.state.showMsgModal} animationType={'fade'}
           onRequestClose={() => this.setState({showMsgModal: false}) }>
      <View style={styles.modalMsgContainer}>
        <View style={styles.modalClose}>
          <TouchableOpacity onPress={() => this.setState({showMsgModal: false}) }>
            <Icon name="times" size={25} color="#ecf0f1"/>
          </TouchableOpacity>
        </View>
        <View style={styles.modalHeader}>
          <View style={styles.infoRadius}>
            <Icon name="info" size={60} color="#f1592a"/>
          </View>
        </View>
        <View style={styles.modalTxtContainer}>
          <Text style={styles.h1Text}>{message}</Text>
        </View>
      </View>
    </Modal>);
  }
}
