import React, { Component } from 'react';
class HomeComponent extends Component {
    state = {  }

    onClickAdminBtn=()=>{
        this.props.history.push("/online_investment_banking/getFAlist")
    }

    onClickCustomerBtn=()=>{
        this.props.history.push("/online_investment_banking/loginCustomer")
    }
    onClickFinAdvisorBtn=()=>{
        this.props.history.push("/online_investment_banking/generateReportByFA")
    }
    render() { 
        return ( <div>
            <div align="center">
            <img alt="admin page logo"  src="https://1.bp.blogspot.com/-e45ugM-ZbGA/Um6WUbwzcmI/AAAAAAAAA9U/NncJdLn-jh4/s1600/admin+page.jpg"/>
           
            <div>
                <button className = "btn btn-info" onClick={this.onClickAdminBtn}>Admin</button>
            </div>
            <br></br>
            <div>
            <img src="https://www.flaticon.com/svg/vstatic/svg/633/633781.svg?token=exp=1619028138~hmac=87d2d46438ee73ac1c265bf7fd401096" width="130" height="130" />
            </div>
            <div>
                <button className = "btn btn-info" onClick={this.onClickCustomerBtn}>Customer</button>
            </div>
             <br></br>
             <br></br>
            <div>
            <img src="https://www.flaticon.com/premium-icon/icons/svg/3051/3051070.svg" width="224" height="224" alt="Financial advisor icon"  width="130" height="130" />
            </div>
            <br></br>
            <div>
                <button className = "btn btn-info" onClick={this.onClickFinAdvisorBtn}>Financial Advisor</button>
            </div>
            </div>
        </div> );
    }
}
 
export default HomeComponent;