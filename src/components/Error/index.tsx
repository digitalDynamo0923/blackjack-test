import { useEffect } from 'react';
import { useCards } from '../../contexts/CardsProvider';
import { StyledError } from './style';

export default function Error() {
  const { error, setError } = useCards();

  useEffect(() => {
    if (!error) {
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  }, [error, setError]);

  if (!error) return null;
  return <StyledError>{error}</StyledError>;
}
