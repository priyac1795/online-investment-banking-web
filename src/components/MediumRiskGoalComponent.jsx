import React, { Component } from 'react';
import { Card} from 'react-bootstrap';
import CustomerService from '../services/CustomerService';
class DisabilityInvestmentComponent extends Component {
    state = {
        customerName: '',
        customerAge: '',
        annualIncome: '',
        amtForInvestment: '',
        taxPercent:'',
        afterTaxAI:'',
        employerPercent:'',
        customerPercent:'',
        amtContribByEmployer:'',
        amtContribByCustomer:'',
        disabilitySavings:'',
        mediumRiskGoal:[]
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
    changeTaxPercent = (e) =>{
        this.setState({taxPercent : e.target.value })
    }
    changeAfterTaxAI = (e) =>{
      // this.setState({afterTaxAI :(this.state.annualIncome - (this.state.taxPercent*this.state.annualIncome)/100)})
      return (this.state.annualIncome - (this.state.taxPercent*this.state.annualIncome)/100);
       console.log("AfterTAxAI"+this.state.afterTaxAI)
    }
    changeEmployerPercent = (e) =>{
        this.setState({employerPercent: e.target.value})
    }
    changeCustomerPercent = (e)=>{
        this.setState({customerPercent: e.target.value})
    }
    

    saveInvestmentDetails=()=>{
       this.state.mediumRiskGoal = {
        customerName: this.state.customerName, 
        customerAge: this.state.customerAge, 
        annualIncome: this.state.annualIncome,  
          taxPercent: this.state.taxPercent,
          employerPercent: this.state.employerPercent,
          amtContribByEmployer: parseFloat((this.state.employerPercent*(this.state.annualIncome - (this.state.taxPercent*this.state.annualIncome)/100))/100).toFixed(2),
          customerPercent: this.state.customerPercent,
          amtContribByCustomer: parseFloat((this.state.customerPercent*(this.state.annualIncome - (this.state.taxPercent*this.state.annualIncome)/100))/100).toFixed(2),
          disabilitySavings: parseFloat(((this.state.employerPercent*(this.state.annualIncome - (this.state.taxPercent*this.state.annualIncome)/100))/100 +
          (this.state.customerPercent*(this.state.annualIncome - (this.state.taxPercent*this.state.annualIncome)/100))/100)).toFixed(2)
       
       
     };
  //  console.log(JSON.stringify(this.state.lowRiskGoal));
     console.log(JSON.stringify(this.state.mediumRiskGoal))
      CustomerService.createCustomerForMedRisk(this.state.mediumRiskGoal).then( response =>{
        } );

    }

    render() { 
        return (
            <div>
                <h1>Medium Risk</h1>
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
     
      </table>
     </form>
    </Card.Text>
    
  </Card.Body>
</Card>
<div>
<Card>
  <Card.Header as="h5">Disability Goal
  </Card.Header>
  <Card.Body>
    <Card.Text>
        <form>
            <table>
            <tr>
         <td> <label>Annual Income:</label></td>
         <td> <input readOnly name="annualIncome"
        value={this.state.annualIncome} 
        /></td>
      </tr>
            
        <tr><td><label>Tax percentage %:</label></td>
         <td> <input name="taxPercent"
        value={this.state.taxPercent} onChange={this.changeTaxPercent}/></td>
        </tr> 
      
        <tr>
         <td> <div><label>After Tax Annual Income:</label></div></td>
         <td> <input readOnly name="afterTaxAI"
        value={parseFloat((this.state.annualIncome - (this.state.taxPercent*this.state.annualIncome)/100)).toFixed(2)} /></td>
      </tr>  
      <tr>
          <div>
              <br></br>
             <b>Note: You are eligible for disability savings for the maximum amount of {(this.state.annualIncome - (this.state.taxPercent*this.state.annualIncome)/100)}</b> 
          </div>
      </tr>

         
         <div><label>Employer Coverage:</label></div>
         <div>
             <tr>
             <td><label>Percentage Employer would contribute</label></td>
             <td><input name="employerPercent"
        value={this.state.employerPercent} onChange={this.changeEmployerPercent}/></td>
             </tr>
             <tr>
                 <td><label>Amount contribution by Employer:</label></td>
                 <td> <input readOnly name="empAmt"
        value={parseFloat((this.state.employerPercent*(this.state.annualIncome - (this.state.taxPercent*this.state.annualIncome)/100))/100).toFixed(2)} /></td>
                 
             </tr>
             </div>

             <div>
                <tr>
                    <td><label>Percentage you like to contribute </label></td>
                    <td><input name="customerPercent"
        value={this.state.customerPercent} onChange={this.changeCustomerPercent}/></td>
             </tr>
             <tr>
                 <td><label>Amount you contributed</label></td>
                 <td> <input readOnly name="empAmt"
        value={parseFloat((this.state.customerPercent*(this.state.annualIncome - (this.state.taxPercent*this.state.annualIncome)/100))/100).toFixed(2)} /></td>
                 
             </tr>
                    
             </div>
             <div>
                 <label>Your total Disability Contribution Savings is {
                      
                     parseFloat(((this.state.employerPercent*(this.state.annualIncome - (this.state.taxPercent*this.state.annualIncome)/100))/100 +
                     (this.state.customerPercent*(this.state.annualIncome - (this.state.taxPercent*this.state.annualIncome)/100))/100)).toFixed(2)
                    
                     
                     } </label>
             </div>
         
            
      </table>
     </form>
    </Card.Text>
    
  </Card.Body>
</Card>
</div>
<div>
<button  className="btn btn-primary" onClick={this.saveInvestmentDetails} >Submit</button>
</div>
              
            </div>
            
            
            );
    
    }
}
 
export default DisabilityInvestmentComponent;