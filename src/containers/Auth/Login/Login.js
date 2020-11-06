import React from 'react';

import { Grid } from 'semantic-ui-react'

import LoginFormComponent from '../../../components/LoginForm/LoginFormComponent';

export class LoginComponent extends React.Component {

    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        console.log(event);
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
