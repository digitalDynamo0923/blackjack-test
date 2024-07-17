import { useCards } from '../../contexts/CardsProvider';
import StartButton from '../StartButton';
import { StyledRemainingCards } from './style';

export default function RemainingCards() {
  const { deckRemaining, deckId } = useCards();

  if (!deckId) return null;

  return (
    <StyledRemainingCards>
      <p>Remaining cards: {deckRemaining}</p>
      <StartButton newDeck />
    </StyledRemainingCards>
  );
}
