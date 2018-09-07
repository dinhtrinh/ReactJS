import AppConstant from '../Constants/AppConstants';
import axios from 'axios';

class RealBaseService {
    constructor() {
        this.requestUrl = '';
        // this.baseUrl = AppConstant.API_URL;
        this.baseUrl = AppConstant.API_URL_RING_CENTRAL;
        this.accessToken = AppConstant.RING_CENTRAL_ACCESS_TOKEN;
    }

    get(options) {
        return axios({
            method: 'get',
            url: this.requestUrl,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${this.accessToken}`
            }
        }).then(res => res.data)
            .catch(err => { throw err });
    }

    post(body, options) {
        return axios({
            method: 'post',
            url: this.requestUrl,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${this.accessToken}`
            },
            data: body
        }).then(res => res.data)
            .catch(err => { throw err });
    }

    put(body, options) {
        return axios({
            method: 'put',
            url: this.requestUrl,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${this.accessToken}`
            },
            data: body
        }).then(res => res.data)
            .catch(err => { throw err });
    }

    delete(options) {
        return axios({
            method: 'delete',
            url: this.requestUrl,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${this.accessToken}`
            }
        }).then(res => res.data)
            .catch(err => { throw err });
    }
}

export default RealBaseService;