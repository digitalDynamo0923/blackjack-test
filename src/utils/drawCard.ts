import { apiService } from '../services/apiService';

export const drawCard = async (count: number, deckId: string) => {
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${count}`;
  return await apiService.get<DrawResponse | DeckError>(url);
};
