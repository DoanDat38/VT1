import React  , { Component } from "react";
import {View , Text} from "react-native";

export default class BUOC8 extends Component {

    render(){

        return(
            <View style = {{height : 500, flexDirection : "row", margin : 20 , justifyContent :"space-around" , a}   }>
            <View style = {{width:50 , height:50 ,   backgroundColor:'blue', marginRight : 5}}>
          
          </View>
       
          <View style = {{width:50 , height:50 , backgroundColor : 'black' , marginRight : 5 } }> 


          </View>
        
          <View style ={{ width:50 , height:50 ,  backgroundColor : 'green', marginRight : 5}}> 

          </View>
       </View>
        );
    }
}