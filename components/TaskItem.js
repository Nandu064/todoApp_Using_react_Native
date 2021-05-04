import React from 'react'
import { Text, View , StyleSheet, TouchableOpacity } from 'react-native'
const TaskItem = (props) => {
    const { text } = props;
    return (
        <View style = {styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square} ></View>
                <Text style={styles.itemText}>{ text }</Text>
            </View>
            <View style={styles.circle}>
                <Text style={styles.deleteIcon}>X</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    item:{
        backgroundColor:'#fff',
        padding: 15,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20,

    },
    itemLeft:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap',

    },
    square:{
        width:24,
        height:24,
        backgroundColor:'#55bcf6',
        opacity:0.4,
        borderRadius:7,
        marginRight:15,
    },
    itemText:{
        maxWidth:'75%',
        fontSize:18,
    },
    deleteIcon:{
        fontSize: 20,
        alignItems:'center',
        justifyContent:'center',
        margin:0,
    },
    circle:{
        width:25,
        height:25,
        backgroundColor:'red',
        alignItems:'center',
    },
    // circle:{
    //     width:15,
    //     height:15,
    //     borderColor:'#55BCF6',
    //     borderWidth:3,
    //     borderRadius:7,

    // },

});

export default TaskItem;