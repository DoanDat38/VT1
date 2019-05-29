import React, { Component } from "react";
import { View, Text } from "react-native";

// class Blink extends Component {
//     constructor(props) {
//       super(props);
//       this.state = { isShowingText: true };
  
//       // Toggle the state every second
//       setInterval(() => (
//         this.setState(previousState => (
//           { isShowingText: !previousState.isShowingText }
//         ))
//       ), 3000);
//     }
  
//     render() {
//       if (!this.state.isShowingText) {
//         return null;
//       }
  
//       return (
//         <Text>{this.props.text}</Text>
//       );
//     }
//   }
  
//   export default class BUOC2 extends Component {
//     render() {
//       return (
//         <View>
//           <Blink text='I love to blink' />
//           <Blink text='Yes blinking is so great' />
//           <Blink text='Why did they ever take this out of HTML' />
//           <Blink text='Look at me look at me look at me' />
//         </View>
//       );
//     }
//   }


export default class BUOC4 extends Component {
     render(){
       return(
        <View>
        {this.state.error &&
  
          <Text>
            Error message: {this.state.error}
          </Text>
        }
      </View>
       );
     }
}