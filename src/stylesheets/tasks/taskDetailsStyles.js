import { Dimensions, StyleSheet } from 'react-native';
var window = Dimensions.get('window');
var btnWidth = window.width*.6;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    margin: 25,
    backgroundColor: '#fff',
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
  personText: {
    textAlign: 'center',
    fontFamily: 'Avenir',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#777',
  },
  body: {
    marginTop: 15,
    marginBottom: 15,
    fontSize: 14,
    fontFamily: 'Avenir',
    color: '#777',
  },
  avatar: {
    borderRadius: 100,
    borderColor: '#20a3dd',
    borderWidth: 5,
    margin: 10,
    width: 200,
    height: 200
  },
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
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
  }
});
