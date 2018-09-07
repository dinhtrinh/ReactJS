import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect, Route, Switch } from 'react-router-dom';
import { isEmpty } from 'lodash';
import AppConstants from '../Constants/AppConstants';
import PrivateRoute from './PrivateRoute';
import Wrapper from '../Wrapper';
import LoginPage from '../Views/Containers/LoginPage';
import ContactPage from '../Views/Containers/ContactPage';
import RingCentralPage from '../Views/Containers/RingCentralPage';

class AppRoute extends Component {
    render() {
        const { isLoggedIn, user } = this.props;
        const masterAdminRoute = (
            <Wrapper>
                <PrivateRoute path="/contact" component={ContactPage} isLoggedIn={isLoggedIn} />
                <PrivateRoute path="/ringcentral" component={RingCentralPage} isLoggedIn={isLoggedIn} />
            </Wrapper>
        );

        const userRoute = (
            <Wrapper>
                <PrivateRoute path="/ringcentral" component={RingCentralPage} isLoggedIn={isLoggedIn} />
            </Wrapper>
        );

        const renderAppRoute = () => {
            const roles = !isEmpty(user) ? user.roles : [];
            if (roles.includes(AppConstants.rolesGroup.MASTER_ADMIN))
                return masterAdminRoute;

            if (roles.includes(AppConstants.rolesGroup.USER))
                return userRoute;

            return (<Redirect to="/login" />);
        }

        return (
            <Switch>
                <Route path="/" exact render={() => (
                    isLoggedIn
                        ? <Redirect to="/ringcentral" />
                        : <Redirect to="/login" />
                )} />
                <Route path="/login" component={LoginPage} />
                {renderAppRoute()}
            </Switch>
        );
    }
}

const mapStateToProps = ({ login }) => ({
    isLoggedIn: login.isLoggedIn,
    user: login.userInformation
});

const connectAppRoute = connect(mapStateToProps, null)(AppRoute);
export default withRouter(connectAppRoute);