import React, { Component } from 'react';
import LoginForm from './../../Components/LoginForm';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import {
    loginUserStart
} from './actions';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit = values => {
        const { loginUser, history } = this.props;
        loginUser(values, history);
    }

    render() {
        const { handleSubmit, pristine, initialValues } = this.props;
        return <LoginForm onSubmit={handleSubmit(this.submit)} pristine={pristine} initialValues={initialValues} />
    }
}

const loginPageEntry = reduxForm({
    form: 'loginForm',
    enableReinitialize: true,
    keepDirtyOnReinitialize: true
})(LoginPage);

const mapStateToProps = ({ login }) => ({

});

const mapDispatchToProps = (dispatch) => ({
    loginUser: (account, history) => dispatch(loginUserStart(account, history))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(loginPageEntry));