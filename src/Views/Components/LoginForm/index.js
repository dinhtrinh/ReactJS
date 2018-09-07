import React, { Component } from 'react';
import { Field } from 'redux-form';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

class LoginForm extends Component {
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
                            <label htmlFor="user">User:</label>
                            <Field name="user" component="input" className="form-control" type="email"  />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <Field name="password" component="input" className="form-control" type="password" />
                        </div>
                        <div className="col offset-md-4">
                            <button type="submit" className='btn btn-danger' disabled={pristine}>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginForm;
