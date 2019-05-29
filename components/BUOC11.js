import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  Image,
  Dimensions,
  TextInput
} from "react-native";

export default class BUOC11 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  
  render() {
    let screenWidth = Dimensions.get("window").width;
    return (
      <ScrollView keyboardDismissMode='on-drag' maximumZoomScale={3} minimumZoomScale={0.5}>
        <Image
          source={require("../image/doandat1.jpg")}
          style={{
            width: screenWidth,
            height: (screenWidth * 232) / 179,
            marginTop: 20
          }}
        />
        <Text
          style={{
            textAlign: "center",
            backgroundColor: "green",
            fontSize: 20,
            padding: 20,
            color: "white"
          }}
        >
          {" "}
          TRAN DOAN DAT
        </Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => this.setState({ text })}
        />
        <Text>{this.state.text}</Text>
        <Image
          source={require("../image/1.jpg")}
          style={{ width: screenWidth, height: screenWidth / 3.33 , marginBottom : 20}}
        />
        <Image
          source={require("../image/1.jpg")}
          style={{ width: screenWidth, height: screenWidth / 3.33 , marginBottom : 20}}
        />
        <Image
          source={require("../image/1.jpg")}
          style={{ width: screenWidth, height: screenWidth / 3.33 , marginBottom : 20}}
        />
        
      </ScrollView>
    );
  }
}
