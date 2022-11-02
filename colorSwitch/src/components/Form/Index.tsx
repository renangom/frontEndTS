import React from 'react'
import Input from '../Input/Index'
import { Container, LoginButton } from './styles'

export default function Form() {
    const theme = localStorage.getItem('color');
    console.log(theme)
  return (
    <Container>
        <h2> Login </h2>
        <Input placeHolder='Username' type='text' />
        <Input placeHolder='Password' type='password' />
        <LoginButton color={`${theme}`}> Login </LoginButton>
        <div>
            <a> Forget Password</a>
            <a> Signup </a>
        </div>
    </Container>
  )
}
