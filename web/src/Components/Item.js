import React, { Component } from 'react'

export default class Item extends Component {
  constructor(props){
    super(props);
    this.state={
      checked:false,
    }

    // binds the item checked method to the Item component
    this.checked=this.checked.bind(this);


  }
  checked(){
    this.setState(presentState => {
      if(presentState.checked) return {checked:false}
      else return {checked:true}
    });
  }
  render() {
    
    // update item styles based on the state of the task
    const style={
      'textDecoration': this.state.checked? "line-through": "none",
      'color':this.state.checked? "grey":"black"
    }
    return (
      <li className={this.props.class} style={style}>
        <input onClick={this.checked} type='checkbox' /> {this.props.name}
      </li>
    )
  }
}