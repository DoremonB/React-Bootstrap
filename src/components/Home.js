import React from 'react';
import ReactDOM from 'react-dom';
import { Accordion,Card,Button } from 'react-bootstrap';
import AlertComponent from './AlertComponent'
import AccordionComponent from './AccordionComponent'
import BadgeComponent from './BadgeComponent'
import BreadcrumbComponent from './BreadcrumbComponent'
import ButtonComponent from './ButtonComponent'
import ButtonGroupComponent from './ButtonGroupComponent'

class Home extends React.Component {
  render() {
    return (
    <div>
      <ButtonGroupComponent />
    </div>
    
    ) 
  }
}

export default Home