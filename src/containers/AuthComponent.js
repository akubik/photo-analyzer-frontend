import React from 'react';

import LoginFormComponent from '../components/LoginFormComponent';

export class AuthComponent extends React.Component {

    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        console.log(event);
    }

    render() {
        return <LoginFormComponent onFormSubmitted={this.onSubmit}/>
    }
}
