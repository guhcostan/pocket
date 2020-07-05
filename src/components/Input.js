import styled from "styled-components";
import React from "react";
const CustomInput = styled.input`
  height: 2rem;
  width: 100%;
`
const Label = styled.p`
  height: 2rem;
  width: 100%;
`

const Input = (props) => {
    return <div>
        <Label>{props.label}</Label>
        <CustomInput {...props}/>
    </div>
}
export default Input