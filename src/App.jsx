import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Heading from "./ui/Heading";
import Input from "./ui/Input";
import Row from "./ui/Row";

const StyledApp = styled.main`
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row type="horizontal">
          <Heading as="h1">The-Wild-Oasis</Heading>
          <div>
            <Button>Check-in</Button>
            <Button>Check-out</Button>
          </div>
        </Row>
        <Row type="vertical">
          <form>
            <Heading as="h3">Form</Heading>
            <Input type="number" placeholder="Number of guests" />
            <Input type="number" placeholder="Number of guests" />
          </form>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
