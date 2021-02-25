import React, { Component } from "react";
import FinancialAdvisorService from "../services/FinancialAdvisorService";
class ListFinancialAdvisor extends Component {
  state = {
    financialAdvisor: [],
  };


componentDidMount(){
 
    FinancialAdvisorService.getFAlist().then(
       response => {this.setState({financialAdvisor : response.data})}
       
    )
   // console.log(this.state.financialAdvisor.id);
}

addFinancialAdvisor = () => {
    this.props.history.push('/online_investment_banking/createFA')
}
styles ={
  fontSize: 18,
  fontWeight : "bold"
}

editFinancialAdvisor = (id) =>{
  console.log(id);
  this.props.history.push(`/online_investment_banking/getFA/${id}`);
}

deleteFinancialAdvisor =(id) =>{
   FinancialAdvisorService.deleteFA(id).then(()=>{
     this.setState({financialAdvisor: this.state.financialAdvisor.filter(finAdvisor => finAdvisor.id !== id)});
   })
}
  render() {
    return (
      <div>
        <h2 className="text-center">Financial Advisor List</h2>
       <div className="row">
         <button className="btn btn-primary p-2 m-2" onClick={this.addFinancialAdvisor} style={this.styles}>ADD Financial Advisor</button>
       </div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email ID</th>
                <th>Mobile No</th>
                <th>Branch No</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {this.state.financialAdvisor.map((finAdvisor) => (
                <tr key={finAdvisor.id}>
                  <td>{finAdvisor.firstName}</td>
                  <td>{finAdvisor.lastName}</td>
                  <td>{finAdvisor.emailId}</td>
                  <td>{finAdvisor.mobileNo}</td>
                  <td>{finAdvisor.branchNo}</td>
                  <td><button onClick={()=> this.editFinancialAdvisor(finAdvisor.id)} className = "btn btn-info"> Update
                    </button>
                    <button onClick={()=> this.deleteFinancialAdvisor(finAdvisor.id)} className = "btn btn-danger m-2"> Delete
                    </button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListFinancialAdvisor;
