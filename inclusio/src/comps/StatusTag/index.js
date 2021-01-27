import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
background-color: ${props=>props.bgcolor ? props.bgcolor : "#056571"};
max-width: ${props=>props.width ? props.width : "84px"};
max-height: ${props=>props.height ? props.height : "21px"};
border-radius: 100px;
border: none;
display: flex;
align-items: center;
color: white;
font-size: 10px; //delete this later
font-weight: bold; //delete this later
padding: 4px;

`;

const Text = styled.div`
width: 100%;
`;

const IconBox = styled.div`
min-width: 13px;
min-height: 13px;
background-image: ${props=>props.statusIcon ? props.statusIcon : "url('/complete.svg')"};
background-size: 100% 100%;
padding-right: 6px;

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