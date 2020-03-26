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

import nature from '../images/nature.jpeg'


class Timeline extends React.Component {
  constructor(props){
    super(props)
  }
 
  render() {
    return (
        <>
        
            <Row>
                <Col sm={2} >
                    <Image style={{height:'auto',width:'100%',margin:'0.5rem'}} src={nature} roundedCircle />
                </Col>
                <Col sm={10} >
                    <Card style={{margin:'0.5rem'}}>
                        <Card.Body>asas123 {this.props.content} th comment</Card.Body>
                    </Card>
                </Col>
            
            </Row> 
        
                   
        </>
    
        
        


    
    ) 
  }
}

export default Timeline