# Todo List App with Expo and React Native

## 👁️ Overview

This project is a simple Todo List app built using Expo and React Native. The app allows users to add and remove tasks from a list. This README provides an overview of the project setup and key concepts used in the development of the app.

## ✅ Getting Started

### Prerequisites

To develop and run this project, you need to have Node.js installed on your system. Additionally, you need to install Expo CLI globally.

### Installation

1. **Install Expo CLI globally**:
    ```sh
    npm install -g expo-cli
    ```

2. **Create a new Expo project**:
    ```sh
    npx expo init todoList
    ```
    - Choose the "blank" template when prompted.

3. **Navigate to the project directory**:
    ```sh
    cd todoList
    ```

4. **Start the Expo project**:
    ```sh
    npx expo start
    ```

### Running the App on Android Emulator

To start the Expo Android SDK emulator, use the following command:
```sh
expo run:android
 ```
## 📑 Project Structure
When you create an Expo project using expo init, it sets up a standard project structure with all the necessary folders and files. This includes configuration files, directories for your source code, assets, and more.

## 📑 Key Learnings:
These are the main concepts i've learned through this project:
### Setting Up Dependencies
In a React Native project, we often need to add external libraries to extend the functionality of our app. So we use commands such as :
```sh
npm install <dependency-name>
 ```
Then we use these dependencies as follow(just an example):
```sh
import { Button } from 'react-native-elements';
```
### Passing Props
Props are used to pass data from one component to another. They are read-only and help in making components reusable.
```sh
const Task = (props) => {
  return (
    <View style={styles.item}>
      <Text>{props.text}</Text>
    </View>
  );
};
```
### State Management
State management in functional components is done using hooks. The most commonly used hook for state management is useState.
**useState** is a Hook provided by React that allows you to add state to functional components. state refers to a set of variables that determine the rendering and behavior of a component. 

#### Explanation
- Importing useState:
```sh
import React, { useState } from 'react';
```

- Declaring State Variable:

```sh
 const [task, setTask] = React.useState();
```
 	⚡task is the state variable that holds the current state value.
 	⚡setTask is the function used to update the state variable.
 	⚡useState('') initializes the state variable task to an empty string.

- Using the State Variable:
```sh
<p>You added that {task} </p>
```
This line displays the current value of the count state variable.

- Updating the State:

```sh
<TextInput 
            style={styles.input} 
            placeholder={'Write a task'} 
            value={task}
            onChangeText={text => setTask(text)} 
          />
```
Here we update the task state variable whenever the text in the input field changes.
#### Key Points
- **State Initialization:** The initial state is set by passing a value to useState. In the example above, useState('') initializes task to an empty string.
- **State Updates:** Calling the setter function (setTask in this case) with a new value will update the state and trigger a re-render of the component.
- **Functional Components:** useState is used in functional components to manage state.

## Why Use Expo?
![Capture d'écran 2024-06-12 161229](https://github.com/HafsaTATA/To_do_list-mobile-app-/assets/120058921/d3fcc7e5-11e5-45d8-8877-647631a038fc)
1. The major plus which falls into the favour of using create-react-native-app cli is that it takes away the need to setup separate build chains for iOS and Android on your system. Expo provides an inbuilt build chain which works well for building and testing on both iOS and Android devices.
2. Expo provides a suite of tools and services that can significantly speed up development.
3. Expo simplifies the setup process with tools and configurations already in place. React Native CLI, on the other hand, is more flexible but requires more manual setup and configuration.
