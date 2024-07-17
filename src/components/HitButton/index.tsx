import { useState } from 'react';
import { Button } from '../../styles/global';
import { drawCard } from '../../utils/drawCard';
import { useCards } from '../../contexts/CardsProvider';

export default function HitButton() {
  const [loading, setLoading] = useState(false);
  const {
    setPlayerCards,
    setDeckRemaining,
    setError,
    playerCards,
    deckId,
    deckRemaining,
  } = useCards();

  const handleHit = async () => {
    if (!deckId) return;
    setLoading(true);
    setError(null);
    const data = await drawCard(1, deckRemaining === 0 ? 'new' : deckId);
    if (data.success) {
      setDeckRemaining(data.remaining);
      setPlayerCards([...playerCards, ...data.cards]);
    } else {
      setError(data.error);
    }
    setLoading(false);
  };

  return (
    <Button onClick={() => handleHit()} disabled={loading || !deckId}>
      {loading ? 'Loading...' : 'Hit'}
    </Button>
  );
}
