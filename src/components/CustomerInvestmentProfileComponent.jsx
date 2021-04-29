import React, { Component } from 'react';
import CustomerService from '../services/CustomerService';
import { Card} from 'react-bootstrap';
import EducationGoalComponent from './LowRiskGoalsComponent';
import LowRiskGoalsComponent from './LowRiskGoalsComponent';


class CustomerInvestmentProfile extends Component {
    state = {
        customerName: '',
        customerAge: '',
        annualIncome: '',
        amtForInvestment: '',
        goalInfo: [],
        customerInfo:[]
      }

      changeCustomerNameHandler = (e)=>{
        this.setState({customerName : e.target.value});
    }
    changeCustomerAgeHandler = (e)=>{
        this.setState({customerAge : e.target.value});
    }
    changeAnnualIncomeHandler = (e)=>{
        this.setState({annualIncome : e.target.value});
    }
    changeAmtForInvestmentHandler = (e)=>{
        this.setState({amtForInvestment : e.target.value});
    }
    
    getGoal=(goalInfoFromChild)=>{
        console.log(JSON.stringify(goalInfoFromChild));
       this.setState({
           goalInfo : goalInfoFromChild
       })
       this.state.customerInfo = {
        customerName: this.state.customerName, 
        customerAge: this.state.customerAge, 
        annualIncome: this.state.annualIncome, 
        amtForInvestment: this.state.amtForInvestment, 
        goalInfo: goalInfoFromChild
     };
     console.log(JSON.stringify(this.state.customerInfo))
       CustomerService.createCustomer(this.state.customerInfo).then( response =>{
         } );

    }

    render() { 
        return (
            <div>
                <Card>
                 <Card.Header as="h5">Customer Information  
  </Card.Header>
  <Card.Body>
    <Card.Text>
        <form>
            <table>
            
        <tr><td><label>Customer Name:</label></td>
         <td> <input name="customerName"
        value={this.state.customerName} onChange={this.changeCustomerNameHandler}/></td>
        </tr> 
      
        <tr>
         <td> <div><label>Age:</label></div></td>
         <td> <input name="customerAge"
        value={this.state.customerAge} onChange={this.changeCustomerAgeHandler}/></td>
      </tr>
  
         <tr> 
         <td><label>Annual Income:</label></td>
         <td> <input name="annualIncome"
        value={this.state.annualIncome} onChange={this.changeAnnualIncomeHandler}/></td>
      </tr>
      <tr>
         <td> <label>Amount For Investment:</label></td>
         <td> <input name="amtForInvestment"
        value={this.state.amtForInvestment} onChange={this.changeAmtForInvestmentHandler}/></td>
      </tr>
     
      </table>
     </form>
    </Card.Text>
    
  </Card.Body>
</Card>
<div>
    <LowRiskGoalsComponent customerAmtForInvest = {this.state.amtForInvestment} getGoalMethod={ this.getGoal}/>
</div>
              
            </div>
            
            );
    }
}
 
export default CustomerInvestmentProfile;



     
    
