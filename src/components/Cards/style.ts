import styled from 'styled-components';

export const StyledCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(50% - 80px);
  position: relative;
`;

export const StyledCardsWrapper = styled.div<{ count: number }>`
  width: ${({ count }) => `${count * 5}vh`};
  height: 80%;
  position: relative;
  transform: translateX(-5vw);
`;

export const StyledCard = styled.img<{ index: number }>`
  width: auto;
  height: 100%;
  position: absolute;
  left: ${({ index }) => `${index * 5}vh`};
`;

export const StyledPointsView = styled.div`
  width: 150px;
  height: 150px;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  color: white;
  font-weight: bold;
  left: 50%;
  transform: translateX(-250%);
  border-radius: 50%;
  font-size: 3rem;
`;
