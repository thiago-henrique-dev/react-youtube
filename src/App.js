
import styled from "styled-components"
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";

const Container = styled.div`
  display: flex;
`
const Main = styled.div`
  flex: 7;
` 

const Wrapper = styled.div`
`

function App() {
  return (
    <Container>
        <Menu/>
          <Main>
            <Navbar/>
              <Wrapper>
                  
              </Wrapper>
          </Main>
    </Container>
    
  );
}

export default App;
