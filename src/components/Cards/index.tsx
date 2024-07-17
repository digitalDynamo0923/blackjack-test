import { calculatePoint } from '../../helpers/calculatePoint';
import {
  StyledCard,
  StyledCards,
  StyledCardsWrapper,
  StyledPointsView,
} from './style';

type Props = {
  cards: Card[];
  isPlayer?: boolean;
};

export default function Cards({ cards, isPlayer }: Props) {
  return (
    <StyledCards>
      {cards.length === 0 ? null : (
        <>
          <StyledPointsView>{calculatePoint(cards)}</StyledPointsView>
          <StyledCardsWrapper count={cards.length}>
            {cards.map((card, index) => (
              <StyledCard
                index={index}
                key={card.code}
                src={card.image}
                alt={card.code}
                className={isPlayer ? 'card-player' : 'card-house'}
              />
            ))}
          </StyledCardsWrapper>
        </>
      )}
    </StyledCards>
  );
}
