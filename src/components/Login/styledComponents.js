import styled from 'styled-components'

export const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginCard = styled.div`
  width: 350px;
  padding: 32px;
  box-shadow: 0px 4px 16px 0px #bfbfbf;
`

export const Logo = styled.img`
  width: 150px;
  display: block;
  margin: 0 auto 24px auto;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const InputContainer = styled.div`
  margin-bottom: 16px;
`

export const Label = styled.label`
  font-family: Roboto;
  font-size: 12px;
  color: #475569;
`

export const Input = styled.input`
  width: 100%;
  height: 36px;
  margin-top: 4px;
  padding-left: 8px;
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`

export const Checkbox = styled.input`
  margin-right: 8px;
`

export const Button = styled.button`
  height: 36px;
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
  cursor: pointer;
`

export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 12px;
`
