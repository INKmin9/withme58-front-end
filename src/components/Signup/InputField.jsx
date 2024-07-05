import React from 'react';
import styled from 'styled-components';

export default function InputField({ type, labelData, value, onHandlerChange }) {

  return (
    <Container>
      <Label>{labelData}</Label>
      <Input type={type} value={value} onChange={onHandlerChange}></Input>
    </Container>
  );
}
const Container = styled.div``;
const Label = styled.label``;
const Input = styled.input`
    width: 320px;
    height: 60px;
`;
