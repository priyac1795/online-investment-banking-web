import logo from './logo.svg';
import './App.css';
import ListFinancialAdvisor from './components/ListFinancialAdvisorComponent';
import CreateFinancialAdvisor from './components/CreateFinancialAdvisorComponent';
import UpdateFinancialAdvisor from './components/UpdateFinancialAdvisor';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {

  return (
    <div>
      <Router>
      <HeaderComponent/>
      <div className="container">
        <Switch>
          <Route path="/online_investment_banking" exact component={ListFinancialAdvisor}></Route>
          <Route path="/online_investment_banking/getFAlist" component={ListFinancialAdvisor}></Route>
          <Route path="/online_investment_banking/createFA" component={CreateFinancialAdvisor}></Route>
          <Route path="/online_investment_banking/getFA/:id" component={UpdateFinancialAdvisor}></Route>
      </Switch>
    </div>
    <FooterComponent/>
    </Router> 
    </div>
  );
}

export default App;
