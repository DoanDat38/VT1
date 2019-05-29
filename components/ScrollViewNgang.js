import React, { Component } from "react"; // scroll view doc 

import {
  View,
  Text,
  Button,
  ScrollView,
  Image,
  Dimensions,
  TextInput
} from "react-native";

export default class ScrollViewNgang extends Component{
    render(){
        let screenWidth = Dimensions.get("window").width;
        let screenHeight = Dimensions.get("window").height;
        return(
           <ScrollView horizontal={true} pagingEnabled={true} onMomentumScrollBegin={()=>
           {
               alert('hihi')
           }} onScroll={(event)=>{
            console.log('offsetY:', this.offsetY);
            console.log('touch info:', event.nativeEvent);
        
           }}> 
                    <View style ={{ height :screenHeight , width : screenWidth ,backgroundColor: '#43AA9C', justifyContent:'center', alignItems: 'center'}}>
                            <Text>Man Hinh 1</Text>
                    </View>
                    <View style ={{ height :screenHeight , width : screenWidth ,backgroundColor: '#EA6900', justifyContent:'center', alignItems: 'center'}}>
                            <Text>Man Hinh 2</Text>
                    </View>
                    <View style ={{ height :screenHeight , width : screenWidth ,backgroundColor: '#EA69FC', justifyContent:'center', alignItems: 'center'}}>
                            <Text>Man Hinh 2</Text>
                    </View>
           </ScrollView>
        );
    }
}