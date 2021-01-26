import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
background-color: ${props=>props.bgcolor ? props.bgcolor : "#056571"};
min-width: ${props=>props.width ? props.width : "45px"};
min-height: ${props=>props.height ? props.height : "45px"};
border: ${props=>props.border ? props.border : "none"}; 
border-radius: 100%;
border: none;
`;

const CircleBox = styled.img`
width: 100%;
height: 100%;
`;

const CircleButton = ({width, height}) => {
    return <Container><CircleBox src="/plus.svg"></CircleBox></Container>

}

CircleButton.defaultProps = {
width: null,
height: null,
bgcolor: "#056571",
border: "none"
}

export default CircleButton;