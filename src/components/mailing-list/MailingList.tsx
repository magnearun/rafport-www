import React, { Children, cloneElement } from 'react';
import ReactDOM from 'react-dom';

import Logo from 'assets/images/rafport-icon.png';

import s from './MailingList.scss';

import {
  Form, Input, Button,
} from 'antd';
import Segment, { EColor } from 'components/segment/Segment';

interface IState {
  loading: boolean;
  success: boolean;
}

const encode = (data: any) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class RegistrationForm extends React.Component<IState> {

  formEl = React.createRef();

  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    success: false,
    loading: false,
  };

  componentDMount() {
    const formNode: any = ReactDOM.findDOMNode(this.formEl.current);

    formNode && formNode.setAttribute('data-netlify', true);
    formNode && formNode.setAttribute('data-netlify-honeypot', 'bot-field');
  }


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.setState({ loading: true });

        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ ...values })
        })
          .then(() => {
            this.setState({ loading: false, success: true });
            alert("Success!")
          })
          .catch(error => {
            this.setState({ loading: false, success: false });

            alert(error)
          });
      }
    });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Segment color={EColor.GRAY}>
        <div className={s.form}>
        <img src={Logo} className={s.form__image} />
        <h2 className={s.form__heading}>Póstlisti Rafports</h2>
          <form name="mailing-list" onSubmit={this.handleSubmit} className={s.form__form} ref={this.formEl} netlify data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="mailing-list" />
            <Form.Item
              // {...formItemLayout}
            >
              {getFieldDecorator('email', {
                rules: [{
                  type: 'email', message: 'The input is not valid E-mail!',
                }, {
                  required: true, message: 'Please input your E-mail!',
                }],
              })(
                <Input
                  placeholder="Netfang þitt"
                  size="large"
                  name="email"
                  className={s.form__input}
                  onChange={this.handleChange}
                  enterButton="Send"
                />
              )}
            </Form.Item>
              <Button htmlType="submit" size="large" loading={this.state.loading} className={s.form__button}>Skrá mig</Button>
          </form>
        </div>

      </Segment>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

export default WrappedRegistrationForm;