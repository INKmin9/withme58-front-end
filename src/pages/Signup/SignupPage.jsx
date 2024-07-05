import React from 'react';
import styled from 'styled-components';
import InputField from '../../components/Signup/InputField';

export default function SignupPage() {
  return (
    <PageContainer>
      <Title></Title>
      <BodyContainer>
        <InputField></InputField>
      </BodyContainer>
    </PageContainer>
  );
}
const PageContainer = styled.div`
  width: 390px;
  height: 844px;
  background-color: #d9d9d9; //나중에 깡흰색이 아니길 바랍니다
`;
const Title = styled.div`
  width: 390px;
  height: 56px;
  background-color: #fff; //나중에 깡흰색이아니길 바랍니다
  border: 1px solid black;
`;
const BodyContainer = styled.div`
  width: 326px;
  height: 420px;
  // background-color: #ccc; //나중에 깡흰색이아니길 바랍니다
  border: 1px solid black;
  margin: 0 auto;
  text-align: center;
`;
