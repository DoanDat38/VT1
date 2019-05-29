import React ,{ Component } from "react";
import {View,Text, Image} from "react-native";


class  Blink  extends Component{

    constructor(props){

        super(props);
        this.state = {isShowingText: true

        }
        setInterval(() => (
            this.setState(previousState => (
              { isShowingText: !previousState.isShowingText }
            ))
          ), 200);
        }
        render() {
            if (!this.state.isShowingText) {
              return null;
            }
        
            return (
             
        <Image
        style={{width: 66, height: 58, marginLeft : 20, marginTop : 10}}
        source = {{uri : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
        
      />
            );
          }
    }

export default class BUOC1  extends Component{

  render(){
      return(
        <View><Blink></Blink></View>
      );
  }
}