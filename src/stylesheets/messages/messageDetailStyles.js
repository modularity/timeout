import { Dimensions, StyleSheet } from 'react-native';
var window = Dimensions.get('window');
var bubbleWidth = window.width*.8;
var avatorWidth = window.width*.1;
module.exports = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: '#fff'
  },
  listHeader: {
    backgroundColor: '#00BCD4',
  },
  title: {
    padding: 10,
    fontSize: 40,
    fontFamily: 'Avenir',
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#00C853'
  },
  messageSection: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  senderContainer: {
    backgroundColor: '#20a3dd',
    width: bubbleWidth,
    borderRadius: 10,
    margin: 10,
    alignSelf: 'flex-end'
  },
  senderText: {
    padding: 12,
    fontSize: 14,
    fontFamily: 'Avenir',
    color: '#fff',
  },
  avatar: {
    borderRadius: avatorWidth/2,
    borderColor: '#20a3dd',
    borderWidth: 1,
    margin: 10,
    width: avatorWidth,
    height: avatorWidth
  },
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  userContainer: {
    backgroundColor: '#eee',
    width: bubbleWidth,
    borderRadius: 10,
    margin: 10,
    alignSelf: 'flex-start'
  },
  userText: {
    padding: 12,
    fontSize: 14,
    fontFamily: 'Avenir',
    color: '#555',
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    width: window.width*.92,
    height: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    margin: 10,
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
    fontSize: 14,
    fontFamily: 'Avenir',
    color: '#555',
  },
  sendIcon: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    //paddingRight: 10,
  },
});
