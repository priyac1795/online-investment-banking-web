import axios from 'axios';

const CreateCust_URL = "http://localhost:8080/online_investment_banking/createCustomer";

class CustomerService  {
    
    createCustomer(customerInvestmentProfile){
        return axios.post(CreateCust_URL, customerInvestmentProfile);
    }
}
 
export default new CustomerService;