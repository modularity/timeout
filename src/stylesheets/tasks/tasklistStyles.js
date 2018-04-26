import { Dimensions, StyleSheet } from 'react-native';
var window = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContainer: {
    backgroundColor: '#fff',
    //justifyContent: 'center',
  },
  listHeader: {
    backgroundColor: '#20a3dd',
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
  pageTitle: {
    margin: 12,
    fontSize: 22,
    fontFamily: 'Avenir',
    textAlign: 'center',
    color: 'white',
  },
  itemContainer: { // row: text on left, icon right
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //borderRadius: 2,
    padding: 20,
  },
  itemTextContainer: { // col: text
    //flexDirection: 'column',
    //justifyContent: 'flex-start',
    flexWrap: 'wrap'
  },
  title: {
    fontFamily: 'Avenir',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#20a3dd',
  },
  subTitle: {
    fontFamily: 'Avenir',
    //textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#777',
  },
  icon: { //
    //flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  separator: {
    borderWidth: 0.5,
    borderColor: '#20a3dd',
  },
});
