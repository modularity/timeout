import {StyleSheet, Dimensions} from 'react-native';
var window = Dimensions.get('window');
var avatorWidth = window.width*.3;
var inputWidth = window.width*.8;
var inputHeight = window.height*.09;
var btnWidth = window.width*.6;

module.exports =  StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  editSaveBtn: {
    justifyContent: 'flex-end',
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
    width: inputWidth,
    height: inputHeight,
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
    fontSize: 16,
    fontFamily: 'Avenir',
    color: '#34495e'
  },
  modalButton: {
    margin: 20,
    borderRadius: 30,
    backgroundColor: '#34495e'
  },
  editText: {
    width: inputWidth,
    height: inputHeight,
    textAlign: 'center',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#20a3dd',
    marginTop: 10,
    padding: 10,
    fontSize: 16,
    fontFamily: 'Avenir',
    color: '#34495e',
    backgroundColor: '#fff'
  },
  cancelButtonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 16,
    fontFamily: 'Avenir',
    color: '#fff',
  },
  cancelButtonContainer: {
    borderRadius: btnWidth/2,
    backgroundColor: '#D50000',
    alignSelf: 'center',
    borderRadius: btnWidth,
    width: btnWidth,
  },
  avatar: {
    borderRadius: avatorWidth/2,
    borderColor: '#20a3dd',
    borderWidth: 5,
    margin: 10,
    width: avatorWidth,
    height: avatorWidth
  },
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
  },
  footerBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  footerText: {
    color: '#20a3dd',
    textAlign: 'center',
    padding: 10,
    fontSize: 12,
    fontFamily: 'Avenir',
  },
  title: {
    fontSize: 22,
    fontFamily: 'Avenir',
    color: 'white',
  },
});
