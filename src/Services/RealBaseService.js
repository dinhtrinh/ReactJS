import AppConstant from '../Constants/AppConstants';
import axios from 'axios';

class RealBaseService {
    constructor() {
        this.requestUrl = '';
        this.baseUrl = AppConstant.API_URL;
    }

    get(options) {
        return axios.get(this.requestUrl).then(res => res.data).catch(err => { throw err });
    }

    post(body, options) {
        return axios.post(this.requestUrl, body).then(res => res.data).catch(err => { throw err });
    }

    put(body, options) {
        return axios.put(this.requestUrl, body).then(res => res.data).catch(err => { throw err });
    }

    delete(options) {
        return axios.put(this.requestUrl).then(res => res.data).catch(err => { throw err });
    }
}

export default RealBaseService;