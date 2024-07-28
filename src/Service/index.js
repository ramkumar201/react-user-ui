import axios from "axios";

const createAxiosInstance = () => {
    const BASE_URL = process.env.REACT_APP_API_URL;
    const optionValue = {
        "baseURL": BASE_URL,
        "headers": {
            "Authorization": "",
            "Content-Type": "application/json",
        }
    };
    console.log('optionValue ---', optionValue);
    axios.defaults.withCredentials = true;
    const instance = axios.create(optionValue);

    instance.interceptors.response.use(response => {
        return response;
    }, error => {
        console.log(error);
        return error
    })

    return instance;

}
export default createAxiosInstance