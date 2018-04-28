/**
  This page lists all people that the user can and has chatted with in the TimeOut program.
 */
import React, { Component } from 'react';
import {ScrollView,FlatList,Text,View,Image,TextInput,TouchableOpacity,Modal,Alert,KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../stylesheets/messages/messageListStyles';
// import firebase from 'react-native-firebase';
import InfoBtn from '../../utilities/InfoBtn';
import StatusBarBackground from '../../utilities/StatusBarBackground';


type Props = {};
export default class MessageList extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      selected: (new Map(): Map<string, boolean>),
      data: [
        {names:['Mabel Weathersby', 'Chip Weathersby'], message:'Cool!', id: "0",
          image: 'https://i.pinimg.com/originals/d3/69/d9/d369d9056795f553e244da66e8297cca.png'},
        {names:['Phineas Smith', 'Rose Lee-Smith'], message:'I am glad to help', id: "1",
          image: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman2-512.png'},
        {names:['Jun-fan Lee', 'Edward Lao'], message:'Great! ', id: "2",
          image: 'https://cdn4.iconfinder.com/data/icons/icoflat-2/512/avatar-512.png'},
      ],
      emptyData: [],
    }
    //firebase.analytics().setCurrentScreen('Login');
  }

  _keyExtractor = (item) => item.id;

  _onPressItem = (id: string) => {
    var messageThread = this.state.data[id];
    var names = messageThread.names;
    var namesStr = names[0];
/*
    for (let i = 1; i < names.length; i++) {
      namesStr += names[i].name;
    }
*/
    this.props.navigation.navigate('MessageDetail', {
      messageData: messageThread,
      nameList: namesStr
    });
  };

  _renderItem = ({item}) => (
    <MessageItem
      id={item.id}
      onPressItem={this._onPressItem}
      selected={!!this.state.selected.get(item.id)}
      names={item.names}
      image={item.image}
    />
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

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.listContainer}
          data={this.state.data}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          ListHeaderComponent={this.renderHeader}
          ListEmptyComponent={this.renderEmptyList}
          ItemSeparatorComponent={this.renderSeparator}
          ListFooterComponent={this.renderSeparator}
        />
      </View>
    );
  }
}




class MessageItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
    //this.props.navigation.navigate('TaskDetails');
  };

  render() {
    //const iconName = this.props.selected ? "check-circle" : 'circle-o';
    //const iconColor = this.props.selected ? "#3ecb6d" : "#5f97cb";
    var avatar = <Image style={styles.avatar} source= {{uri: this.props.image}} />;
    if (this.props.image === '') avatar = <Icon name={"user-o"} color={"#5f97cb"} size={30} style={styles.icon}/>;
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View style={styles.itemContainer}>
          <Image style={styles.avatar} source= {{uri: this.props.image}} />
          <View styles={styles.itemTextContainer}>
            <Text style={styles.text}>
              {this.props.names[0]}
            </Text>
            <Text style={styles.bodyText}>
              {this.props.names[1]}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
