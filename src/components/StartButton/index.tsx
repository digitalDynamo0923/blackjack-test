import { useState } from 'react';
import { Button } from '../../styles/global';
import { drawCard } from '../../utils/drawCard';
import { useCards } from '../../contexts/CardsProvider';

type Props = {
  newDeck?: boolean;
};

export default function StartButton({ newDeck }: Props) {
  const {
    setDeckId,
    setDeckRemaining,
    setHouseCards,
    setPlayerCards,
    setResult,
    deckRemaining,
    deckId,
    setError,
  } = useCards();
  const [loading, setLoading] = useState(false);

  const startGame = async () => {
    setLoading(true);
    setResult(0);
    const data = await drawCard(
      4,
      !deckId || newDeck || deckRemaining < 4 ? 'new' : deckId,
    );
    if (data.success) {
      setDeckId(data.deck_id);
      setDeckRemaining(data.remaining);
      setHouseCards(data.cards.slice(0, 2));
      setPlayerCards(data.cards.slice(2, 4));
    } else {
      setError(data.error);
    }
    setLoading(false);
  };

  return (
    <Button onClick={() => startGame()} disabled={loading}>
      {loading
        ? 'loading...'
        : newDeck
          ? deckId
            ? 'Restart with new deck'
            : 'Start'
          : 'Restart'}
    </Button>
  );
}
