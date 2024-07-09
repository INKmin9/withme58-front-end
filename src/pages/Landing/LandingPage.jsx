import React from 'react';
import StartButton from '../../components/Lading/StartButton';
import PagenaionForLanding from '../../components/Lading/PagenationForLanding';
import styled from 'styled-components';

export default function LandingPage() {
  return (
    <PageContainer>
      <PagenaionForLanding />
      <StartButton />
    </PageContainer>
  );
}

const PageContainer = styled.div``;
