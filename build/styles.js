/* STYLES */
'use strict';
var React = require('react-native');
var { StyleSheet, } = React;

module.exports = StyleSheet.create({

  // ALL STYLES GO HERE

  ground:{
    flex:1,
    backgroundColor: "#F6F7F7",
  },
  container: {
    backgroundColor: '#F6F7F7',
    paddingBottom:50,
  },
  request: {
    flex:1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 10,
    minHeight: 150,
    maxHeight: 150,
    backgroundColor: '#ffffff',
    shadowColor: '#000000',
    shadowOffset:{width:1, height:1},
    shadowOpacity:.2,
    shadowRadius:2,
  },
  DetailScreen: {
    flex:1,
    backgroundColor: '#ffffff'
  },
      requestLeft:{flex:1, maxWidth:45},
        newIcon:{top:25, width:35, height:20, backgroundColor:"#166FDB", borderTopRightRadius:10, borderBottomRightRadius:10, justifyContent: 'center', alignItems: 'center'},
          newIconText:{fontSize:11, color:'#ffffff', backgroundColor:'transparent'},
      requestCenter:{flex:1, marginTop:20, marginBottom:20},
        requestLocation:{flex:1, flexDirection: 'row', alignItems:'flex-end', height:30},
      requestRight:{flex:1, maxWidth:90},
        requestTime:{top:25},

  //TEXT STYLES
  tiny:{fontSize:14, color:'#777777'},
  small:{fontSize:16, color:'#777777'},
  medium:{fontSize:20, color:'#000000'},
  blueText:{fontSize:13, color:'#4388D1'},

  thumbnail: {
    width: 90,
    height: 70,
    borderRadius: 5,
    margin: 5,
  },
  bigblue: {
    color: '#FF0000',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red:{
    backgroundColor:'red',
  }
});
