import React from 'react';
import { Form, Input, Button } from 'semantic-ui-react';

export const RegisterFormComponent = props => (
    <div>
        <Form>
            <Form.Field>
                <label htmlFor="email">Email</label>
                <Input id="email" type="text" icon="mail" placeholder="Email" />
            </Form.Field>
            <Form.Field>
                <label htmlFor="password">Password</label>
                <Input id="password" type="password" icon="lock" placeholder="Password" />
            </Form.Field>
            <Form.Field>
                <label htmlFor="repeat_password">Repeat Password</label>
                <Input id="password" type="password" icon="lock" placeholder="Repeat Password" />
            </Form.Field>
            <Button type="submit" primary>Register</Button>
        </Form>
    </div>
)