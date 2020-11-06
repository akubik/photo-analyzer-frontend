import React from "react";
import { Form, Button, Input,  } from "semantic-ui-react";
const authFormComponent = (props) => (
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

export default authFormComponent;
