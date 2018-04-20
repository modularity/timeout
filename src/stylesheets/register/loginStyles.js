import {StyleSheet, Dimensions} from 'react-native';
var window = Dimensions.get('window');

module.exports =  StyleSheet.create({
  viewInfoBtn: {
    margin: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  infoBtn: {
    borderWidth:2,
    borderColor:'#338ce0',
    alignItems:'center',
    justifyContent:'center',
    width:40,
    height:40,
    backgroundColor:'#fff',
    borderRadius:40,
  },
  outerContainer: {
    flex: 1,
    //backgroundColor: '#338ce0',
    backgroundColor: '#ecf0f1'
  },
  logo: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  loginContainer: {
    width: window.width*.7,
    height: window.height*.6,
    //justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    width: window.width*.7,
  },
  inputSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: .5,
    borderColor: 'rgba(0,0,0,0.2)',
    height: 40,
    borderRadius: 10,
    margin: 8
  },
  inputImage: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    //resizeMode : 'stretch',
    alignItems: 'center'
  },
  input: {
    width: 200,
    height: 44,
    padding: 8,
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
  confirmBtn: {
    backgroundColor: '#b3d1f2',
    borderRadius: 15,
    padding: 8,
    margin: 8
  },
  resetBtn: {
    margin: 10
  },
  msgText: {
    width: Dimensions.get('window').width,
    fontSize: 14,
    textAlign: 'center',
    alignSelf: 'center',
    padding: 5,
    backgroundColor: '#f1592a',
    color: '#fff'
  },
});
