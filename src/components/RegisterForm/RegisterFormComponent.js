import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'semantic-ui-react';

export const RegisterFormComponent = props => {
    const [registerFormValue, setRegisterFormValue] = useState(({ email: 'ddd', password: '', repeatPassword: '' }));
    return <div>
        <Form onSubmit={() => props.onFormSubmitted(registerFormValue)}>
            <Form.Field>
                <label htmlFor="email">Email</label>
                <Input
                    id="email"
                    type="text"
                    icon="mail"
                    placeholder="Email"
                    value={registerFormValue.email}
                    onChange={(event => setRegisterFormValue({ ...registerFormValue, email: event.target.value }))}
                />
            </Form.Field>
            <Form.Field>
                <label htmlFor="password">Password</label>
                <Input
                    id="password"
                    type="password"
                    icon="lock"
                    placeholder="Password"
                    value={registerFormValue.password}
                    onChange={(event => setRegisterFormValue({ ...registerFormValue, password: event.target.value }))}
                />
            </Form.Field>
            <Form.Field>
                <label htmlFor="repeat_password">Repeat Password</label>
                <Input
                    id="repeat_password"
                    type="password"
                    icon="lock"
                    placeholder="Repeat Password"
                    value={registerFormValue.repeatPassword}
                    onChange={(event => setRegisterFormValue({ ...registerFormValue, repeatPassword: event.target.value }))}
                />
            </Form.Field>
            <Button type="submit" primary>Register</Button>
        </Form>
    </div>
}

RegisterFormComponent.propTypes = {
    onFormSubmitted: PropTypes.func
}