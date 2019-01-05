
import React from "react"
import { navigate } from "gatsby"
import View from 'components/view/View';
import Form from 'components/form/Form';
import { handleLogin, isLoggedIn } from 'services/auth';
import Segment from "components/segment/Segment";

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
  }

  handleUpdate(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit(values) {
    console.log('handleLogin', values);

    handleLogin(values)
  }

  render() {
    if (isLoggedIn()) {
      navigate(`/app/dashboard`)
    }

    return (
      <Segment>
        <View title="Skrá inn">
          <Form
            handleUpdate={e => this.handleUpdate(e)}
            handleSubmit={e => this.handleSubmit(e)}
          />
        </View>
      </Segment>
    )
  }
}

export default Login;