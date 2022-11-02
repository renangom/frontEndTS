import React, { useEffect, useState } from 'react'
import { Container, Span } from './styles'

export default function Colors() {
    const [theme, setTheme] = useState('');

    useEffect(() => {
        const currentTheme = localStorage.getItem('color');
        if(currentTheme){
            setTheme(currentTheme)
        }
    }, [theme])

    const setActive = (color : string) => {
        setTheme(color);
        localStorage.setItem('color', color);
        window.location.reload()
    }
  return (
    <Container>
        <Span onClick={() => setActive("#1dd1a1")} color="#1dd1a1"></Span>
        <Span onClick={() => setActive("#ff6b6b")}  color="#ff6b6b"></Span>
        <Span onClick={() => setActive("#2e86de")}  color="#2e86de"></Span>
        <Span onClick={() => setActive("#f368e0")} color="#f368e0"></Span>
        <Span onClick={() => setActive("#ff9f43")}  color="#ff9f43"></Span>
    </Container>
  )
}
