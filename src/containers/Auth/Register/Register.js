import React from 'react';

import { Grid } from 'semantic-ui-react'

import { RegisterFormComponent } from '../../../components/RegisterForm/RegisterFormComponent';

class RegisterComponent extends React.Component {

    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        // event.preventDefault();
        console.log(event)
    }

    render() {
        return (
            <Grid centered>
                <Grid.Column width={6}>
                    <RegisterFormComponent onFormSubmitted={this.onSubmit} />
                </Grid.Column>
            </Grid>

        )
    }
}

export default RegisterComponent;
