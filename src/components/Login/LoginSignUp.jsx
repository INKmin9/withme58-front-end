import React from "react";
import styled from "styled-components";

export default function LoginSignUP() {
    return (<FindDiv>
        아직 회원이 아니신가요?  <a href=""> 회원가입</a>
    </FindDiv>);
}


const FindDiv = styled.div`
    display: flex;
    position: absolute;
    bottom: 53px;
    left: 97px;
    justify-content: center;
    font-size: 14px;
    color: var(--Grayscale-5);

    a{
        color: var(--Orange-10);
    }
`;