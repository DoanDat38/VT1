import React , { Component } from  "react";
import   { View , Text} from "react-native";

export default class Flex extends Component{

    render(){
        return(
         <View style = {{flex : 1}}>
              <View style = {{backgroundColor:'blue', flex : 20}}>
            
            </View>
         
            <View style = {{flex : 60 , backgroundColor : 'black'} }> 


            </View>
            <View style ={{ flex : 20 ,backgroundColor : 'green',}}> 

            </View>
         </View>
        );
    }
  }