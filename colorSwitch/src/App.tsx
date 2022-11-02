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
  background-color: #1dd1a1;
`;
function App() {

  return (
    <Container>
      <Form />
      <Colors />
      <GlobalStyle />

    </Container>
  )
}

export default App
