import React from 'react';
import { InputBox, InputHtml} from './styles';


interface InputProps{
    placeHolder: string;
    type: string;
}
export default function Input({placeHolder, type}: InputProps) {
  return (
        <InputBox>
            <InputHtml placeholder={placeHolder} type={type}  />
        </InputBox>
  )
}
