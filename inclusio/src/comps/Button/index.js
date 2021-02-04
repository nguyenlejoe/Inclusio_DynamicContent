import React from 'react';
import styled from 'styled-components';
import {history, Link} from 'react-router-dom';

const Container = styled.button`
background-color: ${props=>props.bgcolor ? props.bgcolor : "#056571"};
width: ${props=>props.width ? props.width : "266px"};
height: ${props=>props.height ? props.height : "53px"}; 
border-radius: 100px;
border: ${props=>props.border ? props.border : ""};
color: ${props=>props.color ? props.color : "white"};
transition: 0.3s;
border: solid #056571 3px;
cursor:pointer;

&:hover {
    background: none;
    border: ${props=>props.hoverborder ? props.hoverborder: "solid #056571 3px"};
    color: ${props=>props.hovercolor ? props.hovercolor : "#056571"};
    transform: scale(1.03);
}
  :focus {
    outline: 0;
}
`;

const Button = ({width, height,buttonText, bgcolor, border, color, hovercolor, hoverborder, path, onClick}) => {
    return <Link to={path}>
    <Container width={width} height={height} bgcolor={bgcolor} border={border} onClick={onClick} color={color} hovercolor={hovercolor} hoverborder={hoverborder}>{buttonText}</Container>
    </Link>
}

Button.defaultProps = {
width: null,
height: null,
buttonText: "Button",
bgcolor: "#056571",
border: "",
color: "white",
hovercolor: "#056571",
hoverborder: "#056571"
}

export default Button;