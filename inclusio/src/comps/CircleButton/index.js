import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
background-color: ${props=>props.bgcolor ? props.bgcolor : "#056571"};
width: ${props=>props.width ? props.width : "45px"};
height: ${props=>props.height ? props.height : "45px"};
border: ${props=>props.border ? props.border : "none"}; 
border-radius: 100%;
border: none;
`;

const CircleBox = styled.img`
width: 80%;
height: 80%;
background-size: 100% 100%;
`;

const CircleButton = ({width, height, bgcolor, border}) => {
    return <Container width={width} height={height} bgcolor={bgcolor} border={border}><CircleBox src="/plus.svg"></CircleBox></Container>

}

CircleButton.defaultProps = { 
width: null,
height: null,
bgcolor: "#056571",
border: "none"
}

export default CircleButton;