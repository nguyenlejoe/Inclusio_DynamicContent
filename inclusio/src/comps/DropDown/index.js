import React, {useState} from 'react';
import styled from 'styled-components';

const Container = styled.div`
background: #F2F2F2;
border-radius: 6px;
height: 30px;
width: 85px;
display: flex;
justify-content: center;
align-items: center;
cursor:pointer;
margin: 10px;
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
margin-top: -4px;
height: 150px;
width: 85px;
display: ${props=> props.display ? props.display : "flex"};
align-items: center;
justify-content:center;
flex-direction: column;
margin-left: 10px;
position:absolute;
z-index:1;

`;

const Line = styled.div`
height: 0.9900970458984375px;
width: 85px;
left: 1290px;
background: linear-gradient(90deg, rgba(196, 196, 196, 0) 0%, rgba(196, 196, 196, 0) 0.01%, #C4C4C4 34.38%, #C4C4C4 68.75%, rgba(196, 196, 196, 0) 100%);


`;

const Complete = styled.div`

&:hover {
    background-color: #c9c9c9;
  }
  width: 100%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  cursor:pointer;
`;

const InProgress = styled.div`
&:hover {
    background-color: #c9c9c9;
  }
  width: 100%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  cursor:pointer;

`;

const Behind = styled.div`
&:hover {
    background-color: #c9c9c9;
  }
  width: 100%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  cursor:pointer;

`;

const Overdue = styled.div`
&:hover {
    background-color: #c9c9c9;
  }
  width: 100%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  cursor:pointer;
`;

const Blocked = styled.div`
border-radius: 0px 0px 6px 6px;
&:hover {
    background-color: #c9c9c9;
  }
  width: 100%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  cursor:pointer;

  
`;

const DropDown = ({onStatus}) => {

  const [menustate, setMenustate] = useState("none")
  const [status, setStatus] = useState('status')

    return <div>
        <Container onClick={()=>{
              if (menustate === "none"){
                setMenustate("flex")
            } else {
                setMenustate("none")
            }
        }}> 
        <Text >{status}</Text>
        <Icon></Icon>
    </Container>
    <Menu display={menustate}>
        <Line></Line>
        <Complete onClick={()=>{
          setStatus("Complete")
          onStatus("Complete")
        }}>Complete</Complete>
        <Line></Line>
        <InProgress onClick={()=>{
           setStatus("In Progress")
           onStatus("In Progress")
        }}>In Progress</InProgress>
        <Line></Line>
        <Behind onClick={()=>{
           setStatus("Behind")
           onStatus("Behind")
        }}>Behind</Behind>
        <Line></Line>
        <Overdue onClick={()=>{
          setStatus("Overdue")
          onStatus("Overdue")
        }}>Overdue</Overdue>
        <Line></Line>
        <Blocked onClick={()=>{
           setStatus("Blocked")
           onStatus("Blocked")
        }}>Blocked</Blocked>
    </Menu>
    </div>

}


DropDown.defaultProps = {

}

export default DropDown;