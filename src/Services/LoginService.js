import RealBaseService from './RealBaseService';

class LoginService extends RealBaseService {
    getUserList(account) {
        this.requestUrl = `${this.baseUrl}users`;
        return this.get();
    }
}

export default new LoginService();