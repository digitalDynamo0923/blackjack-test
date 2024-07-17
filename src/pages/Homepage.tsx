import { useCards } from '../contexts/CardsProvider';
import styled from 'styled-components';
import Cards from '../components/Cards';
import PlayButtons from '../components/PlayButtons';
import RemainingCards from '../components/RemainingCards';
import Error from '../components/Error';
import Modal from '../components/Modal';

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export default function Homepage() {
  const { houseCards, playerCards } = useCards();

  return (
    <StyledPage>
      <Cards cards={houseCards} />
      <PlayButtons />
      <Cards isPlayer cards={playerCards} />
      <RemainingCards />
      <Modal />
      <Error />
    </StyledPage>
  );
}
