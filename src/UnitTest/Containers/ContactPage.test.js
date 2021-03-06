import React from 'react';
import { mount } from 'enzyme';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import contactReducer from '../../Views/Containers/ContactPage/reducers';
import ContactPage from '../../Views/Containers/ContactPage';
// eslint-disable-next-line
import sinon from 'sinon';

describe('Contact form unit test', () => {

    let store;
    let subject;

    beforeEach(() => {
        store = createStore(
            combineReducers({
                form: formReducer,
                contact: contactReducer
            })
        );
        subject = mount(
            <Provider store={store}>
                <ContactPage />
            </Provider>
        )
    });

    it('Should be defined', () => {
        expect(subject).toBeDefined();
    });

    it('Should be have the button Submit', () => {
        expect(
            subject.containsMatchingElement(<button>Submit</button>)
        ).toBe(true);
    });

    it('Should be have the disable button', () => {
        expect(
            subject.find('button').prop('disabled')
        ).toEqual(true);
    });

    it('Should be have the enable button when change textbox', () => {
        const input = subject.find('input').first();
        input.simulate('change', { target: { value: 'Joe' } })
        expect(
            subject.find('button').prop('disabled')
        ).toEqual(false);
    });

    it('Should be have the disabled button when value textbox equal null', () => {
        const input = subject.find('input').first();
        input.simulate('change', { target: { value: '' } })
        expect(
            subject.find('button').prop('disabled')
        ).toEqual(true);
    });

    it('Should be have the enable button when change textbox firstName ', () => {
        const input = subject.find({ name: 'firstName' }).first();
        input.simulate('change', { target: { value: 'firstName' } })
        expect(
            subject.find('button').prop('disabled')
        ).toEqual(false);
    });

    it('Should be have the disabled button when value textbox firstName equal null', () => {
        const input = subject.find({ name: 'firstName' }).first();
        input.simulate('change', { target: { value: '' } })
        expect(
            subject.find('button').prop('disabled')
        ).toEqual(true);
    });

    it('Should be have the enable button when change textbox .email', () => {
        const input = subject.find('.email').first();
        input.simulate('change', { target: { value: 'Joe' } })
        expect(
            subject.find('button').prop('disabled')
        ).toEqual(false);
    });

    it('Should be have the disabled button when value textbox .email equal null', () => {
        const input = subject.find('.email').first();
        input.simulate('change', { target: { value: '' } })
        expect(
            subject.find('button').prop('disabled')
        ).toEqual(true);
    });

    it('Should be have the set state contact', () => {
        const inputFirstName = subject.find({ name: 'firstName' }).first();
        const inputLastName = subject.find({ name: 'lastName' }).first();
        const inputEmail = subject.find({ name: 'email' }).first();
        const form = subject.find('form').first();

        inputFirstName.simulate('change', { target: { value: 'Trinh' } });
        inputLastName.simulate('change', { target: { value: 'Nguyen' } });
        inputEmail.simulate('change', { target: { value: 'ndtrinh@gmail.com' } });
        form.simulate('submit');
        expect(
            store.getState().contact.inputFormData
        ).toEqual({
            firstName: 'Trinh',
            lastName: 'Nguyen',
            email: 'ndtrinh@gmail.com'
        });

        setTimeout(() => {
            const buttonSubmit = subject.find('button').first();
            expect(
                buttonSubmit.prop('disabled')
            ).toEqual(true);
        }, 5000);
    });

    it('Should be have the data when load form', () => {
        //Check the same data when first loadform
        setTimeout(() => {
            expect(
                store.getState().contact.contactDetail
            ).toEqual({
                id: 1,
                firstName: 'Shinigami',
                lastName: 'Sama',
                email: 'ShinigamiSama@gmail.com'
            });
        }, 5000);

        //Check disabled button when first loadform
        const buttonSubmit = subject.find('button').first();
        expect(
            buttonSubmit.prop('disabled')
        ).toEqual(true);

        //Set up update contact
        const inputFirstName = subject.find({ name: 'firstName' }).first();
        const inputLastName = subject.find({ name: 'lastName' }).first();
        const inputEmail = subject.find({ name: 'email' }).first();
        const form = subject.find('form').first();

        inputFirstName.simulate('change', { target: { value: 'Trinh' } });
        inputLastName.simulate('change', { target: { value: 'Nguyen' } });
        inputEmail.simulate('change', { target: { value: 'ndtrinh@gmail.com' } });
        form.simulate('submit');

        setTimeout(() => {
            expect(
                store.getState().contact.contactDetail
            ).toEqual({
                id: 1,
                firstName: 'Trinh',
                lastName: 'Nguyen',
                email: 'ndtrinh@gmail.com'
            });
        }, 5000);

        setTimeout(() => {
            expect(
                store.getState().contact.inputFormData
            ).toEqual({
                id: 1,
                firstName: 'Trinh',
                lastName: 'Nguyen',
                email: 'ndtrinh@gmail.com'
            });
        }, 5000);

        setTimeout(() => {
            const buttonSubmit = subject.find('button').first();
            expect(
                buttonSubmit.prop('disabled')
            ).toEqual(true);
        }, 5000);
    });
});
