import React, { Component } from 'react';
import ContactForm from './../../Components/ContactForm/index';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { inputDataContactForm } from './actions';

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit = values => {
    const { inputDataContactForm } = this.props;
    // print the form values to the console
    inputDataContactForm(values);
  }

  render() {
    const { handleSubmit, pristine } = this.props;
    return <ContactForm onSubmit={handleSubmit(this.submit)} pristine={pristine} />
  }
}


const contactPageEntry = reduxForm({
  form: 'contactForm',
})(ContactPage);

const mapStateToProps = state => ({
  contact: state.contact
});
const mapDispatchToProps = (dispatch) => ({
  inputDataContactForm: (value) => dispatch(inputDataContactForm(value))
});
export default connect(mapStateToProps, mapDispatchToProps)(contactPageEntry);