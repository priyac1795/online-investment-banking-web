import React, { Component } from 'react';
import { Card} from 'react-bootstrap';
import CustomerService from '../services/CustomerService';
class HighRiskComponent extends Component {
    state = { 
        customerName: '',
        customerAge: '',
        annualIncome: '',
        coverAfterTaxIncome:'',
        taxPercent:'',
        addExpenses:'',
        afterTaxAI:'',
        monthlyAfterTaxIncome:'',
        total:'',
        highRiskGoal:[]
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
    changeTaxPercent=(e)=>{
        this.setState({taxPercent : e.target.value});
    }
    changeCoverAfterTaxIncome=(e)=>{
        this.setState({coverAfterTaxIncome : e.target.value});
    }
    changeAddExpenses=(e)=>{
        this.setState({addExpenses : e.target.value});
        console.log(this.state.addExpenses);
    }

    saveInvestmentDetails=()=>{
     this.state.highRiskGoal ={
        customerName: this.state.customerName,
        customerAge: this.state.customerAge,
        annualIncome: this.state.annualIncome,
        coverAfterTaxIncome:this.state.coverAfterTaxIncome,
        taxPercent:this.state.taxPercent,
        addExpenses:this.state.addExpenses,
        afterTaxAI:(this.state.annualIncome - (this.state.taxPercent*this.state.annualIncome)/100),
        monthlyAfterTaxIncome: parseFloat(((this.state.annualIncome - (this.state.taxPercent*this.state.annualIncome)/100))/12).toFixed(2),
        total:parseFloat(((this.state.annualIncome - (this.state.taxPercent*this.state.annualIncome)/100))/12*this.state.coverAfterTaxIncome + (+this.state.addExpenses)).toFixed(2)
         }
         console.log(JSON.stringify(this.state.highRiskGoal))
      CustomerService.createCustomerForHighRisk(this.state.highRiskGoal).then((res)=>{

      })

    }
    render() { 
        return ( <div>
          <h1>High Risk</h1>
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
  <Card.Header as="h5">Emergency Cash
  </Card.Header>
  <Card.Body>
    <Card.Text>
        <form>
            <table>
            <tr>
         <td> <label>Annual pre-tax income:</label></td>
         <td> <input readOnly name="annualIncome"
        value={this.state.annualIncome} 
        /></td>
      </tr>
            
        <tr><td><label>Effective Tax percentage %:</label></td>
         <td> <input name="taxPercent"
        value={this.state.taxPercent} onChange={this.changeTaxPercent}/></td>
        </tr> 
      
        <tr>
         <td> <div><label>After Tax Annual Income:</label></div></td>
         <td> <input readOnly name="afterTaxAI"
        value={(this.state.annualIncome - (this.state.taxPercent*this.state.annualIncome)/100)} /></td>
      </tr>  
      <tr>
         <td> <div><label>Monthly After Tax Income:</label></div></td>
         <td> <input readOnly name="monthlyAfterTaxIncome"
        value={parseFloat(((this.state.annualIncome - (this.state.taxPercent*this.state.annualIncome)/100))/12).toFixed(2)} /></td>
      </tr> 
      <tr>
      </tr>
                
      </table>
     </form>
      </Card.Text>
    
    </Card.Body>
  </Card>
  <Card>
  <Card.Header as="h5">Goal
  </Card.Header>
  <Card.Body>
    <Card.Text>
        <form>
            <table>
         <div>
             <tr>
             <td><label>Cover after-tax income for:</label></td>
             <td><input name="coverAfterTaxIncome"
        value={this.state.coverAfterTaxIncome} onChange={this.changeCoverAfterTaxIncome}/></td>
        <td><label>months</label></td>
             </tr>
             <tr>
                 <td><label>Additional expenses:</label></td>
                 <td> <input name="addExpenses"
        value={(this.state.addExpenses)} onChange={this.changeAddExpenses} /></td>
                 
             </tr>
             <tr>
                 <td><label>Total needed:{parseFloat(((this.state.annualIncome - (this.state.taxPercent*this.state.annualIncome)/100))/12*this.state.coverAfterTaxIncome + (+this.state.addExpenses)).toFixed(2)}</label></td>
                 
                 
             </tr>        
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

        </div> );
    }
}
 
export default HighRiskComponent;