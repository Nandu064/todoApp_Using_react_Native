import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import TaskItem from './components/TaskItem';

const App = () => {

  const [todo,setTodo] = useState();
  const [todoList,setTodoList]= useState([]);

  const handleAddTodo = ()=>{
    Keyboard.dismiss();
    setTodoList([...todoList, todo]);
    setTodo(null);
  }
  const deleteTodo = (index)=>{
    let todoListCopy = [...todoList];
    todoListCopy.splice(index,1);
    setTodoList(todoListCopy);
  }
  return (
    <View style={styles.container}>
      {/* Daily Tasks Section */}
        <View style={styles.tasksContainer}>
        <Text style={styles.title}>Daily Tasks</Text>
        <ScrollView style={styles.taskItems}>
          {/* This is  where our tasks will be listed */}
          {
            todoList.map((item,index)=>{
              return <TaskItem key={index} text={item} deleteItem={()=>deleteTodo(index)}  />              
            })
          }
          {/* <TaskItem text={"Task 1"} />
          <TaskItem text={"Task 2"}/> */}
        </ScrollView>
      </View>
      {/* Add a todo view */}
      <KeyboardAvoidingView
        behavior = {Platform.OS === "ios" ? "padding":"height" }
        style={styles.addTodoContainer}
      >
        <TextInput style={styles.todoInput} placeholder={'Add a Todo'}
        value={todo}
        onChangeText={(todo)=>{setTodo(todo)}}/>
        <TouchableOpacity onPress={()=>{handleAddTodo()}}>
          <View style={styles.addContainer}>
            <Text style={styles.addButton}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
  addTodoContainer:{
    position:'absolute',
    bottom :40,
    width:"100%",
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',

  },
  todoInput:{
    paddingVertical:15,
    width:250,
    paddingHorizontal:15,
    backgroundColor:'white',
    borderRadius:60,
    borderColor:'grey',
    borderWidth:1,
  },
  addButton:{
    fontSize:35,
  },
  addContainer:{height:60,
    backgroundColor:'#fff',
    width:60,
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'grey',
    borderWidth:1.5,
  },
});

export default  App;