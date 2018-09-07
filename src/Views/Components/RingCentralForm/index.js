import React, { Component } from 'react';
import { Field } from 'redux-form';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

class RingCentralForm extends Component {

    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    renderHiddenField({ input: { value, onChange } }) {
        return (
            <input type="hidden" value={value} onChange={value => onChange(value)} />
        );
    }

    render() {
        const { onSubmit, pristine } = this.props;
        return (
            <div className="container">
                <div className='col col-4 col-sm-4 offset-md-4 contact-form'>
                    <form onSubmit={onSubmit}>
                        <Field name="id" component={this.renderHiddenField} />
                        <div className="form-group">
                            <label htmlFor="from">From:</label>
                            <Field name="from" component="input" className="form-control" type="text" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="to">To:</label>
                            <Field name="to" component="input" className="form-control" type="text" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="messages">Messages:</label>
                            <Field name="messages" component="textarea" row="3" className="email form-control" type="email" />
                        </div>
                        <div className="col offset-md-4">
                            <button type="submit" className='btn btn-danger' disabled={pristine}>Send</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default RingCentralForm;
