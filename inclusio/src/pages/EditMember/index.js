import React, {useEffect, useState} from 'react';
import './Edit.scss';
import Input from 'comps/Input';
import StatusTag from 'comps/StatusTag';
import Button from 'comps/Button';
import DropDown from 'comps/DropDown';
import axios from 'axios';
import {Link} from "react-router-dom";
import AvatarSelection from 'comps/AvatarSelection'

const EditMember = (props) => {

    var member = props.location.state.o;
    console.log(member)

    const [id, setId] = useState(member.id);
    const [img, setImg] = useState(member.img);
    const [name, setName] = useState(member.name);
    const [pos, setPos] = useState(member.pos);
    const [dep, setDep] = useState(member.dep);
    const [spec, setSpec] = useState(member.dep);
    const [status, setStatus] = useState(member.status);

    const onSave = async (id, img, name, pos, dep, spec, status) => {
        console.log(id, img, name, pos, dep, spec, status)
        var resp = await axios.put(`http://localhost:8080/api/members/${id}`, {id:id, img:img, name:name, pos:pos, dep:dep, spec:spec, status:status}); 
        console.log("new member", resp);
    }

    const HandleImg = (img) => {
        setImg(img);
        console.log('img',img)
    }

    const HandleStatus = (statusUpdate) =>{
        setStatus(statusUpdate);
        console.log(status)
    }

    useEffect(()=>{
    },[])

    return(
        <div className="EditPage">
            <div className="Header">
                <Link to="/">
                    <img src="/Back.svg" className="backImage"></img>
                </Link>
                <div className="title">
                    <h2>Edit Member</h2>
                </div>
            </div>
            
            <AvatarSelection newImg={HandleImg}></AvatarSelection>

            <div className="statusTag">
                <DropDown onStatus={HandleStatus}/>
                <StatusTag statusText={status}/>
            </div>

            <div className="TasksBox">
                <Input type='text' header={'Name'} placeholder={member.name} onChange={(e)=>{
                    setName(e.target.value)
                }}/>
                <Input type='text' header={'Position'} placeholder={member.pos} onChange={(e)=>{
                    setPos(e.target.value)
                }}/>
                <Input type='text' header={'Department'} placeholder={member.dep} onChange={(e)=>{
                    setDep(e.target.value)
                }}/>
                <Input  type='text' header={'Specialization'} placeholder={member.spec} onChange={(e)=>{
                    setSpec(e.target.value)
                }}/>
            </div>
            <div className="saveButton"> 
            
            <Button path={{pathname: '/Home'}} onClick={()=>{
                    onSave(id, img, name, pos, dep, spec, status)
                }}
                buttonText= "Save Changes"
                />
                
            </div>
        </div>
    );
}

export default EditMember;