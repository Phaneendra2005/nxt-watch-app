import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  LoginContainer,
  LoginCard,
  Logo,
  Form,
  InputContainer,
  Label,
  Input,
  CheckboxContainer,
  Checkbox,
  Button,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    errorMsg: '',
    showError: false,
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({errorMsg, showError: true})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const userDetails = {username, password}
    const response = await fetch('https://apis.ccbp.in/login', {
      method: 'POST',
      body: JSON.stringify(userDetails),
    })

    const data = await response.json()

    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, showPassword, showError, errorMsg} = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <LoginContainer>
        <LoginCard>
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <Form onSubmit={this.submitForm}>
            <InputContainer>
              <Label htmlFor="username">USERNAME</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={e => this.setState({username: e.target.value})}
              />
            </InputContainer>

            <InputContainer>
              <Label htmlFor="password">PASSWORD</Label>
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => this.setState({password: e.target.value})}
              />
            </InputContainer>

            <CheckboxContainer>
              <Checkbox
                id="showPassword"
                type="checkbox"
                checked={showPassword}
                onChange={() =>
                  this.setState(prev => ({
                    showPassword: !prev.showPassword,
                  }))
                }
              />
              <Label htmlFor="showPassword">Show Password</Label>
            </CheckboxContainer>

            <Button type="submit">Login</Button>
            {showError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
          </Form>
        </LoginCard>
      </LoginContainer>
    )
  }
}

export default Login
