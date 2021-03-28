import React, { Component } from 'react';
import CustomerService from '../services/CustomerService';

class CustomerInvestmentProfile extends Component {
    state = {
        name: '',
        age: '',
        annualIncome: '',
        amtForInvestment: '',
      }

    changeNameHandler = (e)=>{
        this.setState({name : e.target.value});
    }
    changeAgeHandler = (e)=>{
        this.setState({age : e.target.value});
    }
    changeAnnualIncomeHandler = (e)=>{
        this.setState({annualIncome : e.target.value});
    }
    changeAmtForInvestmentHandler = (e)=>{
        this.setState({amtForInvestment : e.target.value});
    }

    saveCustomerInfo= (e)=>{
        e.preventDefault();
        let customerInfo = {
            name: this.state.name, 
            age: this.state.age, 
            annualIncome: this.state.annualIncome, 
            amtForInvestment: this.state.amtForInvestment, 
         };
        console.log(JSON.stringify(customerInfo));

        CustomerService.createCustomer(customerInfo).then( response =>{
           this.props.history.push('/online_investment_banking/riskTolerance')
        } );
    }
    cancel = ()=>{
        this.props.history.push('/online_investment_banking/getFAlist');
    }
    render() { 
        return (
            <div>
                <div className="container">
                   <div className="row">
                       <div className="card col-md-6 offset-md-3 offset-md-3" style={{marginTop: "30px"}}>
                           <h3 className= "text-center"> Create Customer Investment Profile</h3>
                             <div className="card-body">
                                 <form>
                                     <div className="form-group">
                                         <label>Name:</label>
                                         <input placeholder="Enter Name" name="Name" className="form-control"
                                          value={this.state.name} onChange={this.changeNameHandler}/>

                                     </div>
                                     <div className="form-group">
                                         <label>Age:</label>
                                         <input placeholder="Enter Age" name="age" className="form-control"
                                          value={this.state.age} onChange={this.changeAgeHandler} />

                                     </div>
                                     <div className="form-group">
                                         <label>Annual Income:</label>
                                         <input placeholder="Enter Annual Income" name="annualIncome" className="form-control"
                                          value={this.state.annualIncome} onChange={this.changeAnnualIncomeHandler} />

                                     </div>
                                     <div className="form-group">
                                         <label>Amount for Investment:</label>
                                         <input placeholder="Enter Amount for Investment" name="amtForInvestment" className="form-control"
                                          value={this.state.amtForInvestment} onChange={this.changeAmtForInvestmentHandler} />

                                     </div>
                                    
                                     <button className="btn btn-success" onClick={this.saveCustomerInfo}>Save</button>
                                     <button className="btn btn-danger" onClick={this.cancel} style={{marginLeft: "10px"}}>Cancel</button>
                                 </form>

                             </div>

                       </div>

                   </div>
                </div>
            </div>
            
            );
    }
}
 
export default CustomerInvestmentProfile;