import { Dimensions, StyleSheet } from 'react-native';
var window = Dimensions.get('window');
var btnWidth = window.width*.3;
module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  statusBar: {
    height: 50,
    backgroundColor: '#60a0e5'
    //backgroundColor: '#3b5998'
  },
  itemContainer: {
    //justifyContent: 'center'
  },
   element: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     //backgroundColor: '#60a0e5',
     backgroundColor: 'white',
     padding: 20,
   },
   rowContainer: {
     flexDirection: 'row',
     justifyContent: 'space-around',
     alignItems: 'center'
   },
   eventContainer: {
     marginLeft: 10,
     justifyContent: 'center',
     alignItems: 'center',
   },
   elementLeft: {
     flexDirection: 'row',
     justifyContent: 'flex-start'
   },
   elementRight: {
     flexDirection: 'row',
     justifyContent: 'flex-end'
   },
   eventDate: {
     textAlign: 'center',
     color: '#20a3dd',
     fontWeight: 'bold',
     fontSize: 20,
     padding: 8,
   },
   eventDescription: {
     textAlign: 'left',
     fontFamily: 'Avenir',
     fontWeight: 'bold',
     fontSize: 12,
     color: '#777',
   },
   eventDetail: {
     //color: 'white',
     fontSize: 16,
     padding: 3,
   },
   seperator: {
     borderWidth: 1,
     borderColor: '#ccc',
   },
   btnRow: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignSelf: 'center'
   },
   editBtn: {
     alignSelf: 'center',
     backgroundColor: '#ccc',
     borderRadius: btnWidth,
     width: btnWidth,
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
   },
   declineBtn: {
     alignSelf: 'center',
     backgroundColor: '#fdba33',
     borderRadius: btnWidth,
     width: btnWidth,
     padding: 8,
     margin: 8
   },
   noEventsContainer: {
     flex: 1,
     justifyContent: 'center',
     alignSelf: 'center'
   },
   noEventsText: {
     fontSize: 20,
     fontWeight: '400',
     fontFamily: 'Avenir',
     textAlign: 'center',
     alignSelf: 'center',
     margin: 3,
     padding: 10,
     marginBottom: 30,
     color: '#34495e',
     backgroundColor: 'transparent',
   },
});
