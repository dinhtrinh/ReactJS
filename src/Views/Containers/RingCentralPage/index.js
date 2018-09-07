import React, { Component } from 'react';
import RingCentralForm from './../../Components/RingCentralForm';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import {
  ringCentralSendSmsStart
} from './actions';


class RingCentralPage extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit = values => {
    const { ringCentralSendSms } = this.props;
    var arrPhone = values.to.split(';');
    let arrToPhone = [];
    arrPhone.map(element => {
      arrToPhone.push({ phoneNumber: element });
      return arrToPhone;
    });
    const request = {
      from: {
        phoneNumber: values.from
      },
      to: arrToPhone,
      text: values.messages
    }

    ringCentralSendSms(request);
  }

  render() {
    const { handleSubmit, pristine, initialValues } = this.props;
    return <RingCentralForm onSubmit={handleSubmit(this.submit)} pristine={pristine} initialValues={initialValues} />
  }
}

const ringcentralPageEntry = reduxForm({
  form: 'ringCentralForm',
  enableReinitialize: true,
  keepDirtyOnReinitialize: true
})(RingCentralPage);

const mapStateToProps = ({ ringCentral }) => ({

});

const mapDispatchToProps = (dispatch) => ({
  ringCentralSendSms: (request) => dispatch(ringCentralSendSmsStart(request))
});

export default connect(mapStateToProps, mapDispatchToProps)(ringcentralPageEntry);