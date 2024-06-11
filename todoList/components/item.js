import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Task = (props) => {

    return (
    <View style={styles.item}>
        <View style={styles.itemContent}>
        <View style={styles.check}></View>
        <Text>{props.text}</Text>
        </View>
        <Icon name="trash" size={20} color="#55BCF6" />
    </View>
    
    )}
    
const styles = StyleSheet.create({
item:{
    backgroundColor:'#fff',
    padding:15,
    borderRadius:10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:10,
    marginTop:10,

},
itemContent:{
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap:'wrap'
},
check:{
    width:12,
    height: 12,
    borderColor:'#55BCF6',
    borderWidth:2,
    borderRadius:5,
    marginRight: 15,

},
circle:{
    width:12,
    height:12,
    borderColor:'#55BCF6',
    borderWidth:2,
    borderRadius:5,
},
text:{
    maxWidth: '80%',
}
});
export default Task; //to allow the use of Task component outside file