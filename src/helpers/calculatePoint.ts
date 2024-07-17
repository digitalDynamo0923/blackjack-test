export const calculatePoint = (cards: Card[]): number => {
  let point = 0;
  let aces = 0;

  cards.forEach((card) => {
    if (card.value === 'ACE') {
      aces++;
    }
    switch (card.value) {
      case 'JACK':
      case 'QUEEN':
      case 'KING':
        point += 10;
        break;

      case 'ACE':
        point += 11;
        break;

      default:
        point += parseInt(card.value.toString());
        break;
    }
  });

  while (point > 21 && aces > 0) {
    point -= 10;
    aces--;
  }

  return point;
};
