import styled from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import Button from "../ui/Button";
import Input from "../ui/Input";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>The Wild Oasis</H1>
        <Button>Click Me</Button>
        <Button>Click Me</Button>
        <Input type="text" placeholder="Enter your name" />
      </StyledApp>
    </>
  );
}

export default App;
