import axios from 'axios';
const API = process.env.REACT_APP_API_URL;

class AuthService {

    async LoginService(data) {
        await axios.get(API + '/login').then((res) => {
            console.log(res);
        })
    }

    async RegisterService(data) {
        console.log('register - ', data)
    }

}


export default new AuthService();