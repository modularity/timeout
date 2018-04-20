import { Dimensions, StyleSheet } from 'react-native';
var window = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: 25,
    //backgroundColor: '#E0F7FA'
  },
  scroll: {
    margin: 10,
  },
  title: {
    fontSize: 14,
    fontFamily: 'Avenir',
    color: '#34495e',
    marginTop: 10,
    fontWeight: 'bold',
  },
  text: {
    marginTop: 24,
    fontSize: 14,
    fontFamily: 'Avenir',
    color: '#34495e',
  },
  buttons: {
    justifyContent: 'center',
    alignSelf: 'center',
    //margin: 5,
  },
  btnText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Avenir',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  notConfirmBtn: {
    justifyContent: 'center',
    backgroundColor: '#ccc',
    width: window.width*.6,
    height: 30,
    borderRadius: 15,
    margin: 5,
  },
  confirmBtn: {
    justifyContent: 'center',
    backgroundColor: '#00c853',
    width: window.width*.6,
    height: 30,
    borderRadius: 15,
    margin: 5,
  },
  modalMsgContainer: {
   flex: .6,
   justifyContent:'center',
   alignItems: 'center',
   alignSelf: 'center',
 },
 modalClose: {
   width: Dimensions.get('window').width*.8,
   backgroundColor: '#f1592a',
   padding: 5,
 },
 modalHeader: {
   flex: .6,
   width: Dimensions.get('window').width*.8,
   backgroundColor: '#f1592a',
   justifyContent: 'center',
   alignItems: 'center',
 },
 infoRadius: {
   borderWidth:2,
   borderColor:'#ecf0f1',
   alignItems:'center',
   justifyContent:'center',
   width:100,
   height:100,
   backgroundColor:'#fff',
   borderRadius:100,
 },
 modalTxtContainer: {
   width: Dimensions.get('window').width*.8,
   backgroundColor: '#ecf0f1',
   flex: .3,
   justifyContent: 'center',
   alignItems: 'center',
 },
  h1Text: {
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Avenir',
    textAlign: 'center',
    alignSelf: 'center',
    margin: 3,
    color: '#34495e',
    backgroundColor: 'transparent',
  },
});
