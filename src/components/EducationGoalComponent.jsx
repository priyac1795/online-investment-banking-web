
import React, { Component } from 'react';
import { Card} from 'react-bootstrap';
import Icon from 'react-native-vector-icons';
import { View, Image } from 'react-native';
import style from 'bootstrap/dist/css/bootstrap.css'
import e from 'cors';
import EducationGoalService from '../services/EducationGoalService';

class EducationGoalComponent extends Component {
    state = { 
        name:'',
        age:'',
        relationship:'',
        schoolName:'',
        annualFee:'',
        percentToPay:'',
        totAmtForInvest:'',
         amtToInvest:'',
         balance:''
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
    // this.state.am = (this.state.totAmtForInvest)*(this.state.percentToPay)/100
    }
    changeAmtToInvestHandler =(e) =>{
      this.setState({amtToInvest: e.target.value})
    }
    changeBalanceHandler =(e)=>{
      this.setState({balance: e.target.value})
    }

    saveInvestmentDetails=(e)=>{
      e.preventDefault();
        let educationGoal = {
            name: this.state.name, 
            age: this.state.age, 
            relationship: this.state.relationship, 
            schoolName: this.state.schoolName, 
            annualFee: this.state.annualFee,
            percentToPay: this.state.percentToPay,
            totAmtForInvest: this.state.totAmtForInvest,
            amtToInvest: this.state.amtToInvest,
            balance: this.state.balance
         };
         console.log(JSON.stringify(educationGoal));
         EducationGoalService.createEducationGoal(educationGoal).then(response =>{
             this.props.history.push('/online_investment_banking/educationGoal')
         })
    }
   render() { 
        return ( 
          <div>
              <Card>
  <Card.Header as="h5">General Information
  <button>Edit</button>
  
  </Card.Header>
  <Card.Body>
    <Card.Text>
        <form>
            <table>
    
        <tr><td><label>Name:</label></td>
         <td> <input name="name"
        value={this.state.name} onChange={this.changeNameHandler}/></td>
        </tr> 
        <tr>
         <td> <label>Age:</label></td>
         <td> <input name="age"
        value={this.state.age} onChange={this.changeAgeHandler}/></td>
      </tr>
     <tr>
         <td> <label>Relationship:</label></td>
          
         <input type="radio" name="relationship" value="spouse"  onClick={this.onClickSpouse}/>
  <label htmlfor="spouse">Spouse</label>
  <input type="radio" name="relationship" value="child" onClick={this.onClickChild}/>
  <label htmlfor="child">Child</label>
  <input type="radio"  name="relationship" value="others" onClick={this.onClickOthers}/>
  <label htmlfor="others">Others</label>
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
     
        </tr>
      </table>
     </form>
    </Card.Text>
    
  </Card.Body>
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
        value={this.state.totAmtForInvest} onChange={this.changeTotAmtForInvest}/></td>
      </tr>
      <tr>
         <td> <label> Amount to invest per annum:</label></td>
         <td> <input name="amtToInvest"
        value={(this.state.totAmtForInvest)*(this.state.percentToPay)/100} 
        onchange={this.changeAmtToInvestHandler}
        disabled = {true}/></td>
      </tr>
      <tr>
         <td> <label>Balance Investment amount:</label></td>
         <td> <input name="balance"
        value={(this.state.totAmtForInvest)-((this.state.totAmtForInvest)*(this.state.percentToPay)/100)} 
        onchange={this.changeBalanceHandler}
        disabled = {true}/></td>
      </tr>
      <tr>
        </tr>
      </table>
     </form>
    </Card.Text>
    
  </Card.Body>
</Card>

<div>
<button  className="btn btn-primary" onClick={this.saveInvestmentDetails}>Submit</button>
</div>
 
 </div>         
           
   
         );
    }
}
 
export default EducationGoalComponent;