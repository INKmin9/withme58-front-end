import React from 'react';
import StartButton from '../../components/StartButton';

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
