import styled from 'styled-components';

export const Button = styled.button`
  background: linear-gradient(to bottom, #34caea, #1582a1);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 12px 30px;
  font-size: 1.2rem;
  letter-spacing: 0.05rem;
  cursor: pointer;
  min-width: 120px;

  &:hover {
    background: linear-gradient(to bottom, #56a9c0, #078bac);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;
