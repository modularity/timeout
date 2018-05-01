import {StyleSheet, Dimensions} from 'react-native';
var window = Dimensions.get('window');
var avatorWidth = window.width*.3;
var inputWidth = window.width*.8;
var inputHeight = window.height*.09;
var btnWidth = window.width*.6;

module.exports =  StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editSaveBtn: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    margin: 5
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  cancelButtonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 16,
    fontFamily: 'Avenir',
    color: '#fff',
  },
  cancelButtonContainer: {
    borderRadius: btnWidth/4,
    backgroundColor: '#ccc',
    alignSelf: 'center',
    width: btnWidth/2,
  },
  confirmBtn: {
    alignSelf: 'center',
    backgroundColor: '#00C853',
    borderRadius: btnWidth/4,
    width: btnWidth/2,
    padding: 8,
    margin: 8
  },
  confirmBtnText: {
    fontSize: 20,
    fontFamily: 'Avenir',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
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
  modalMsgContainer: {
    backgroundColor: '#fff',
    marginTop: 25,
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    alignSelf: 'center',
 },
 modalClose: {
    width: inputWidth,
    backgroundColor: '#20a3dd',
    padding: 5,
 },
 eulaContainer: {
   width: inputWidth,
 },
 eulaText: {
   marginTop: 24,
   fontSize: 14,
   fontFamily: 'Avenir',
   color: '#34495e',
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
