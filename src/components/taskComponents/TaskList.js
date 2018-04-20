import React, { Component } from 'react';
import {ScrollView,FlatList,Text,View,Image,ImageBackground,TouchableOpacity,Modal,Alert,KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../stylesheets/tasks/tasklistStyles';
// import firebase from 'react-native-firebase';
import InfoBtn from '../../utilities/InfoBtn';
import StatusBarBackground from '../../utilities/StatusBarBackground';

type Props = {};
export default class TaskList extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      selected: (new Map(): Map<string, boolean>),
      data: [
        {title:'Activity Task', body:'body0', id: "0"},
        {title:'Questionnaire Task', body:'body1', id: "1"},
        {title:'Feedback Task', body:'body2', id: "2"}
      ],
      emptyData: [],
    }
    //firebase.analytics().setCurrentScreen('Login');
  }

  _keyExtractor = (item) => item.id;

  _onPressItem = (id: string) => {
    // updater functions are preferred for transactional updates
    this.setState((state) => {
      // copy the map rather than modifying state.
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id)); // toggle
      return {selected};
    });
  };

  _renderItem = ({item}) => (
    <MyListItem
      id={item.id}
      onPressItem={this._onPressItem}
      selected={!!this.state.selected.get(item.id)}
      title={item.title}
      body={item.body}
    />
  );

  renderHeader = () => {
    /*
    return (<View style={styles.listHeader}>
              <ImageBackground style={styles.imageHeader}
                source={{uri: 'https://res.cloudinary.com/circledeluz-org/image/upload/v1440038955/bg_lfqlrn.png'}}>
              <Text style={styles.title}>Tasks</Text>
              </ImageBackground>
            </View>);
            */
    return (<View style={styles.listHeader}>
              <Text style={styles.title}>Task List</Text>
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




class MyListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
    //this.props.navigation.navigate('TaskDetails');
  };

  render() {
    var iconName = "square-o";
    var iconColor = "#999";
    if (this.props.selected) {
      iconName = "check-circle";
      iconColor = "#3ecb6d";
    }
    //const iconName = this.props.selected ? "check-circle" : 'circle-o';
    //const iconColor = this.props.selected ? "#3ecb6d" : "#5f97cb";
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View style={styles.itemContainer}>
          <View styles={styles.itemTextContainer}>
            <Text style={styles.text}>
              {this.props.title}
            </Text>
            <Text style={styles.bodyText}>
              {this.props.body}
            </Text>
          </View>
          <Icon name={iconName} color={iconColor} size={30} style={styles.icon}/>
        </View>
      </TouchableOpacity>
    );
  }
}
