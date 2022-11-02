import React from 'react'
import Input from '../Input/Index'
import { Container, LoginButton, Title } from './styles'

export default function Form() {
    const theme = localStorage.getItem('color');
    console.log(theme)
  return (
    <Container>
        <Title color={`${theme}`}> Login </Title>
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
