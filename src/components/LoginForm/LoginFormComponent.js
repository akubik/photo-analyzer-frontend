import React from "react";
import PropTypes from 'prop-types';

import { Form, Button, Input, } from "semantic-ui-react";

export const LoginFormComponent = (props) => (
  <div>
    <Form onSubmit={props.onFormSubmitted}>
      <Form.Field>
        <label htmlFor="login"></label>
        <Input type="text" icon="mail" placeholder="Email" />
      </Form.Field>
      <Form.Field>
        <label htmlFor="password"></label>
        <Input type="password" icon="lock" placeholder="Password" />
      </Form.Field>
      <Button type="submit" primary>Login</Button>
    </Form>
  </div>
);

LoginFormComponent.propTypes = {
  onFormSubmitted: PropTypes.func
}

