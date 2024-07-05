import React, { useState } from "react";
import styled, { css } from 'styled-components';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { PiExclamationMarkBold } from "react-icons/pi";
import { FaCircleExclamation } from "react-icons/fa6";



export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focusedField, setFocusedField] = useState(""); 
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [isLogined, setIsLogined] = useState(false);
  const [loginFail, setLoginFail] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const isLoginFormValid = email !== "" && password !== "";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogined===true){
    }
    else{
      setLoginFail(true);
    }
  };

  return (
    <LoginContainer>
      <form onSubmit={handleSubmit}>
        <Label isFocused={focusedField === "email" && email.length >= 0}>이메일</Label>
        <LabelDiv isFocused={focusedField === "email" && email.length >= 0}>
          <FaEnvelope size={24}/>
          <Input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={handleEmailChange}
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField("")}
          />
        </LabelDiv>
        <Label isFocused={focusedField === "password" && password.length >= 0} loginFail={loginFail}>비밀번호</Label>
        <LabelDiv isFocused={focusedField === "password" && password.length >= 0} loginFail={loginFail}>
          <FaLock size={24} />
          <Input
            type={passwordVisible ? "text" : "password"}
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={handlePasswordChange}
            onFocus={() => setFocusedField("password")}
            onBlur={() => setFocusedField("")}
            loginFail={loginFail}
          />
          <ToggleVisibilityIcon onClick={togglePasswordVisibility} passwordVisible={passwordVisible} loginFail={loginFail}>
            {passwordVisible ? <FaEye size={24}/> : <FaEyeSlash size={24}/>}
          </ToggleVisibilityIcon>
        </LabelDiv>
        {loginFail?<ErrorDiv><FaCircleExclamation/> 야 비번 틀렸다</ErrorDiv>:<div></div>}

        <Button 
        type="submit" disabled={!isLoginFormValid} isLoginFormValid={isLoginFormValid}
        loginFail={loginFail}>로그인</Button>
      </form>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  form {
    display: flex;
    flex-direction: column;
    margin: 55px 32px 0px 32px;
  }
`;

const Label = styled.label`
  font-size: 14px;
  // color: ${(props) => (props.isFocused ? '#ff6600' : '#535353')};
  color: ${(props) => (props.loginFail?'#EA4335':(props.isFocused ? '#ff6600' : '#535353')) };
  margin: 40px 0px 0px 0px;
  

`;

const LabelDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0px 0px 0px;
  position: relative;

  svg {
    position: absolute;
    left: 20px;
    color: ${(props) => (props.loginFail?'#EA4335':(props.isFocused ? '#ff6600' : '#8e8e8e')) };
  }
  

`;

const Input = styled.input`
  width: 326px;
  height: 60px;
  padding: 0px 0px 0px 50px; 
  border: ${(props) => (props.isFocused ? '2px solid #ff6600' : '0px')};
  border-radius: 16px;
  background-color: ${(props) => (props.isFocused ? '#fff' : '#f3f3f3')};
  font-size: 14px;

  &:hover {
    border: 2px solid #ff6600;
    background-color: #fff;
  }

  &:focus {
    border: 2px solid #ff6600;
    background-color: #fff;
  }

  ${(props) =>
    props.loginFail &&
    css`
      background-color: #FFE1E1;
      border: 2px solid #EA4335;
    `}
`;

const ToggleVisibilityIcon = styled.div`
  position: absolute;
  right: 76px;
  margin-top: -30px;
  cursor: pointer;
  // color: #8e8e8e;

  svg {
    color: ${(props) => (props.loginFail?'#EA4335':(props.passwordVisible ? '#ff6600' : '#8e8e8e'))};
  }
    
`;

const Button = styled.button`
  background-color: #a5a5a5;
  color: white;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  margin: 77px 0px 20px 0px;
  height: 60px;
  width: 326px;
  font-size: 16px;

  ${(props) =>
    props.isLoginFormValid &&
    css`
      background-color: #ff6600;
      
    `}

    ${(props) =>
      props.loginFail &&
      css`
        background-color: #ffb280;
      `}


 
    &:hover {
    background-color: #ffb280;
  }
`;

const ErrorDiv = styled.div`
    margin: 5px 0px 0px 0px;
    font-size: 14px;
    color: #EA4335;
`