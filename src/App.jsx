import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <H1> Hello The-Wild-Oasis</H1>
      <Button>Click Me</Button>
    </>
  );
}

export default App;
