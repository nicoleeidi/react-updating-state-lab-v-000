// Code DigitalClicker Component Here
import React from 'react';
class DigitalClicker extends React.Component {
constructor(){
  super();
  this.state={
    timesClicked: 0
  }
}
handleClick= () => {
  this.setState({
    timesClicked += 1
  })
}
render(){
  return (
    <button onClick={this.handleClick}>{this.state.timesClicked}</button>
  )
}
}
