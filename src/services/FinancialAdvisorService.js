import axios from 'axios';

const FA_API_BASE_URL = "http://localhost:8080/online_investment_banking/getFAlist";
const CreateFA_URL = "http://localhost:8080/online_investment_banking/createFA";
const GetFA_URL = "http://localhost:8080/online_investment_banking/getFA";
const UpdateFA_URL = "http://localhost:8080/online_investment_banking/updateFA";
const DeleteFA_URL = "http://localhost:8080/online_investment_banking/deleteFA";
const GetAllLowRiskIds_URL = "http://localhost:8080/online_investment_banking/getAllLowRiskIds";
const GetAllMedRiskIds_URL = "http://localhost:8080/online_investment_banking/getAllMedRiskIds";
const GetAllHighRiskIds_URL = "http://localhost:8080/online_investment_banking/getAllHighRiskIds";
const GetLowRiskReport_URL = "http://localhost:8080/online_investment_banking/getLowRiskReport";
const GetMedRiskReport_URL = "http://localhost:8080/online_investment_banking/getMedRiskReport";
const GetHighRiskReport_URL = "http://localhost:8080/online_investment_banking/getHighRiskReport";
class FinancialAdvisorService{
   getFAlist(){
       return axios.get(FA_API_BASE_URL);
   }

   createFA(financialAdvisor){
       return axios.post(CreateFA_URL, financialAdvisor);
   }

   getFA(id){
       return axios.get(GetFA_URL + "/"+id);
   }

   updateFA(id, financialAdvisor){
       return axios.put(UpdateFA_URL+"/"+id, financialAdvisor);
   }

   deleteFA(id){
       return axios.delete(DeleteFA_URL+"/"+id)
   }

   getAllLowRiskIds(){
       return axios.get(GetAllLowRiskIds_URL);
    }
    getAllMedRiskIds(){
        return axios.get(GetAllMedRiskIds_URL);
     }
    getAllHighRiskIds(){
        return axios.get(GetAllHighRiskIds_URL);
     }

    getLowRiskReport(custId){
        return axios.get(GetLowRiskReport_URL+"/"+custId)
    }
    getMedRiskReport(custId){
        return axios.get(GetMedRiskReport_URL+"/"+custId)
    }
    getHighRiskReport(custId){
        return axios.get(GetHighRiskReport_URL+"/"+custId)
    }
}

export default new FinancialAdvisorService();