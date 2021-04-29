import React, { Component } from 'react';

class HeaderComponent extends Component {
    state = {  }
    render() { 
        return (  
            <div>
         <header  >
           <nav className="navbar navbar-expand-sm bg-warning navbar-dark"  id="header">
             <div>Online Investment Banking</div>
             <ul className="navbar-nav">
    <li className="nav-item active">
      <a className="nav-link" href="/online_investment_banking/home">Home</a>
    </li>
    <li className="nav-item active">
      <a className="nav-link" href="/online_investment_banking/aboutUs">About Us</a>
    </li>
    <li className="nav-item active">
      <a className="nav-link" href="/online_investment_banking/contactUs">Contact Us</a>
    </li>
  
  </ul>
           </nav>
         </header>
         </div>

        );
    }
}
 
export default HeaderComponent;
