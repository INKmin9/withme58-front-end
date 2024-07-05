import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import InputField from '../../components/Signup/InputField';
import { useNavigate } from 'react-router-dom';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  return (
    <PageContainer>
      <Title></Title>
      <BodyContainer>

        {/*이거에 맞춰서 짜셈*/}
        <InputField type="text" labelData="이메일" value={email} onHandlerChange={(e) => setEmail(e.target.value)}/>
        <InputField labelData="닉네임" />
        <InputField type="password" labelData="비밀번호" />
        <InputField labelData="비밀번호 확인" />
      </BodyContainer>

      {/*로그인 화면으로 보내기 navigate(-1) -> 이전페이지로*/}
      <button onClick={() => navigate("/login")}>로그인으로</button>
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
`;
