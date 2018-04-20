import { Dimensions, StyleSheet } from 'react-native';
var window = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  listContainer: {
    //justifyContent: 'center',
  },
  listHeader: {
    backgroundColor: '#5f97cb',
    //height: window.height*.2,
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  imageHeader: {
    flexGrow:1,
    height:window.height*.2,
    width:null,
    alignItems: 'center',
    justifyContent:'center',
  },
  title: {
    margin: 10,
    fontSize: 22,
    fontFamily: 'Avenir',
    textAlign: 'center',
    color: 'white',
  },
  itemContainer: { // row: text on left, icon right
    flexDirection: 'row',
    justifyContent: 'flex-start',
    //alignItems: 'center',
    //borderRadius: 2,
    padding: 20,
  },
  itemTextContainer: { // col: text
    //flexDirection: 'column',
    //justifyContent: 'flex-start',
    flexWrap: 'wrap'
  },
  text: {
    fontFamily: 'Avenir',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#5f97cb',
  },
  bodyText: {
    fontFamily: 'Avenir',
    textAlign: 'center',
    fontSize: 12,
    color: '#999',
  },
  icon: { //
    //flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 10,
  },
  separator: {
    borderWidth: 0.5,
    borderColor: '#5f97cb',
  },
});
