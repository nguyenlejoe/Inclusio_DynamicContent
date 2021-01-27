import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
background-color: ${props=>props.bgcolor ? props.bgcolor : "#056571"};
max-width: ${props=>props.width ? props.width : "84px"};
height: ${props=>props.height ? props.height : "25px"};
border-radius: 30px;
border: none;
display: flex;
align-items: center;
color: white;
font-size: 10px; //delete this later
font-weight: bold; //delete this later
padding-right: 1%;

`;

const Text = styled.div`
width: 100%;
`;

const IconBox = styled.div`
width: 40%;
height: 70%;
background-image: ${props=>props.statusIcon ? props.statusIcon : "url('/complete.svg')"};
background-size: 100% 100%;

`;

const StatusTag = ({statusText, statusIcon, bgcolor}) => {
    return <Container bgcolor={bgcolor}>
        <IconBox statusIcon={statusIcon}></IconBox><Text>{statusText}</Text>
        </Container>

}

StatusTag.defaultProps = {
bgcolor: "#056571",
statusText: "Complete",
statusIcon: "url('/complete.svg')"
}

export default StatusTag;