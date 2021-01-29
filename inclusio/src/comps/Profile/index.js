import React, {useState} from 'react';
import styled from 'styled-components';
import Status from 'comps/StatusTag';
import {Link} from "react-router-dom";

const CompContainer = styled.div`

`;

const Container = styled.div`
display:flex;
position:relative;
left:${props=>props.left ? props.left : '0px'};
transition: all 0.4s ease;
`;

const ProfileCont = styled.div`
display:flex;
flex-direction: column;

min-width:100%;
// min-width:320px;
// max-width:414px;
min-height:100px;

background-color:white;

z-index:0;
`;

const Content = styled.div`
display:flex;
align-items:center;

height:100%;
padding:15px 40px 15px 15px ;
`;

    const Avatar = styled.div`
    height:75px;
    width:75px;
    border-radius: 50%;
    background-color: #ccc;
    background-image:url(${props=>props.bgimg ? props.bgimg : "/user.png"});
    background-size:cover;
    background-repeat: no-repeat;
    background-position:center;
    `;

    const Info = styled.div`
    flex-grow:1;
    margin:0px 15px;
    & > span{
        display:none;
    }
    @media (min-width: 641px) {
        display:flex;
        justify-content:space-around;
      }
    @media (min-width:1008px) {
    display:flex;
    justify-content:space-around;
    & > span{
        display:flex;
    }
    & > h3{
        display:none;
    }
    }
    `;

const Divider = styled.div`
width:100%;
height: 1px;
background: linear-gradient(90deg, #FFF 10%, #E0E0E0 30%, #E0E0E0 60%, #FFF 90%);
`;

const Expand = styled.div`
cursor:pointer;
`;

const Edit = styled.div`
display:flex;
justify-content:center;
align-items:center;

position:relative;
right:${props=>props.right ? props.right : '0px'};
transition: all 0.4s ease;

min-height:100%;
min-width:100px;
background: #056571;
z-index:-1;
cursor:pointer;
`;

const Bin = styled.div`
display:flex;
justify-content:center;
align-items:center;

position:relative;
right:${props=>props.right ? props.right : '0px'};
transition: all 0.4s ease;

min-width:100px;
background: #FF7F11;
z-index:-2;
cursor:pointer;
`;

//Default member
let tmpMember = [
    {
        img: "https://picsum.photos/200",
        name: "Name of Member",
        pos: "Position",
        dep: "Department",
        spec: "Specialization",
        status: "In Progress" ,
    }
]

const Profile = ({members}) => {
    const [display, setDisplay] = useState(false);

    const HandleClicked = ()=>{
        setDisplay(!display)
    }

    return (
        <CompContainer>
            {members && members.map(o=> <Container left={display === true ? '-200px' : '0px'}>
                <ProfileCont>
                    <Content>
                        <Avatar bgimg={o.img}/>
                        <Info>
                            <h3>{o.name}</h3>
                            <span><p>{o.name}</p></span>
                            <span><p>{o.pos}</p></span>
                            <span><p>{o.dep}</p></span>
                            <p>{o.spec}</p>
                            <Status statusText={o.status}/>
                        </Info>
                        <Expand onClick={HandleClicked}>
                        <img src={"expand.svg"}/>
                        </Expand>
                    </Content>
                    <Divider/>
                </ProfileCont>
                <Link style={{ textDecoration: 'none' }} to={{ pathname: "/EditMember", state: {o} }}>
                    <Edit
                        right={display === true ? '0px' : '100px'}>
                            <img src={"edit.svg"}/>
                    </Edit>
                </Link>
                <Bin onClick={()=>{

                }}
                right={display === true ? '0px' : '200px'}>
                    <img src={"bin.svg"}/></Bin>
        </Container>
        )}
    </CompContainer>
    );
}

Profile.defaultProps = {
    members: tmpMember
}

export default Profile