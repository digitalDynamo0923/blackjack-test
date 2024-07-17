import { useCards } from '../../contexts/CardsProvider';
import HitButton from '../HitButton';
import StandButton from '../StandButton';
import StartButton from '../StartButton';
import { StyledPlayButtons } from './style';

export default function PlayButtons() {
  const { deckId } = useCards();

  return (
    <StyledPlayButtons>
      {deckId ? (
        <>
          <HitButton />
          <StandButton />
        </>
      ) : (
        <StartButton newDeck />
      )}
    </StyledPlayButtons>
  );
}
