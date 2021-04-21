
import React, { Component } from 'react';
import { Card} from 'react-bootstrap';
import EducationGoalService from '../services/EducationGoalService';
import CustomerService from '../services/CustomerService';

class LowRiskGoalsComponent extends Component {
  constructor(props){
    super(props);
    this.state = { 
        name:'',
        age:'',
        relationship:'',
        schoolName:'',
        annualFee:'',
        percentToPay:'',
        totAmtForInvest:'',
         amtToInvestEduGoal:'',
         balance:'',
         customerInfoList:[],
         show: false,
         lowRiskGoal:[],
         balanceForSavings:'',
         savingsFor:'',
         estimatedCost:'',
         monthlySavings:'',
         balance:''
     }
    }
  

     changeNameHandler = (e) =>{
         this.setState({name: e.target.value})
     }
     changeAgeHandler = (e) =>{
         this.setState({age: e.target.value})
     }
     onClickSpouse =(e)=>{
         this.setState({relationship: e.target.value })
     }
     onClickChild =(e)=>{
        this.setState({relationship: e.target.value })
    }
    onClickOthers =(e)=>{
        this.setState({relationship: e.target.value })
    }
    changeSchoolNameHandler=(e)=>{
        this.setState({schoolName: e.target.value})
    }
    changeAnnualFeeHandler=(e)=>{
        this.setState({annualFee: e.target.value})
    }
    changePercentToPayHandler=(e)=>{
        this.setState({percentToPay: e.target.value})
    }
    changeTotAmtForInvest=(e)=>{
      this.setState({totAmtForInvest: e.target.value})
    //this.state.amtToInvest = (this.state.totAmtForInvest)*(this.state.percentToPay)/100
    }
    changeAmtToInvestEduGoal=(e)=>{
      this.setState({amtToInvestEduGoal: e.target.value})
      console.log("Amt to edu"+this.state.amtToInvestEduGoal)
    //this.state.amtToInvest = (this.state.totAmtForInvest)*(this.state.percentToPay)/100
    }
    changeBalanceForSavings=(e)=>{
      this.setState({balanceForSavings: e.target.value})
    }
    changeAnnualIncomeHandler=(e)=>{
      this.setState({annualIncome: e.target.value})
    }
    changeAmtForInvestmentHandler=(e)=>{
      this.setState({amtForInvestment: e.target.value})
    }
    changeSavingsForHandler =(e) =>{
      this.setState({savingsFor: e.target.value})
    }
    changeEstimatedCostHandler =(e)=>{
      this.setState({estimatedCost: e.target.value})
    }
    changeMonthlySavingsHandler =(e)=>{
      this.setState({monthlySavings: e.target.value})
    }

showBody =()=>{
  this.setState({
    show : !this.state.show
  })
}

    saveInvestmentDetails=(e)=>{
      e.preventDefault();
      
     console.log("Customer ID"+this.state.customerInfoList.customerId)    
         this.state.lowRiskGoal = [
           {
            name: this.state.name, 
            age: this.state.age, 
            relationship: this.state.relationship, 
            schoolName: this.state.schoolName, 
            annualFee: this.state.annualFee,
            percentToPay: this.state.percentToPay,
            totAmtForInvest: this.props.customerAmtForInvest,
            amtToInvestEduGoal: (this.props.customerAmtForInvest)*(this.state.percentToPay)/100,
            balance: ((this.props.customerAmtForInvest)-((this.props.customerAmtForInvest)*(this.state.percentToPay)/100) - this.state.estimatedCost),
          savingsFor: this.state.savingsFor,
          estimatedCost: this.state.estimatedCost,
          monthlySavings: this.state.monthlySavings
        }
        ];
         console.log(JSON.stringify(this.state.lowRiskGoal));
   
    }
   render() { 
        return ( 
          <div>
            <h1>Low Risk</h1>
              <Card>
  <Card.Header as="h5">Education Goal
  <button onClick = {this.showBody} >Click</button>
  </Card.Header>
  { this.state.show ? 
  <Card.Body>
    <Card.Text>
        <form>
            <table>
            
        <tr><td><label>Beneficiary Name:</label></td>
         <td> <input name="name"
        value={this.state.name} onChange={this.changeNameHandler}/></td>
        </tr> 
      
        <tr>
         <td> <div><label>Age:</label></div></td>
         <td> <input name="age"
        value={this.state.age} onChange={this.changeAgeHandler}/></td>
      </tr>
     <tr>
         <td> <label>Relationship:</label></td>
          
         <input type="radio" name="relationship" value="spouse"  onClick={this.onClickSpouse}/>
  <label htmlFor="spouse">Spouse</label>
  <input type="radio" name="relationship" value="child" onClick={this.onClickChild}/>
  <label htmlFor="child">Child</label>
  <input type="radio"  name="relationship" value="others" onClick={this.onClickOthers}/>
  <label htmlFor="others">Others</label>
  </tr>  

         <tr> 
         <td><label>School Name:</label></td>
         <td> <input name="schoolName"
        value={this.state.schoolName} onChange={this.changeSchoolNameHandler}/></td>
      </tr>
      <tr>
         <td> <label>Annual cost/fee:</label></td>
         <td> <input name="annualFee"
        value={this.state.annualFee} onChange={this.changeAnnualFeeHandler}/></td>
      </tr>
      <tr>
         <td> <label>% you plan to pay for:</label></td>
         <td> <input name="percentToPay"
        value={this.state.percentToPay} onChange={this.changePercentToPayHandler}/></td>
      </tr>
      <tr>
         <td> <label> Amount to invest per annum:</label></td>
         <td> <input readOnly name="amtToInvestEduGoal"
        value={(this.props.customerAmtForInvest)*(this.state.percentToPay)/100} 
        onChange={this.changeAmtToInvestEduGoal}
        /></td>
      </tr>
      <tr>
     
        </tr>
      </table>
     </form>
    </Card.Text>
    
  </Card.Body>
 : null}
</Card>

<Card>
  <Card.Header as="h5">Savings Goal
  <button onClick = {this.showBody} >Click</button>
  </Card.Header>
  { this.state.show ? 
  <Card.Body>
    <Card.Text>
        <form>
            <table>
            <tr>
         <td> <label>Balance Investment amount for savings:</label></td>
         <td> <input readOnly name="balanceForSavings"
        value={(this.props.customerAmtForInvest)-((this.props.customerAmtForInvest)*(this.state.percentToPay)/100)} 
        onInputCapture = {this.changeBalanceForSavings}
        /></td>
      </tr>
            
        <tr><td><label>Savings For:</label></td>
         <td> <input name="savingsFor"
        value={this.state.savingsFor} onChange={this.changeSavingsForHandler}/></td>
        </tr> 
      
        <tr>
         <td> <div><label>Estimated Cost/Invest:</label></div></td>
         <td> <input name="estimatedCost"
        value={this.state.estimatedCost} onChange={this.changeEstimatedCostHandler}/></td>
      </tr>  

         <tr> 
         <td><label>Monthly Savings:</label></td>
         <td> <input name="monthlySavings"
        value={this.state.estimatedCost/12} onChange={this.changeMonthlySavingsHandler}/></td>
      </tr>
      </table>
     </form>
    </Card.Text>
    
  </Card.Body>
 : null}
</Card>



<Card>
  <Card.Header as="h5">Investment Details
  </Card.Header>
  <Card.Body>
    <Card.Text>
        <form>
            <table>
      <tr>
         <td> <label>Total amount for Investment:</label></td>
         <td> <input name="totAmtForInvest"
        value={this.props.customerAmtForInvest} onChange={this.changeTotAmtForInvest}/></td>
      </tr>
      <tr>
         <td> <label>Balance Investment amount :</label></td>
         <td> <input readOnly name="balance"
        value={((this.props.customerAmtForInvest)-((this.props.customerAmtForInvest)*(this.state.percentToPay)/100) - this.state.estimatedCost)} 
        /></td>
      </tr>
      <tr>
        </tr>
      </table>
     </form>
    </Card.Text>
    
  </Card.Body>
</Card>

<div>
<button  className="btn btn-primary" onClick={this.saveInvestmentDetails}>Save</button>
<button  className="btn btn-primary" onClick={()=>this.props.getGoalMethod(this.state.lowRiskGoal)}>Submit</button>
</div>
 
 </div>         
             
         );
    }
}
 
export default LowRiskGoalsComponent;