import React, { useEffect } from "react"
import s from "./Form.scss";
import { navigate } from "@reach/router"
import { Form, Input, Button, Icon } from "antd";


class LoginForm extends React.Component {

  componentDidMount() {
    this.props.form.validateFields();
  }

  hasErrors = (fieldsError) => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

  handleSubmit = (e) => {
    const { handleSubmit, handleUpdate, form } = this.props;

    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        handleSubmit(values);
        navigate(`/app/dashboard`)
      }
    });
  }

  render() {
    const { handleSubmit, handleUpdate, form } = this.props;

    const {
      getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,
    } = form;

    // Only show error after a field is touched.
    const userNameError = isFieldTouched('username') && getFieldError('username');
    const passwordError = isFieldTouched('password') && getFieldError('password');

    return (
      <Form
        className={s.form}
        method="post"
        onSubmit={this.handleSubmit}
      >
        <Form.Item
          validateStatus={userNameError ? 'error' : ''}
          help={userNameError || ''}
        >
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Kennitala" size="large" />
          )}
        </Form.Item>
        <Form.Item
          validateStatus={passwordError ? 'error' : ''}
          help={passwordError || ''}
        >
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Lykilorð" size="large" />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            disabled={this.hasErrors(getFieldsError())}
          >
            Skrá inn
            </Button>
        </Form.Item>
      </Form>
    );

  }
}

export default Form.create()(LoginForm);