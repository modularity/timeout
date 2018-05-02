import { Dimensions, StyleSheet } from 'react-native';
var window = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  statusBar: {
    height: 50,
    backgroundColor: '#60a0e5'
    //backgroundColor: '#3b5998'
  },
  listBtn: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 8,
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
   textDarkBlue: {
     color: '#34495e'
   },
   eventTitle: {
     //color: 'white',
     textAlign: 'center',
     fontWeight: "500",
     fontSize: 18,
     padding: 3,
   },
   eventDetail: {
     //color: 'white',
     fontSize: 16,
     padding: 3,
   },
   eventDate: {
     //color: 'white',
     fontWeight: "500",
     fontSize: 10,
     padding: 3,
   },
   seperator: {
     borderWidth: 1,
     //borderColor: 'white'
     borderColor: '#34495e',
     //borderColor: '#3b5998',
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
   seperator: {
     borderWidth: 1,
     borderColor: '#ccc',
     margin: 10,
   },
   legendContainer: {
     justifyContent: 'space-between',
     alignItems: 'stretch'
   },
   legendItem: {
     flexDirection: 'row',
     justifyContent: 'flex-start',
     margin: 8,
   }
});
