import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
background-color: ${props=>props.bgcolor ? props.bgcolor : "#056571"};
min-width: ${props=>props.width ? props.width : "266px"};
min-height: ${props=>props.height ? props.height : "53px"}; 
border-radius: 100px;
border: ${props=>props.border ? props.border : "none"};
color: white;
`;

const Button = ({width, height,buttonText}) => {
    return <Container>{buttonText}</Container>

}

Button.defaultProps = {
width: null,
height: null,
buttonText: "Button",
bgcolor: "#056571",
border: "none"
}

export default Button;