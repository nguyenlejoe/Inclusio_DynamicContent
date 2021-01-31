import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
background-color: ${props=>props.bgcolor ? props.bgcolor : "#056571"};
width:85px;
height:20px;
border-radius: 100px;
border: none;
display: flex;
align-items: center;
justify-content:center;
text-align:center;
color: white;
padding: 7px;
position: relative;
`;

const Text = styled.div`
width: 100%;
`;

const IconBox = styled.div`
min-width: 15px;
min-height: 15px;
background-image: url(/${props=>props.statusIcon ? props.statusIcon : "url('/complete.svg')"});
background-size: 100% 100%;
padding-right: 6px;
display: flex;
align-items: center;
justify-content:center;
`;



const StatusTag = ({statusText, statusIcon, bgcolor}) => {
    // Switch statement to change colors and icon depending on the status
    switch(statusText){
        case "Complete":
            bgcolor="#056571"
            statusIcon="complete.svg"
            break;

        case "In Progress":
            bgcolor="#32BDE9"
            statusIcon="inprogress.svg"
            break;
        
        case "Behind":
            bgcolor="#FF7F11"
            statusIcon="behind.svg"
            break;

        case "Overdue":
            bgcolor="#FF3B30"
            statusIcon="overdue.svg"
            break;

        case "Blocked":
            bgcolor="#A1A1A1"
            statusIcon="block.svg"
            break;
    }

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