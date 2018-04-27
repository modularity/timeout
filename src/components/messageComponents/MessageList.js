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
        {name:'Mabel Weathersby', message:'Cool!', id: "0"},
        {name:'Phineas Smith', message:'I am glad to help', id: "1"},
        {name:'Jun-fan Lee', message:'Great! ', id: "2"},
      ],
      emptyData: [],
    }
    //firebase.analytics().setCurrentScreen('Login');
  }

  _keyExtractor = (item) => item.id;

  _onPressItem = (id: string) => {
    // updater functions are preferred for transactional updates
    this.props.navigation.navigate('MessageDetail');
  };

  _renderItem = ({item}) => (
    <MessageItem
      id={item.id}
      onPressItem={this._onPressItem}
      selected={!!this.state.selected.get(item.id)}
      name={item.name}
      message={item.message}
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
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View style={styles.itemContainer}>
          <Icon name={"user-o"} color={"#5f97cb"} size={30} style={styles.icon}/>
          <View styles={styles.itemTextContainer}>
            <Text style={styles.text}>
              {this.props.name}
            </Text>
            <Text style={styles.bodyText}>
              {this.props.message}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
