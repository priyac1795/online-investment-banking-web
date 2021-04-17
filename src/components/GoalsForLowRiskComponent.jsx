import React, { Component } from 'react';
import { Card} from 'react-bootstrap';

class GoalForLowRisk extends Component {
    state = {  }

    onClickEducationGoal = ()=>{
        this.props.history.push('/online_investment_banking/educationGoal')
    }
    render() { 
        return ( 
            <div align = "center">
            <Card style={{ width: '40rem' }}>
  <Card.Img variant="top" src="https://bloximages.chicago2.vip.townnews.com/journalstar.com/content/tncms/assets/v3/editorial/4/82/482cc1bb-cf79-5845-b78d-f01436a8ee50/59eb73742d0de.image.jpg?resize=580%2C366" />
  <Card.Body>
    <Card.Title><b>Choose the Low Risk Goals</b></Card.Title>
    <Card.Text>
        <div>
      <button type="button" class="btn btn-info btn-lg" style={{width: '20rem'}} onClick={this.onClickEducationGoal}>Education Goal</button>
      </div>
      <br></br>
      <div>
      <button type="button" class="btn btn-info btn-lg" style={{width: '20rem'}}>Savings Goal</button>
      </div>
    </Card.Text>
  </Card.Body>
  </Card>
  </div>
         );
    }
}
 
export default GoalForLowRisk;