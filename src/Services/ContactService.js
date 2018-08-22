import RealBaseService from './RealBaseService';

class ContactService extends RealBaseService {
    getContactDetail(id) {
        this.requestUrl = `${this.baseUrl}contacts/${id}`;
        return this.get(id);
    }

    createContact(body) {
        this.requestUrl = `${this.baseUrl}contacts`;
        return this.post(body);
    }

    updateContact(id, body) {
        this.requestUrl = `${this.baseUrl}contacts/${id}`;
        return this.put(body);
    }

    deleteContact(id) {
        this.requestUrl = `${this.baseUrl}contacts/${id}`;
        return this.delete();
    }
}

export default new ContactService();
