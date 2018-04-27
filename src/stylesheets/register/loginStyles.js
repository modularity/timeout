import {StyleSheet, Dimensions} from 'react-native';
var window = Dimensions.get('window');
var btnWidth = window.width*.6;
var btnHeight = window.width*.12;

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
    backgroundColor: '#20a3dd',
  },
  logo: {
    width: window.width*.6,
    height: window.height*.17,
    resizeMode: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: btnHeight,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#20a3dd',
  },
  loginContainer: {
    width: window.width*.7,
    height: window.height*.6,
    //justifyContent: 'center',
    alignItems: 'center'
  },
  inputSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: .5,
    borderColor: 'rgba(0,0,0,0.2)',
    height: 40,
    borderRadius: 5,
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
    width: window.width*.5,
    height: btnHeight,
    padding: 8,
  },
  buttonContainer: {
    margin: 10
  },
  pageText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    textAlign: 'center',
    color: '#fff',
  },
  confirmBtn: {
    backgroundColor: '#3284be',
    width: btnWidth,
    height: btnHeight,
    borderRadius: 20,
    padding: 8,
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
  modalMsgContainer: {
   marginTop: 20,
   flex: .6,
   justifyContent:'center',
   alignItems: 'center',
   alignSelf: 'center',
 },
 modalClose: {
   width: window.width*.8,
   backgroundColor: '#fdba33',
   padding: 5,
 },
 modalHeader: {
   flex: .6,
   width: window.width*.8,
   backgroundColor: '#fdba33',
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
   width: window.width*.8,
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
    color: '#777',
    backgroundColor: 'transparent',
  },
});
