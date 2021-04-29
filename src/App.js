import logo from './logo.svg';
import './App.css';
import ListFinancialAdvisor from './components/ListFinancialAdvisorComponent';
import CreateFinancialAdvisor from './components/CreateFinancialAdvisorComponent';
import UpdateFinancialAdvisor from './components/UpdateFinancialAdvisor';
import CustomerLoginComponent from './components/CustomerLoginComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AboutUsComponent  from './components/AboutUsComponent';
import RiskToleranceComponent from './components/RiskToleranceComponent';
import DialogFragmentComponent from './components/DialogFragmentComponent';
import CustomerInvestmentProfile from './components/CustomerInvestmentProfileComponent';
import DisabilityInvestmentComponent from './components/MediumRiskGoalComponent'
import HomeComponent from './components/HomeComponent';
import FAGenerateReport from './components/FAGenerateReport';
import ContactUsComponent from './components/ContactUsComponent';
import HighRiskComponent from './components/HighRiskComponent';

function App() {

  return (
    <div>
      <Router>
      <HeaderComponent/>
      <div className="page-container">
        <div id="content-wrap">
        <Switch>
          <Route path="/online_investment_banking" exact component={ListFinancialAdvisor}></Route>
          <Route path="/online_investment_banking/getFAlist" component={ListFinancialAdvisor}></Route>
          <Route path="/online_investment_banking/createFA" component={CreateFinancialAdvisor}></Route>
          <Route path="/online_investment_banking/getFA/:id" component={UpdateFinancialAdvisor}></Route>
          <Route path="/online_investment_banking/loginCustomer" component={CustomerLoginComponent}></Route>
          <Route path="/online_investment_banking/riskTolerance" component={RiskToleranceComponent}></Route>
          <Route path="/online_investment_banking/goalDialog" component={DialogFragmentComponent}></Route>
          <Route path="/online_investment_banking/createCustomer" component={CustomerInvestmentProfile}></Route>
          <Route path="/online_investment_banking/medRiskGoal" component={DisabilityInvestmentComponent}></Route>
          <Route path="/online_investment_banking/generateReportByFA" component={FAGenerateReport}></Route>
          <Route path="/online_investment_banking/home" component={HomeComponent}></Route>
          <Route path="/online_investment_banking/aboutUs" component={AboutUsComponent}></Route>
          <Route path="/online_investment_banking/contactUs" component={ContactUsComponent}></Route>
          <Route path="/online_investment_banking/highRiskGoal" component={HighRiskComponent}></Route>

      </Switch>
      </div>
    </div>
    <FooterComponent/>
    </Router> 
    </div>
  );
}

export default App;
