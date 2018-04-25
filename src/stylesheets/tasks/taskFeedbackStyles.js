import { Dimensions, StyleSheet } from 'react-native';
var window = Dimensions.get('window');
var btnWidth = window.width*.6;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    margin: 25,
  },
  listHeader: {
    backgroundColor: '#00BCD4',
  },
  imageHeader:{
    flexGrow:1,
    height:window.height*.2,
    width:null,
    alignItems: 'center',
    justifyContent:'center'
  },
  divider:{
    borderWidth: 0.5,
    borderColor: '#009688'
  },
  listContent: {
    flex: 1,
    flexDirection: 'row',
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
    color: '#34495e',
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
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  star: {
    padding: 8,
    margin: 8
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
