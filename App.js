import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TaskItem from './components/TaskItem';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Daily Tasks Section */}
        <View style={styles.tasksContainer}>
        <Text style={styles.title}>Today's Tasks</Text>
        <View style={styles.taskItems}>
          {/* This is  where our tasks will be listed */}
          
          <TaskItem text={"Task 1"} />
          <TaskItem text={"Task 2"}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAE3',
  },
  tasksContainer:{
    paddingTop:80,
    paddingHorizontal:20,  
  },
  title:{
    fontSize: 24,
    fontWeight:'bold',
  },
  taskItems:{
    marginTop:30,
  },
});

export default  App;