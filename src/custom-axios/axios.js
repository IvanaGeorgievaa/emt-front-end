import axios from "axios";

const instance = axios.create({
    baseURL: 'https://emt-back-end.herokuapp.com/api',
    headers: {
        'Access-Control-Allow-Origin' : '*'
    }
})
export default instance;