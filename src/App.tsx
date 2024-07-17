import styled from 'styled-components';
import CardsProvider from './contexts/CardsProvider';
import Homepage from './pages/Homepage';

const StyledContainer = styled.div`
  background: radial-gradient(circle, #1d8761, #0f2c27);
  height: 100vh;
`;

function App() {
  return (
    <CardsProvider>
      <StyledContainer>
        <Homepage />
      </StyledContainer>
    </CardsProvider>
  );
}

export default App;
