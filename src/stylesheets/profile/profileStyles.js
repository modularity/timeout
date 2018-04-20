import {StyleSheet, Dimensions} from 'react-native';
var window = Dimensions.get('window');

module.exports =  StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: window.width,
    height: window.height,
    backgroundColor: '#ecf0f1',
  },
  attributeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  attributeTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    color: '#34495e',
  },
  attributeText: {
    width: window.width*.8,
    textAlign: 'center',
    borderRadius: 30,
    marginTop: 10,
    padding: 16,
    fontSize: 18,
    fontFamily: 'Avenir',
    color: '#34495e',
    backgroundColor: '#fff'
  },
  modalText: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Avenir',
    color: '#34495e'
  },
  modalTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
    fontFamily: 'Avenir',
    color: '#34495e'
  },
  modalButton: {
    margin: 20,
    borderRadius: 30,
    backgroundColor: '#34495e'
  },
  editText: {
    width: 300,
    textAlign: 'center',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#5f97cb',
    marginTop: 10,
    padding: 16,
    fontSize: 18,
    fontFamily: 'Avenir',
    color: '#34495e',
    backgroundColor: '#fff'
  },
  cancelButtonText: {
    textAlign: 'center',
    padding: 16,
    fontSize: 20,
    fontFamily: 'Avenir',
    color: '#fff',
  },
  cancelButtonContainer: {
    margin: 20,
    borderRadius: 30,
    backgroundColor: '#D50000',
  },
  avatar: {
    borderRadius: 100,
    borderColor: '#5f97cb',
    borderWidth: 5,
    margin: 10,
    width: 200,
    height: 200
  },
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    height: 100
  },
  title: {
    fontSize: 22,
    fontFamily: 'Avenir',
    color: 'white',
  },
});
