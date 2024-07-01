import axios from "axios";

const axiosInstance = axios.create({
// render deployed 
baseURL:"https://amazon-backend-d8bq.onrender.com"


  // firebase deployed
// baseURL:"http://localhost:5000/clon-37089/us-central1/api",

});


export { axiosInstance };
