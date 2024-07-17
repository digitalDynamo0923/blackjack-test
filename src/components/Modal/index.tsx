import { useEffect } from 'react';
import { ModalOverlay } from './style';
import { useCards } from '../../contexts/CardsProvider';
import { calculatePoint } from '../../helpers/calculatePoint';
import StartButton from '../StartButton';

export default function Modal() {
  const { result, playerCards, setResult } = useCards();

  useEffect(() => {
    const playerPoint = calculatePoint(playerCards);

    if (playerPoint > 21) {
      setResult(-1);
    }
  }, [playerCards.length, playerCards, setResult]);

  if (result === 0) return null;

  return (
    <ModalOverlay>
      <p>{result === 1 ? 'You Win!' : 'You Lose!'}</p>
      <StartButton />
    </ModalOverlay>
  );
}
