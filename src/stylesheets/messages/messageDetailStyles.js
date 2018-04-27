import { Dimensions, StyleSheet } from 'react-native';
var window = Dimensions.get('window');
var bubbleWidth = window.width*.85;
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
  recieverContainer: {
    backgroundColor: '#ddd',
    width: bubbleWidth,
    borderRadius: 10,
    margin: 10,
    alignSelf: 'flex-start'
  },
  recieverText: {
    padding: 12,
    fontSize: 14,
    fontFamily: 'Avenir',
    color: '#555',
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
    fontFamily: 'Avenir',
    color: '#555',
    fontSize: 18,
  },
  sendIcon: {
    margin: 5,
  },
});
