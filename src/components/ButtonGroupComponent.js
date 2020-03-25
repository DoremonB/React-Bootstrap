import React from 'react';
import ReactDOM from 'react-dom';
import { Button,ButtonGroup } from 'react-bootstrap';

class ButtonGroupComponent extends React.Component {
  constructor(props){
    super(props)
    this.state={
        isLoading:false
    }
    this.handleClick=this.handleClick.bind(this)
  }
handleClick(e){
    console.log(e.target.className)
    console.log(e.target.name)
}  


  render() {
    return (
    <div>
<ButtonGroup onClick={this.handleClick} aria-label="Basic example">
  <Button name="secondary" variant="secondary">Left</Button>
  <Button variant="secondary">Middle</Button>
  <Button variant="secondary">Right</Button>
</ButtonGroup>      
    </div>
    
    ) 
  }
}

export default ButtonGroupComponent