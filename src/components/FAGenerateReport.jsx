import React, { Component } from 'react';
import FinancialAdvisorService from '../services/FinancialAdvisorService';
class FAGenerateReport  extends Component {

    constructor(props) {
        super(props);
    this.state = { 
   
        lowRiskIds:[],
        lowRiskDetails:[],
        getLowRiskId: '',
        test: ''
     };
     this.changeLowRiskId = this.changeLowRiskId.bind(this);
  }
   
     componentDidMount(){
     FinancialAdvisorService.getAllLowRiskIds().then((res)=>{
         this.setState({lowRiskIds: res.data})
         console.log("ids" +this.state.lowRiskIds);
     })
       // console.log(this.state.lowRiskIds);
     }
   

      changeLowRiskId(e){
     var res = e.target.value;
     //console.log("result"+res);
         this.setState({test: res});
         console.log("low id"+this.state.test)
      }
      
    render() { 
      //  const uniqueLowRiskIds = this.getUnique(this.state.lowRiskIds);
        return ( <div>
            <div>
        <h3>LowRisk</h3>
        <label>Select the Customer Id:</label>
        <select  onChange={this.changeLowRiskId}  >
            {this.state.lowRiskIds.map(lowIdList=>(
                <option key={lowIdList.id} value={lowIdList}>
                    {lowIdList}
                </option>
            ))}
        </select>
        <button  className="btn btn-primary" onClick={this.generateLowRiskReport}>Generate Report</button>
        </div>



        </div> );
    }
}
 
export  default FAGenerateReport;