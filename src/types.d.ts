type Card = {
  code: string;
  image: string;
  images: {
    svg: string;
    png: string;
  };
  value: number | string;
  suit: string;
};

type DrawResponse = {
  success: true;
  deck_id: string;
  cards: Card[];
  remaining: number;
};

type DeckError = {
  success: false;
  error: string;
};
