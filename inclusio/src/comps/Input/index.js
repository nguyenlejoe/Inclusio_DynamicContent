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
        color: gray;
    }
`;

const Input = ({type, placeholder, header, onChange, value}) => {
    return <InputCont>
    <Label>{header}</Label>
    <InputBox defaultValue={value} type={type} placeholder={placeholder} onChange={onChange}/>
    </InputCont>
    
}

Input.defaultProps = {
    type: "text",
    placeholder: "Placeholder", 
    header: "Task Name",
    value:""
}

export default Input;