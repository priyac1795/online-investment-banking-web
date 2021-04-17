import axios from 'axios';

const CreateCust_URL = "http://localhost:8080/online_investment_banking/createCustomer";
const CreateCustForMedRisk_URL = "http://localhost:8080/online_investment_banking/createCustomerForMedRisk";
const GetAllCust__URL = "http://localhost:8080/online_investment_banking/getFAlist";

class CustomerService  {
    
    createCustomer(customerInvestmentProfile){
        return axios.post(CreateCust_URL, customerInvestmentProfile);
    }
    
    createCustomerForMedRisk(mediumRiskgoal){
        return axios.post(CreateCustForMedRisk_URL, mediumRiskgoal);
    }
    getAllCustomerInfo(){
        return axios.get(GetAllCust__URL);
    }
}
 
export default new CustomerService;