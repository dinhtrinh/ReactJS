import RealBaseService from './RealBaseService';

class RingCentralService extends RealBaseService {
    sendSms(body) {
        this.requestUrl = `${this.baseUrlRingCentral}account/~/extension/~/sms`;
        return this.post(body);
    }
}

export default new RingCentralService();
