import { useCards } from '../../contexts/CardsProvider';
import { calculatePoint } from '../../helpers/calculatePoint';
import { Button } from '../../styles/global';

export default function StandButton() {
  const { playerCards, houseCards, setResult } = useCards();

  const handleStand = () => {
    const playerPoint = calculatePoint(playerCards);
    const housePoint = calculatePoint(houseCards);

    setResult(playerPoint > housePoint ? 1 : -1);
  };

  return <Button onClick={() => handleStand()}>Stand</Button>;
}
