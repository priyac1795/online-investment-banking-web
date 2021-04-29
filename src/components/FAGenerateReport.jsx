import React, { Component } from 'react';
import FinancialAdvisorService from '../services/FinancialAdvisorService';
class FAGenerateReport  extends Component {

    constructor(props) {
        super(props);
    this.state = { 
   
        lowRiskIds:[],
        lowRiskReportDetails:[],
        lowCustId: '',
        highCustId:'',
        highRiskIds:[],
        highRiskReportDetails:[],
        medRiskIds:[],
        medRiskReportDetails:[],
        medCustId:''
     };
     this.changeLowRiskId = this.changeLowRiskId.bind(this);
  }
   
     componentDidMount(){
     FinancialAdvisorService.getAllLowRiskIds().then((res)=>{
         this.setState({lowRiskIds: res.data})
         console.log("ids" +this.state.lowRiskIds);
     })
     FinancialAdvisorService.getAllMedRiskIds().then((res)=>{
      this.setState({medRiskIds: res.data})
      console.log("ids" +this.state.medRiskIds);
  })

     FinancialAdvisorService.getAllHighRiskIds().then((res)=>{
      this.setState({highRiskIds: res.data})
      console.log(" high ids" +this.state.highRiskIds);
  })
       // console.log(this.state.lowRiskIds);
     }
   

      changeLowRiskId=(e)=>{
     var res = e.target.value;
     //console.log("result"+res);
         this.setState({lowCustId: res}, ()=>{
            console.log("low id"+this.state.lowCustId)
         });
         
      }

      changeHighRiskId=(e)=>{
        var res = e.target.value;
        //console.log("result"+res);
            this.setState({highCustId: res}, ()=>{
               console.log("medium id"+this.state.highCustId)
            });
            
         }

         changeMedRiskId=(e)=>{
          var res = e.target.value;
          //console.log("result"+res);
              this.setState({medCustId: res}, ()=>{
                 console.log("high id"+this.state.medCustId)
              });
              
           }

      generateLowRiskReport=()=>{
        FinancialAdvisorService.getLowRiskReport(this.state.lowCustId).then((res)=>{
          this.setState({lowRiskReportDetails : res.data})
        })
      }
      generateMedRiskReport=()=>{
        FinancialAdvisorService.getMedRiskReport(this.state.medCustId).then((res)=>{
          this.setState({medRiskReportDetails : res.data})
        })
      }
      generateHighRiskReport=()=>{
        FinancialAdvisorService.getHighRiskReport(this.state.highCustId).then((res)=>{
          this.setState({highRiskReportDetails : res.data})
        })
      }
  

    render() { 
      //  const uniqueLowRiskIds = this.getUnique(this.state.lowRiskIds);
        return ( <div className="margin">
            <div>
              <div>
        <h3>LowRisk</h3>
        <label><b>Select the Customer Id:</b></label>
        <select  onChange={this.changeLowRiskId}  >
        <option> --Select-- </option>
            {this.state.lowRiskIds.map(lowIdList=>(
                <option key={lowIdList.id} value={lowIdList}>
                    {lowIdList}
                </option>
            ))}
        </select>
        <button  className="btn btn-primary m-2" onClick={this.generateLowRiskReport}>Generate Report</button>
        </div>
        <div>{this.state.lowRiskReportDetails.toString().split(',').map(str => <p style={{whiteSpace: 'pre-line'}}>{str}</p>)}</div>
        </div>

        <div>
              <div>
        <h3>MediumRisk</h3>
        <label><b>Select the Customer Id:</b></label>
        <select  onChange={this.changeMedRiskId}  >
        <option> --Select-- </option>
            {this.state.medRiskIds.map(medIdList=>(
                <option key={medIdList.id} value={medIdList}>
                    {medIdList}
                </option>
            ))}
        </select>
        <button  className="btn btn-primary m-2" onClick={this.generateMedRiskReport}>Generate Report</button>
        </div>
        <div>{this.state.medRiskReportDetails.toString().split(',').map(str => <p style={{whiteSpace: 'pre-line'}}>{str}</p>)}</div>
        </div>

        <div>
        <div>
        <h3>HighRisk</h3>
       
        <label><b>Select the Customer Id:</b></label>
        <select  onChange={this.changeHighRiskId}  >
        <option> --Select-- </option>
            {this.state.highRiskIds.map(highIdList=>(
                <option key={highIdList.id} value={highIdList}>
                    {highIdList}
                </option>
            ))}
        </select>
        <button  className="btn btn-primary m-2" onClick={this.generateHighRiskReport}>Generate Report</button>
        </div>
        <div>{this.state.highRiskReportDetails.toString().split(',').map(str => <p style={{whiteSpace: 'pre-line'}}>{str}</p>)}</div>
        </div>

        </div> );
    }
}
 
export default FAGenerateReport;