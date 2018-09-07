import React from 'react';
import { Redirect, Route } from 'react-router-dom';

class PrivateRoute extends React.Component {
    render() {
        const { component: Component, isLoggedIn, ...rest } = this.props
        return (
            <Route {...rest} render={props => {
                return isLoggedIn === true ? <Component {...this.props} /> : <Redirect to="/login" />
            }} />

        )
    }
}

export default PrivateRoute;