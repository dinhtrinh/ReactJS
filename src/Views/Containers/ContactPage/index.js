import React, { Component } from 'react';
import ContactForm from './../../Components/ContactForm/index';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import {
  inputDataContactForm,
  getDetailContactStart,
  updateDetailContactStart
} from './actions';

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    const { getContactDetail } = this.props;
    getContactDetail(1);
  }

  submit = values => {
    const { inputDataContactForm, updateContact } = this.props;
    // print the form values to the console
    inputDataContactForm(values);
    updateContact(values);
  }

  render() {
    const { handleSubmit, pristine, initialValues } = this.props;
    return <ContactForm onSubmit={handleSubmit(this.submit)} pristine={pristine} initialValues={initialValues} />
  }
}

const contactPageEntry = reduxForm({
  form: 'contactForm',
  enableReinitialize: true,
  keepDirtyOnReinitialize: true
})(ContactPage);

const mapStateToProps = ({ contact }) => ({
  contact: contact,
  initialValues: contact.contactDetail
});

const mapDispatchToProps = (dispatch) => ({
  inputDataContactForm: (value) => dispatch(inputDataContactForm(value)),
  getContactDetail: (id) => dispatch(getDetailContactStart(id)),
  updateContact: (data) => dispatch(updateDetailContactStart(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(contactPageEntry);