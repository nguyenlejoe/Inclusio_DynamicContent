import React, {useEffect, useState,} from 'react';
import styled, {css} from 'styled-components';

const InputCont = styled.div`
    height: 80px;
    width: 288px;
    left: 1196px;
    top: 922px;
    border-radius: 0px;
    margin: 10px;
`;

const Label = styled.label`
    margin-left: 10px;
    font-weight: bold;
`;

const InputBox = styled.input`
    height: 35px;
    width: 250px;
    border-radius: 13px;
    border: none;
    outline: none;
    margin: 10px;
    padding:7px 7px 7px 15px;
    background-color: #F2F2F2;

    ::placeholder {
        font-weight: bold;
        color: gray;
    }
`;

const Input = ({type, placeholder, header}) => {
    return <InputCont>
    <Label>{header}</Label>
    <InputBox type={type} placeholder={placeholder} />
    </InputCont>
    
}

Input.defaultProps = {
    type: "text",
    placeholder: "Placeholder", 
    header: "Task Name"
}

export default Input;