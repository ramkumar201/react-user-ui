import axios from "axios";

const createAxiosInstance = () => {
    const optionValue = {
        "baseURL": '/',
        "headers": {
            "Authorization": "",
            "Content-Type": "application/json",
        }
    };
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