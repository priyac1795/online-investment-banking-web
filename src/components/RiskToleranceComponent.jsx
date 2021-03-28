import React, { Component } from 'react';
import DialogFragmentComponent from './DialogFragmentComponent';
class RiskToleranceComponent extends Component {
    
    state = { 

        lowRisk : 0,
        medRisk : 0,
        highRisk : 0,
        risk: ''
     }
     
    styles = {
        fontSize: 18
    }

    onClickLowRisk = () =>{
        this.setState({lowRisk : this.state.lowRisk +1});
    }    
    onClickMedRisk = () =>{
        this.setState({medRisk : this.state.medRisk +1});
    }   
    
    onClickHighRisk = () =>{
        this.setState({highRisk : this.state.highRisk +1});
    } 
 
    formSubmit =(e) =>{
       e.preventDefault();
       if(this.state.lowRisk === 2 || this.state.lowRisk > 2)
       {
           
       console.log("Low risk")
       this.setState({risk: "LowRisk"})
       this.state.lowRisk =0
       }
       else if(this.state.medRisk ===2 || this.state.medRisk >2){
       console.log("Med risk")
       this.setState({risk: "MediumRisk"})
       this.state.medRisk =0
       }
       else{
           console.log("High Risk")
           this.setState({risk: "HighRisk"})
           this.state.highRisk =0
       }
    }

    render() { 
        return (
            <form onSubmit={this.formSubmit}>
             <div className="container">
            <div className="title">
              <h1>Risk Tolerance Questionnaire</h1>
            </div>
            <div>
              <DialogFragmentComponent riskFromRiskTolerance = {this.state.risk}/>
            </div>
            <div >
              <h2>What is your comfort with Risk?</h2>
            </div>
            <div className="question-text" style={this.styles} >
            1. How comfort are you about inflation(the risk your money will buy fewer goods and services in the future because of raising prices)?  
            <div className="radio"  >
            <input
              type="radio"
              name="Q1"
              value="low"
              onClick={this.onClickLowRisk}
            />
              My goal is to minimize swings in my portfolios value(low risk)
             
        </div>
        <div className="radio" >
       
            <input
              type="radio"
              name="Q1"
              value="med"
              onClick={this.onClickMedRisk}
            />
              My goal is for growth to at least keep pace with inflation(med risk)
        
        </div>
        <div className="radio" >
         
            <input
              type="radio"
              name="Q1"
              value="high"
              onClick={this.onClickHighRisk}
            />
              My goal is for growth to exceed inflation(high risk)
         
        </div>
            </div>
      <br/>
            <div className="question-text" style={this.styles}>
            2. Which statement best describes your personal investment philosophy
            <div className="radio" id="Q2option1" >
        
            <input
              type="radio"
              id="Q2option1"
              name="Q2"
              value="low"
              onClick={this.onClickLowRisk}
            />
              Income (low risk)
             
        </div>
        <div className="radio" id="Q2option2" >
       
            <input
              type="radio"
              id="Q2option2"
              name="Q2"
              value="med"
              onClick={this.onClickMedRisk}
            />
              Growth and income (medium risk)
        
        </div>
        <div className="radio" id="Q2option3">
         
            <input
              type="radio"
              id="Q2option3"
              name="Q2"
              value="high"
              onClick={this.onClickHighRisk}
            />
               Growth (high risk)
         
        </div>
            </div>
         <br/>
            <div className="question-text" style={this.styles}>
            3. Are you willing to take short term fluctuations
            <div className="radio" id="Q2option1" >
        
            <input
              type="radio"
              id="Q3option1"
              name="Q3"
              value="low"
              onClick={this.onClickLowRisk}
            />
              Yes
             
        </div>
        <div className="radio" id="Q3option2" >
       
            <input
              type="radio"
              id="Q3option2"
              name="Q3"
              value="med"
              onClick={this.onClickMedRisk}
            />
             No
        
        </div>
        <br/>
        <div className="question-text" style={this.styles}>
        4. If the market has dropped 25% or more in a year, how would you react
            <div className="radio" id="Q4option1" >
        
            <input
              type="radio"
              id="Q4option1"
              name="Q4"
              value="low"
              onClick={this.onClickLowRisk}
            />
               I would rebalance my portfolio 
             
        </div>
        <div className="radio" id="Q3option2" >
       
            <input
              type="radio"
              id="Q4option2"
              name="Q4"
              value="med"
              onClick={this.onClickMedRisk}
            />
              I would not react much 
        
        </div>
        <div className="radio" id="Q3option3">
         
            <input
              type="radio"
              id="Q4option3"
              name="Q4"
              value="high"
              onClick={this.onClickHighRisk}
            />
             I would buy more
         
        </div>
            </div>
            </div>
        </div>
        <br/>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
        </form> 
        );
        
    }
}
 
export default RiskToleranceComponent;