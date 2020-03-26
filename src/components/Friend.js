import React from 'react';
import ReactDOM from 'react-dom';
import { Toast,Card,Button,Form,Row,Col, Container,Image,Tabs,Tab,Badge,Alert,Accordion,InputGroup,FormControl } from 'react-bootstrap';
import AlertComponent from './AlertComponent'
import AccordionComponent from './AccordionComponent'
import BadgeComponent from './BadgeComponent'
import BreadcrumbComponent from './BreadcrumbComponent'
import ButtonComponent from './ButtonComponent'
import ButtonGroupComponent from './ButtonGroupComponent'
import CardComponent from './CardComponent'
import MyFilteringComponent from './MyFilteringComponent'
import nature from '../images/nature.jpeg'


class Friend extends React.Component {
  constructor(props){
    super(props)
    this.state={
        myDisplayList:["name1","name2","name3","name4","name232","name12","name1232","name99","name09","name77",'india','abc','usa','china','zz','pqr','russia'],
        myCompleteList:["name1","name2","name3","name4","name232","name12","name1232","name99","name09","name77",'india','abc','usa','china','zz','pqr','russia']
    }
  }
  filterList = (event) => {
    let myDisplayList = this.state.myCompleteList.filter((item) => {
      return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });
      if(event.target.value==""){
          this.setState({myDisplayList: []});
      }
      else{
          this.setState({myDisplayList: myDisplayList});
      }
    
  }
 
  render() {
    return (
        <>
        

                <InputGroup style={{display: 'flex',alignItems: 'center',overflow:'hidden'}} className="border border-primary m-2">
                    <FormControl
                    
                    onChange={this.filterList}
                    placeholder="Search"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    
                    />
                
                </InputGroup>  
        
        {this.state.myDisplayList.map(n=>{
            return <Row style={{display: 'flex',alignItems: 'center',overflow:'hidden'}} className="border border-primary m-2">
                <Col sm={2} >
                    <Image style={{height:'auto',width:'100%',margin:'0.5rem'}} src={nature} roundedCircle />
                </Col>
                <Col sm={8} >
                    <Card style={{margin:'0.5rem',textAlign:'left'}}>
                        <Card.Body>{n}</Card.Body>
                    </Card>
                </Col>
                <Col sm={2}>
                    <Button onClick={(e)=>{ console.log(e.target.id) }} id={n+"check"} className="text-center" variant="primary">Remove</Button>
                </Col>
                
            </Row>      
        })}  
        </>
    
    ) 
  }
}

export default Friend