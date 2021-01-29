import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
background: #F2F2F2;
border-radius: 6px;
height: 30px;
width: 85px;
display: flex;
justify-content: center;
align-items: center;

`;

const Text = styled.div`
color: #A1A1A1;

`;

const Icon = styled.div`
background-image: url('/down.svg');
width: 10px;
height: 10px;
margin-left: 5px;
`;

const Menu = styled.div`
background: #F2F2F2;
border-radius: 0px 0px 6px 6px;
height: 150px;
width: 85px;
display: flex;
align-items: center;
flex-direction: column;

`;

const Line = styled.div`
height: 0.9900970458984375px;
width: 85px;
left: 1290px;
background: linear-gradient(90deg, rgba(196, 196, 196, 0) 0%, rgba(196, 196, 196, 0) 0.01%, #C4C4C4 34.38%, #C4C4C4 68.75%, rgba(196, 196, 196, 0) 100%);


`;

const Complete = styled.div`
margin-top: 6px;
margin-bottom: 6px;

`;

const InProgress = styled.div`
margin-top: 6px;
margin-bottom: 6px;
`;

const Behind = styled.div`
margin-top: 6px;
margin-bottom: 6px;

`;

const Overdue = styled.div`
margin-top: 6px;
margin-bottom: 6px;

`;

const Blocked = styled.div`
margin-top: 6px;
margin-bottom: 6px;

`;

const DropDown = ({}) => {
    return <div>
        <Container>
        <Text>Status</Text>
        <Icon></Icon>
    </Container>
    <Menu>
        <Line></Line>
        <Complete>Complete</Complete>
        <Line></Line>
        <InProgress>In Progress</InProgress>
        <Line></Line>
        <Behind>Behind</Behind>
        <Line></Line>
        <Overdue>Overdue</Overdue>
        <Line></Line>
        <Blocked>Blocked</Blocked>
    </Menu>
    </div>

}

DropDown.defaultProps = {

}

export default DropDown;