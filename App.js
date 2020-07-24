import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export class RedButton extends Component {
  render() {
    return (
        <Button color="red" title="Click Me"></Button>
    )
  }
}

export default class App extends Component{
  render(){
    return(
     <View style={{marginTop:500, width:"50%"}}>
<RedButton/>
<Text>My First React Component</Text>
    </View>
    );
  }
}