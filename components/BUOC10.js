import React, { Component } from "react";
import { View, Text ,Button } from "react-native";

export default class BUOC10 extends Component {

    _onPresss = () => {
        alert("DOAN DAT ")
    }


  render() {
    return (
      <View style = {{flex: 1, alignItems: "center", justifyContent: "space-around" }} >

        <Text> tran doan dat</Text>
  

        
      </View>
 
    );
  }
}
