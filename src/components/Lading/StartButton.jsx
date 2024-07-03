import React from 'react';
import { styled } from 'styled-components';

export default function StartButton() {
  return <StyledButton>시작하기</StyledButton>;
}

const StyledButton = styled.button`
  position: absolute;
  width: 326px;
  height: 60px;
  left: 32px;
  top: 734px;

  background: #ff6600;
  border-radius: 16px;
`;
