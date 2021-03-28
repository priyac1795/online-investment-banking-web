import React, { Component } from 'react';
import { Modal, Button } from "react-bootstrap";
class DialogFragmentComponent extends Component {
    state = { 
        isOpen: false,
       // selectedRisk: this.props.riskFromRiskTolerance
     }

    
     openModal = () => this.setState({ isOpen: true });
     closeModal = () => this.setState({ isOpen: false });
     educationGoal = () =>{
        console.log(this.props.riskFromRiskTolerance);
     }

    render() { 
        return (
        
            <>
            <div
            className="d-flex align-items-center justify-content-center"
            style={{ height: "100vh" }}
          >
                  
            <Button variant="primary" onClick={this.openModal}>
              Launch demo modal
            </Button>
          </div>
            <Modal show={this.state.isOpen} onHide={this.closeModal}
             size="lg"
             aria-labelledby="contained-modal-title-vcenter"
             centered>
              <Modal.Header closeButton>
                <Modal.Title>Select the Goal</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <Button variant="secondary" onClick={this.educationGoal}>Educational Goal</Button>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.closeModal}>Close</Button>
                <Button variant="primary" onClick={() => this.handleModalSubmit()}>
                        Submit
                    </Button>
              </Modal.Footer>
            </Modal>
            </>
          );
    }
}
 
export default DialogFragmentComponent;