import React from 'react';
import { styled } from 'styled-components';

export default function StartButton() {
  return <StyledButton>시작하기</StyledButton>;
}

const StyledButton = styled.button`
  width: 326px;
  height: 60px;
  background-color: #ff7a00;
`;
