import logo from './logo.svg';
import './App.css';
import ListFinancialAdvisor from './components/ListFinancialAdvisorComponent';
import CreateFinancialAdvisor from './components/CreateFinancialAdvisorComponent';
import UpdateFinancialAdvisor from './components/UpdateFinancialAdvisor';
import FinancialAdvisorLoginComponent from './components/FinancialAdvisorLoginComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'
import RiskToleranceComponent from './components/RiskToleranceComponent';
import DialogFragmentComponent from './components/DialogFragmentComponent';
import CustomerInvestmentProfile from './components/CustomerInvestmentProfileComponent';
import DisabilityInvestmentComponent from './components/MediumRiskGoalComponent'
import LowRiskGoalsComponent from './components/LowRiskGoalsComponent';

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
          <Route path="/online_investment_banking/loginFA" component={FinancialAdvisorLoginComponent}></Route>
          <Route path="/online_investment_banking/riskTolerance" component={RiskToleranceComponent}></Route>
          <Route path="/online_investment_banking/goalDialog" component={DialogFragmentComponent}></Route>
          <Route path="/online_investment_banking/createCustomer" component={CustomerInvestmentProfile}></Route>
          <Route path="/online_investment_banking/lowRiskGoal" component={LowRiskGoalsComponent}></Route>
          <Route path="/online_investment_banking/medRiskGoal" component={DisabilityInvestmentComponent}></Route>
      </Switch>
    </div>
    <FooterComponent/>
    </Router> 
    </div>
  );
}

export default App;
