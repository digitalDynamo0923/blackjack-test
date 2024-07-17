import React, { useContext } from 'react';

type Context = {
  deckId: string | null;
  setDeckId: React.Dispatch<React.SetStateAction<string | null>>;
  deckRemaining: number;
  setDeckRemaining: React.Dispatch<React.SetStateAction<number>>;
  houseCards: Card[];
  setHouseCards: React.Dispatch<React.SetStateAction<Card[]>>;
  playerCards: Card[];
  setPlayerCards: React.Dispatch<React.SetStateAction<Card[]>>;
  result: 1 | 0 | -1;
  setResult: React.Dispatch<React.SetStateAction<1 | 0 | -1>>;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
};

const CardsContext = React.createContext<Context>({} as Context);

const CardsProvider = ({ children }: { children: React.ReactNode }) => {
  const [deckId, setDeckId] = React.useState<string | null>(null);
  const [deckRemaining, setDeckRemaining] = React.useState<number>(0);
  const [houseCards, setHouseCards] = React.useState<Card[]>([]);
  const [playerCards, setPlayerCards] = React.useState<Card[]>([]);
  const [result, setResult] = React.useState<1 | 0 | -1>(0);
  const [error, setError] = React.useState<string | null>(null);

  return (
    <CardsContext.Provider
      value={{
        deckId,
        setDeckId,
        deckRemaining,
        setDeckRemaining,
        houseCards,
        setHouseCards,
        playerCards,
        setPlayerCards,
        result,
        setResult,
        error,
        setError,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
};

export const useCards = () => useContext(CardsContext);
export default CardsProvider;
