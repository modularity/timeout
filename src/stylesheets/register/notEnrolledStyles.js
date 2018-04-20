import { Dimensions, StyleSheet } from 'react-native';
var window = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    //paddingTop: 25,
    //backgroundColor: '#E0F7FA'
  },
  logo: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 10,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Avenir',
    color: '#34495e',
    fontWeight: 'bold',
    marginTop: 10,
  },
  text: {
    marginTop: 24,
    fontSize: 14,
    fontFamily: 'Avenir',
    color: '#34495e',
    margin: 10,
  },
});
