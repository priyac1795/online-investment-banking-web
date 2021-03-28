import axios from 'axios';

const EducationGoal_URL = "http://localhost:8080/online_investment_banking/educationGoal";

class EducationGoalService{

    createEducationGoal(educationGoal){
        return axios.post(EducationGoal_URL, educationGoal)
    }
}
export default new EducationGoalService;