import React, { Component } from 'react';
import { Field } from 'redux-form';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

class ContactForm extends Component {

  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    const { onSubmit, pristine } = this.props;
    return (
      <div className="container">
        <div className='col col-4 col-sm-4 offset-md-4 contact-form'>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <Field name="firstName" component="input" className="form-control" type="text" />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <Field name="lastName" component="input" className="form-control" type="text" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field name="email" component="input" className="email form-control" type="email" />
            </div>
            <div className="col offset-md-4">
              <button type="submit" className='btn btn-danger' disabled={pristine}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
