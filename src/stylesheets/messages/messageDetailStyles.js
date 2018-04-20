import { Dimensions, StyleSheet } from 'react-native';
var window = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: '#E0F7FA'
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
    padding: 10,
    fontSize: 40,
    fontFamily: 'Avenir',
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#00C853'
  },
  text: {
    marginTop: 24,
    fontSize: 20,
    fontFamily: 'Avenir',
    color: '#34495e',
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#eee',
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 18,
    flex: 1,
  },
});
