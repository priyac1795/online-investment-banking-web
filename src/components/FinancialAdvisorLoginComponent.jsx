import React, { Component } from 'react';
import {Row,Col, Card, Form, InputGroup, FormControl} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSignInAlt, faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons';
class FinancialAdvisorLoginComponent extends Component {
    state = { 
        email: '',
        password: ''
     }
    render() { 
        const email= this.state.email;
        const password = this.state.password;
        return ( 
          <Row className="justify-content-md-center">
              <Col xs={5}>
              <Card className="border border-dark bg-dark text-white">
                  <Card.Header>
                      <FontAwesomeIcon icon={faSignInAlt}/>
                      Login
                  </Card.Header>
                  <Card.Body>
                    <Form.Row>
                       <Form.Group>
                           <InputGroup>
                             <InputGroup.Prepend>
                                <InputGroup.Text><FontAwesomeIcon icon={faEnvelope}/></InputGroup.Text>
                             </InputGroup.Prepend>
                             <FormControl required autoComplete="off" type="text" name="email" value={email}
                               className="bg-dark text-white" placeholder="Enter email address"/>
                           </InputGroup>
                       </Form.Group>
                       <Form.Group>
                           <InputGroup>
                             <InputGroup.Prepend>
                                <InputGroup.Text><FontAwesomeIcon icon={faLock}/></InputGroup.Text>
                             </InputGroup.Prepend>
                             <FormControl required autoComplete="off" type="text" name="password" value={password}
                               className="bg-dark text-white" placeholder="Enter Password"/>
                           </InputGroup>
                       </Form.Group>
                    </Form.Row>
                  </Card.Body>
              </Card>
              </Col>
          </Row>

         );
    }
}
 
export default FinancialAdvisorLoginComponent;