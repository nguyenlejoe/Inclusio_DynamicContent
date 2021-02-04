import React, {useState} from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
align-items: center;
`;


const SelectionBox = styled.div`
display: flex;
align-items: center;
margin-left: 8px;
`;

const AvatarIconCont = styled.div`
height: 73px;
width: 73px;
border-radius: 0px;
background: #DAF1D9;
border-radius: 100px;
display: flex;
align-items: center;
justify-content: center;
`;

const AvatarIcon = styled.div`
background-image:url(${props => props.avatar ? props.avatar : '/butterfly.svg'});
width: 70%;
height: 70%;
background-size: contain;
background-repeat: no-repeat;
background-position:center;

`;


const Triangle = styled.div`
width: 0; 
height: 0; 
border-top: 14px solid transparent;
border-bottom: 14px solid transparent; 
border-right: 14px solid #056571; 
margin-right: -3px;

`;

const Box = styled.div`
height: 110px;
width: 195px;
border-radius: 10px;
background: #056571;
border-radius: 10px;
display: flex;
flex-direction: column;

`;

const Avatar1 = styled.div`
height: 36px;
width: 36px;
background-color: #DAF1D9;
border-radius: 0px;
border-radius: 100px;
border: ${props => props.active ? props.active : "solid 3px rgba(255, 255, 255,.5)"};
display: flex;
justify-content: center;
align-items: center;
transition: all 0.3s;
`;

const Avatar2 = styled.div`
height: 36px;
width: 36px;
background-color: #DAF1D9;
border-radius: 0px;
border-radius: 100px;
display: flex;
justify-content: center;
align-items: center;
border: ${props => props.active ? props.active : "solid 3px rgba(255, 255, 255,.5)"};
transition: all 0.3s;
`;

const Avatar3 = styled.div`
height: 36px;
width: 36px;
background-color: #DAF1D9;
border-radius: 0px;
border-radius: 100px;
display: flex;
justify-content: center;
align-items: center;
border: ${props => props.active ? props.active : "solid 3px rgba(255, 255, 255,.5)"};
transition: all 0.3s;

`;

const Avatar4 = styled.div`
height: 36px;
width: 36px;
background-color: #DAF1D9;
border-radius: 0px;
border-radius: 100px;
display: flex;
justify-content: center;
align-items: center;
border: ${props => props.active ? props.active : "solid 3px rgba(255, 255, 255,.5)"};
transition: all 0.3s;


`;

const Avatar5 = styled.div`
height: 36px;
width: 36px;
background-color: #DAF1D9;
border-radius: 0px;
border-radius: 100px;
display: flex;
justify-content: center;
align-items: center;
border: ${props => props.active ? props.active : "solid 3px rgba(255, 255, 255,.5)"};
transition: all 0.3s;

`;

const Avatar6 = styled.div`
height: 36px;
width: 36px;
background-color: #DAF1D9;
border-radius: 0px;
border-radius: 100px;
display: flex;
justify-content: center;
align-items: center;
border: ${props => props.active ? props.active : "solid 3px rgba(255, 255, 255,.5)"};
transition: all 0.3s;

`;

const AvatarCont1 = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
margin-bottom: 10px;
margin-top: 10px;

`;

const AvatarCont2 = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
margin-bottom: 10px;

`;

const Icon1 = styled.div`
background-image: url('/butterfly.svg');
width 60%;
height: 60%;
background-size: cover;
background-repeat: no-repeat;
background-position:center;
`;

const Icon2 = styled.div`
background-image: url('/dolphin.svg');
width 60%;
height: 60%;
background-size: cover;
background-repeat: no-repeat;
background-position:center;
`;

const Icon3 = styled.div`
background-image: url('/dog.svg');
width 65%;
height: 65%;
background-size: contain;
background-repeat: no-repeat;
background-position:center;
`;

const Icon4 = styled.div`
background-image: url('/bear.svg');
width 65%;
height: 65%;
background-size: contain;
background-repeat: no-repeat;
background-position:center;
`;

const Icon5 = styled.div`
background-image: url('/rabbit.svg');
width 65%;
height: 65%;
background-size: contain;
background-repeat: no-repeat;
background-position:center;
`;

const Icon6 = styled.div`
background-image: url('/squirrel.svg');
width 65%;
height: 65%;
background-size: contain;
background-repeat: no-repeat;
background-position:center;
`;


const AvatarSelection = ({newImg}) => {

    const [selectedAvatar, setSelectedAvatar] = useState('/butterfly.svg');
    const [active1, setActive1] = useState("solid 3px transparent")
    const [active2, setActive2] = useState("solid 3px transparent")
    const [active3, setActive3] = useState("solid 3px transparent")
    const [active4, setActive4] = useState("solid 3px transparent")
    const [active5, setActive5] = useState("solid 3px transparent")
    const [active6, setActive6] = useState("solid 3px transparent")

    newImg(selectedAvatar)



    const AvatarReset = () =>{
        setActive1("solid 3px transparent")
        setActive2("solid 3px transparent")
        setActive3("solid 3px transparent")
        setActive4("solid 3px transparent")
        setActive5("solid 3px transparent")
        setActive6("solid 3px transparent")
        
    }
    
    const AvatarClick = (n) => {
    if(n === 1){
        AvatarReset()
        setActive1("solid 3px #FF7F11")
        setSelectedAvatar('/butterfly.svg')
    } else if(n === 2){
        AvatarReset()
        setActive2("solid 3px #FF7F11")
        setSelectedAvatar('/dolphin.svg')
    } else if(n === 3){
        AvatarReset()
        setActive3("solid 3px #FF7F11")
        setSelectedAvatar('/dog.svg')
    } else if(n === 4){
        AvatarReset()
        setActive4("solid 3px #FF7F11")
        setSelectedAvatar('/bear.svg')
    } else if(n === 5){
        AvatarReset()
        setActive5("solid 3px #FF7F11")
        setSelectedAvatar('/rabbit.svg')
    } else if(n === 6){
        AvatarReset()
        setActive6("solid 3px #FF7F11")
        setSelectedAvatar('/squirrel.svg')
    }
    newImg(selectedAvatar)
}

    return <Container>
        {/*This shows the avatar that was selected*/}
        <AvatarIconCont><AvatarIcon avatar={selectedAvatar}></AvatarIcon></AvatarIconCont>

        {/*This is for the options of the avatar icons*/}
        <SelectionBox>
            <Triangle></Triangle>
            <Box>
                <AvatarCont1>
                    <Avatar1 active={active1} onClick={()=>{
                        AvatarClick(1)
                    }}><Icon1></Icon1></Avatar1>
                    <Avatar2 active={active2} onClick={()=>{
                        AvatarClick(2)
                    }}><Icon2></Icon2></Avatar2>
                    <Avatar3 active={active3} onClick={()=>{
                        AvatarClick(3)
                    }}><Icon3></Icon3></Avatar3>
                </AvatarCont1>
                <AvatarCont2>
                    <Avatar4 active={active4} onClick={()=>{
                        AvatarClick(4)
                    }}><Icon4></Icon4></Avatar4>
                    <Avatar5 active={active5} onClick={()=>{
                        AvatarClick(5)
                    }}><Icon5></Icon5></Avatar5>
                    <Avatar6 active={active6} onClick={()=>{
                        AvatarClick(6)
                    }}><Icon6></Icon6></Avatar6>
                </AvatarCont2>
            </Box>
        </SelectionBox>
    </Container>
    
    
}

AvatarSelection.defaultProps = {

}

export default AvatarSelection;