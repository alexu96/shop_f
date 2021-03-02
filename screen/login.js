import React, { useState, useEffect } from "react";
import {connect, useSelector} from 'react-redux'
import {  Button, StyleSheet, TextInput, View } from "react-native";
import { Login } from "../action/login";


const login = ({Login}) => {

  const [text, setText] = useState({
    email : "",
    password: "",
    access : false
  });
  


  
  

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#fff",
          margin: 100,
          padding: 10,
        }}
      >
        <TextInput
          style={styles.input}
          
          onChangeText={(text) => setText({
            ...text,
            email : text
          })}
          placeholder="email"
        />

        <TextInput
          style={styles.input}
          onChangeText={(text) => setText({
            ...text,
            password : text
          })}
          placeholder="password"
        />
        <Button 
        
        onPress={() => {
          const {email, password} = text 
          Login({email,password})
        }} 
        
        
        title="SignIn" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 350,
    height: 44,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default connect(null,{Login})(login);
