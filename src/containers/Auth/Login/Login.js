import React from 'react';
import { connect } from 'react-redux';

import { Grid } from 'semantic-ui-react'

import { LoginFormComponent } from '../../../components/LoginForm/LoginFormComponent';
import { login } from '../../../store/actions/actions';


class LoginComponent extends React.Component {

    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.onLogin();
    }

    render() {
        return (
            <Grid centered>
                <Grid.Column width={6}>
                    <LoginFormComponent onFormSubmitted={this.onSubmit} />
                </Grid.Column>
            </Grid>

        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: () => dispatch(login())
    }
}

export default connect(null, mapDispatchToProps)(LoginComponent);
