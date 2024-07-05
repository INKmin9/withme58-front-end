import React from "react";
import styled from 'styled-components';
import LoginHeader from "../../components/Login/LoginHeader";
import LoginForm from "../../components/Login/LoginForm";
import LoginFind from "../../components/Login/LoginFind";
import LoginSignUP from "../../components/Login/LoginSignUp";

export default function LoginPage() {
  return (
    <PageContainer>
      <LoginHeader/>
      <LoginForm/>
      <LoginFind/>
      <LoginSignUP/>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  width: 390px;
  height: 844px;
  // background-color: #f0f; 
  position: relative;
`;