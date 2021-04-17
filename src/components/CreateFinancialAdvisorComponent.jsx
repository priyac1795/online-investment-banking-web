import React, { Component } from 'react';
import FinancialAdvisorService from "../services/FinancialAdvisorService";
class CreateFinancialAdvisor extends Component {
    state = {
        firstName: '',
        lastName: '',
        emailId: '',
        mobileNo: '',
        branchNo: '',
        financialAdvisor: []
      }

    changeFirstNameHandler = (e)=>{
        this.setState({firstName : e.target.value});
    }
    changeLastNameHandler = (e)=>{
        this.setState({lastName : e.target.value});
    }
    changeEmailIdHandler = (e)=>{
        this.setState({emailId : e.target.value});
    }
    changeMobileNoHandler = (e)=>{
        this.setState({mobileNo : e.target.value});
    }
    changeBranchNoHandler = (e)=>{
        this.setState({branchNo : e.target.value});
    }

    saveFinancialAdvisor= (e)=>{
        e.preventDefault();
        this.state.financialAdvisor = {
            firstName: this.state.firstName, 
            lastName: this.state.lastName, 
            emailId: this.state.emailId, 
            mobileNo: this.state.mobileNo, 
            branchNo: this.state.branchNo
         };
        console.log(JSON.stringify(this.state.financialAdvisor));

        FinancialAdvisorService.createFA(this.state.financialAdvisor).then( response =>{
           this.props.history.push('/online_investment_banking/getFAlist')
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
                           <h3 className= "text-center"> Add Financial Advisor</h3>
                             <div className="card-body">
                                 <form>
                                     <div className="form-group">
                                         <label>First Name:</label>
                                         <input placeholder="First Name" name="firstName" className="form-control"
                                          value={this.state.firstName} onChange={this.changeFirstNameHandler}/>

                                     </div>
                                     <div className="form-group">
                                         <label>Last Name:</label>
                                         <input placeholder="Last Name" name="lastName" className="form-control"
                                          value={this.state.lastName} onChange={this.changeLastNameHandler} />

                                     </div>
                                     <div className="form-group">
                                         <label>Email ID:</label>
                                         <input placeholder="Email ID" name="emailId" className="form-control"
                                          value={this.state.emailId} onChange={this.changeEmailIdHandler} />

                                     </div>
                                     <div className="form-group">
                                         <label>Mobile Number:</label>
                                         <input placeholder="Mobile Number" name="mobileNo" className="form-control"
                                          value={this.state.mobileNo} onChange={this.changeMobileNoHandler} />

                                     </div>
                                     <div className="form-group">
                                         <label>Branch Number:</label>
                                         <input placeholder="Branch Number" name="branchNo" className="form-control"
                                          value={this.state.branchNo} onChange={this.changeBranchNoHandler} />

                                     </div>
                                     <button className="btn btn-success" onClick={this.saveFinancialAdvisor}>Save</button>
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
 
export default CreateFinancialAdvisor;