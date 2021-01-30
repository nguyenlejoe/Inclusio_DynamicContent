import React, {useEffect, useState,} from 'react';
import styled from 'styled-components';


const SearchCont = styled.div`
    margin: 10px;
    height: 45px;
    width: 78%;
    border-radius: 13px;
    display: flex; 
    background-color: #F2F2F2;
    flex-direction: row;
    align-items:center;
    justify-content: center;
`;

const Input = styled.input`
    border: none;
    flex: 5;
    height: 90%;
    border-radius: 13px;
    background-color: #F2F2F2;
    outline: none;
`;

const SearchImg = styled.div`
    flex: .75;
    height: 80%;
    display:flex;
    position:relative;
    margin-left: 10px;
    background-size: contain;
    background-repeat:no-repeat;
    background-image:url(/Search.png);
    border-radius: 13px;
    margin-top: 7px;
`;



const SearchBar = ({placeholder, type}) => {

    return <SearchCont>
            <SearchImg />
            <Input type={type} placeholder={placeholder} />
        </SearchCont>
    
}

SearchBar.defaultProps = {
    type: "text",
    placeholder: "Type Here..."
}

export default SearchBar