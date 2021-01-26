import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
background-color: ${props=>props.bgcolor ? props.bgcolor : "#056571"};
width: ${props=>props.width ? props.width : "84px"};
height: ${props=>props.height ? props.height : "25px"};
border-radius: 30px;
border: none;
display: flex;
align-items: center;
color: white;
font-size: 10px; //delete this later
font-weight: bold; //delete this later

`;

const Text = styled.div`
position: relative;
left: -10px;
`;

const IconBox = styled.img`
width: 70%;
height: 70%;
position: relative;
left: -5px;
`;

const StatusTag = ({width, height, statusText}) => {
    return <Container><IconBox src="/complete.svg"></IconBox><Text>{statusText}</Text></Container>

}

StatusTag.defaultProps = {
width: null,
height: null,
bgcolor: "#056571",
statusText: "Status"
}

export default StatusTag;