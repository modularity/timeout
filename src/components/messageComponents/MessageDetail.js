/**
  This page lists the message history with person selected on the MessageList page.
 */
import React, { Component } from 'react';
import {ScrollView,FlatList,Text,View,Image,TextInput,TouchableOpacity,Modal,Alert,KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../stylesheets/messages/messageDetailStyles';
// import firebase from 'react-native-firebase';
import InfoBtn from '../../utilities/InfoBtn';
import StatusBarBackground from '../../utilities/StatusBarBackground';


type Props = {};
export default class MessageDetail extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      typing: '',
      userImage: 'https://www.acqueon.com/wp-content/uploads/2017/08/avatar-image.png',
    }
    //firebase.analytics().setCurrentScreen('Login');
  }
  render() {
    const {params} = this.props.navigation.state;
    const messageData = params ? params.messageData : null;
//{names:['Jun-fan Lee', 'Edward Lao'], message:'Great! ', id: "2"},


    return (
      <View style={styles.container}>
        <StatusBarBackground />
        <ScrollView>
        {this.renderRecieverMsg()}
        {this.renderSenderMsg(messageData)}
        {this.renderRecieverMsg(messageData)}
        </ScrollView>
        <View style={styles.footer}>
          <TextInput
            value={this.state.typing}
            onChangeText={text => this.setState({typing: text})}
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Type something nice"
          />
          <TouchableOpacity onPress={() => this.pressSend()}>
            <Icon name={"paper-plane"} color={"#00C853"} size={30} style={styles.sendIcon}/>
          </TouchableOpacity>
        </View>
      </View>
    );
    // telegram
    // share-square
    // paper-plane
    // round icon with arrow-up
    /*
    <FlatList
      style={styles.listContainer}
      data={messageData}
      extraData={params}
      keyExtractor={this._keyExtractor}
      renderItem={this._renderItem}
      ListHeaderComponent={this.renderHeader}
      ListEmptyComponent={this.renderEmptyList}
      ItemSeparatorComponent={this.renderSeparator}
      ListFooterComponent={this.renderSeparator}
    />
    */
  }

  _keyExtractor = (item) => item.id;

  _onPressItem = (id: string) => {
    // updater functions are preferred for transactional updates
    //this.props.navigation.navigate('MessageDetail');
    this.props.navigation.goBack();
  };

  _renderItem = ({item}) => (
    <View style={styles.listHeader}>
      <Text style={styles.title}>Messages</Text>
      {this.renderRecieverMsg()}
      {this.renderSenderMsg()}
      {this.renderRecieverMsg()}
    </View>
  );

  renderHeader = () => {
    return (<View style={styles.listHeader}>
              <Text style={styles.title}>Messages</Text>
            </View>);
  }

  renderEmptyList = () => {
    return <View><Text style={styles.text}>Nothing to do right now</Text></View>
  }

  renderSeparator = () => {
    return <View style={styles.separator} />
  }

  pressSend() {
      console.warn('send button pressed', this.state.typing);
  }

  renderMsgChain() {
    var messageHistory="";
    /*
    messageHistory.map((x,i) => {
      //
    });
    */
  }

  renderSenderMsg(msgData) {
    return (
      <View style={styles.messageSection}>
        <View style ={styles.avatarContainer}>
          <Image style={styles.avatar} source= {{uri: msgData.image}} />
        </View>
        <View style={styles.senderContainer}>
          <Text style={styles.senderText}>
          You want your tree to have some character.
          Make it special.
          I started painting as a hobby when I was little.
          </Text>
        </View>
      </View>
    );
  }

  renderRecieverMsg(msgData) {
    return (
      <View style={styles.messageSection}>
        <View style={styles.recieverContainer}>
          <Text style={styles.recieverText}>
          You want your tree to have some character.
          Make it special.
          I started painting as a hobby when I was little.
          </Text>
        </View>
        <View style ={styles.avatarContainer}>
          <Image style={styles.avatar} source= {{uri: this.state.userImage}} />
        </View>
      </View>
    );
  }
}
