/**
  This page lists all the tasks assigned to the user.
  They can include: survey links, session feedback, general tasks.
  Each item in the list: not attempted, started, completed by self, completed by admin
 */
import React, { Component } from 'react';
import {ScrollView,FlatList,Text,View,Image,TouchableOpacity,Modal,Alert,KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../stylesheets/tasks/taskListStyles';
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
        {title:'Activity Task', subTitle:'Subtitle content for the Activity Task', type: 'Task', id: "0", person: 'John Smith',
            body: 'This is probably the greatest thing that has ever happened in my life. The man who does the best job is the one who is happy at his job. That is a son of a gun of a cloud. Just let this happen. We just let this flow right out of our minds. Just make little strokes like that.'},
        {title:'Questionnaire Task', subTitle:'Subtitle content for the Questionnaire Task', type: 'Survey', id: "1",
            body: 'There is no rule. You just practice and find out which way works best for you. A thin paint will stick to a thick paint. Do not kill all your dark areas - you need them to show the light. Maybe there is a happy little waterfall happening over here.'},
        {title:'Feedback Task', subTitle:'Subtitle content for the Feedback Task', type: 'Feedback', id: "2", person: 'John Smith',
            body: 'This is the time to get out all your flustrations, much better than kicking the dog around the house or taking it out on your spouse. Follow the lay of the land. It is most important. I am gonna start with a little Alizarin crimson and a touch of Prussian blue Happy painting, God bless. That is what painting is all about. It should make you feel good when you paint. We do not want to set these clouds on fire.'},
        {title:'Activity Task2', subTitle:'Subtitle content for the Activity Task', type: 'Task', id: "3", person: 'John Smith',
            body: 'These trees are so much fun. I get started on them and I have a hard time stopping. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. Maybe we got a few little happy bushes here, just covered with snow. The very fact that you are aware of suffering is enough reason to be overjoyed that you are alive and can experience it. Those great big fluffy clouds. Making all those little fluffies that live in the clouds.'},
        {title:'Activity Task2', subTitle:'Subtitle content for the Activity Task', type: 'Task', id: "4", person: 'John Smith',
            body: 'This is your world, whatever makes you happy you can put in it. Go crazy. Lets go up in here, and start having some fun This painting comes right out of your heart.'},
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
      subTitle={item.subTitle}
      body={item.body}
      propRef={this.props}
      taskType={item.type}
      person={item.person}
    />
  );

  renderHeader = () => {
    return (<View style={styles.listHeader}>
              <Text style={styles.pageTitle}>Task List</Text>
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
    // routes based on task, survey or feedback type
    var taskType = this.props.taskType;
    var routeConfig = {"Task": "TaskDetails", "Survey": "TaskSurvey", "Feedback": "TaskFeedback"};
    var route = routeConfig[taskType];
    this.props.propRef.navigation.navigate(route, {
      title: this.props.title,
      subTitle: this.props.subTitle,
      body: this.props.body,
      person: this.props.person
    });
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
            <Text style={styles.title}>
              {this.props.title}
            </Text>
            <Text style={styles.subTitle}>
              {this.props.subTitle}
            </Text>
          </View>
          <Icon name={iconName} color={iconColor} size={30} style={styles.icon}/>
        </View>
      </TouchableOpacity>
    );
  }
}
