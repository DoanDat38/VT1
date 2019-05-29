import React, { Component } from "react";
import { View, TextInput, Text , Keyboard} from "react-native";

export default class BUOC9 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: " ",
      matkhau : "",
      diachi : ""
    };
  }
  render() {
    return (
      <View>
        <TextInput
          style={{
            margin: 20,
            width: 300,
            height: 50,
            borderWidth: 1,
            margin: 20,
            padding: 15
          }}
          onChangeText={text => this.setState({ text })}
          keyboardType="email-address"
          placeholder="email user "
        />
        <Text>{this.state.text}</Text>
        <Text>Lam on nhap mat khau :</Text>
        <TextInput style={{
            margin: 20,
            width: 300,
            height: 50,
            borderWidth: 1,
            margin: 20,
            padding: 15,
            color : 'red',
            fontSize : 20
          }}
          onChangeText={a => this.setState({ matkhau :a })}
          keyboardType = 'default'
          secureTextEntry  = {true}
          >

        </TextInput>
        <Text>{this.state.matkhau}</Text>
        <Text> DIA CHI</Text>
        <TextInput style={{
            margin: 20,
            width: 300,
            height: 200,
            borderWidth: 1,
            margin: 20,
            padding: 15,
            color : 'black',
            fontSize : 20
          }}
          
          
 
         multiline= {true}
         returnKeyType = 'done'
         onSubmitEditing = {Keyboard.dismiss}
         onChangeText = {(diachi)=>
          this.setState(
            {
              diachi
            }
          )
            }
          >

        </TextInput>
        <Text>{this.state.diachi}</Text>
      </View>
    );
  }
}
