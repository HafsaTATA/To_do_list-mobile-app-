import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, KeyboardAvoidingView, TextInput, TouchableOpacity, Platform, Keyboard } from 'react-native';
import Task from './components/item'; // Ensure the import path is correct

export default function App() {
  const [task, setTask] = React.useState();
  const [taskList,setTaskList]=React.useState([]);
  const handleAddTask = () => {
    Keyboard.dismiss();//to make the keyborad go back down again
      setTaskList([...taskList, task]);
      setTask(null); 
  }


  const completeTask=(index)=>{
    let listCopy=[...taskList];
    listCopy.splice(index,1); //to remove one item from teh array 
    setTaskList(listCopy);
  }
  return (

    <ImageBackground
      source={require('./images/bg.jpg')}  // Correct path for local image
      style={styles.background}
    >
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1
          }}
          keyboardShouldPersistTaps='handled'
        >
          <View style={styles.tasksView}>
            <Text style={styles.title}>Today's to do list</Text>
            <View style={styles.itemsView}>
              {
                taskList.map((item, index) => {
                  return (
                    <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                      <Task text={item} /> 
                    </TouchableOpacity>
                  )
                })
              }
            </View>
          </View>
        </ScrollView>
        <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
          <TextInput 
            style={styles.input} 
            placeholder={'Write a task'} 
            value={task}
            onChangeText={text => setTask(text)} 
          />
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
  },
  tasksView: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color:'#10363d'
  },
  itemsView: {
    marginTop: 20,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 350,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

