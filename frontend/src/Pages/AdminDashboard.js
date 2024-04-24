import React from 'react';
import './AdminDashboard.css';
import {Container , Tab, Row, Col , Nav} from "react-bootstrap";
import DashboardPoste from '../Components/DashboardPoste';
import CondidatHome from './CondidatHome';



function Dashboard(){
    return(
  <Container>
 <Tab.Container defaultActiveKey="poste">
    <Row>
     <Col sm={3}>
        <Nav variant='pills' className='flex-column'>
          <Nav.Item>
            <Nav.Link eventKey="poste">Poste</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="information">condidats</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="register">register</Nav.Link>
          </Nav.Item>
        </Nav>
     </Col>
     <Col sm={9}>
        <Tab.Content >
          <Tab.Pane eventKey="poste">
          <DashboardPoste/>
          </Tab.Pane>
           
          <Tab.Pane eventKey="information">
            <CondidatHome/>
          
          </Tab.Pane>
          <Tab.Pane eventKey="register">
          
          </Tab.Pane>
           
        </Tab.Content>
     </Col>
    </Row>
 </Tab.Container>
  </Container>
     
    );
}
export default Dashboard;