import React from 'react';
import {Container, InputHtml} from './styles';


interface InputProps{
    placeHolder: string;
    type: string;
}
export default function Input({placeHolder, type}: InputProps) {
  return (
    <Container>
        <InputHtml placeholder={placeHolder} type={type}  />
    </Container>
  )
}
