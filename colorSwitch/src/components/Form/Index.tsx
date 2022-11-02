import React from 'react'
import Input from '../Input/Index'
import { Container } from './styles'

export default function Form() {
  return (
    <Container>
        <h2> Login </h2>
        <Input placeHolder='Username' type='text' />
        <Input placeHolder='Password' type='password' />
    </Container>
  )
}
