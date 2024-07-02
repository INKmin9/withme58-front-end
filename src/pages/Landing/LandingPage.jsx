import React from 'react';
import StartButton from '../../components/StartButton';
import styled from 'styled-components';

export default function LandingPage() {
  return (
    <PageContainer>
      <StartButton />;
    </PageContainer>
  );
}

const PageContainer = styled.div`
  width: 390;
  height: 844;
  background-color: #fff;
`;
