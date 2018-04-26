import { Dimensions, StyleSheet } from 'react-native';
var window = Dimensions.get('window');
var width = window.width;
var btnWidth = window.width*.6;
var avatorWidth = window.width*.4;
//import config from '../config';

//iPhone 7 height: 667, width: 375
module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    margin: 25,
  },
  title: {
    fontFamily: 'Avenir',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#20a3dd',
  },
  subTitle: {
    fontFamily: 'Avenir',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#777',
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
  personText: {
    textAlign: 'center',
    fontFamily: 'Avenir',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#777',
  },
  header: {
    marginTop: 0,
    marginBottom: 5,
    textAlign: 'center',
    fontFamily: 'Avenir',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#777',
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  star: {
    padding: 8,
    //marginLeft: 8
  },
  commentBox: {
    alignSelf: 'center',
    width: window.width*.7,
    height: window.width*.2,
    borderColor: '#777',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 5,
  },
  commentText: {
    margin: 10,
    fontFamily: 'Avenir',
    fontSize: 12,
    color: '#777',
  },
  confirmBtn: {
    alignSelf: 'center',
    backgroundColor: '#00C853',
    borderRadius: btnWidth,
    width: btnWidth,
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
});
