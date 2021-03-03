import React, { useState, useEffect } from "react";
import {connect, useSelector} from 'react-redux'
import {  Button, StyleSheet, TextInput, View } from "react-native";
import { Login } from "../action/login";


const login = ({Login,navigation}) => {

  const value=useSelector(state=>state.loginReducer.isAuthentication)
 

  useEffect(()=>{
    if(value){
      navigation.navigate("home")
    }
  },[value])

  const [text, setText] = useState({
    email : "",
    password: "",
   
  });

  const {email,password}=text
  


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
          
          onChangeText={(event) => setText({
            ...text,
            email:event
          })}
          placeholder="email"
        />

        <TextInput
          style={styles.input}
          onChangeText={(event) => setText({
            ...text,
            password:event
          })}
          placeholder="password"
        />
        <Button 
        
        onPress={() => {
          Login({email,password})
          console.log(text)
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
