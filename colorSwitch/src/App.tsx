import styled from 'styled-components'
import Colors from './components/Colors/Index';
import Form from './components/Form/Index'
import { GlobalStyle } from './GlobalStyle'

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.color};
`;
function App() {
  const theme = localStorage.getItem('color')
  return (
    <Container color={`${theme}`}>
      <Form />
      <Colors />
      <GlobalStyle />

    </Container>
  )
}

export default App
