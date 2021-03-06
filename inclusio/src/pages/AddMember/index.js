import React, {useEffect, useState} from 'react';
import './Add.scss';
import Input from 'comps/Input';
import StatusTag from 'comps/StatusTag';
import Button from 'comps/Button';
import DropDown from 'comps/DropDown';
import axios from 'axios';
import AvatarSelection from 'comps/AvatarSelection'

import {Link} from 'react-router-dom';

const AddMember = () => {

    const [img, setImg] = useState("/butterfly.svg");
    const [name, setName] = useState("");
    const [pos, setPos] = useState("");
    const [dep, setDep] = useState("");
    const [spec, setSpec] = useState("");
    const [status, setStatus] = useState("");

    const onSave = async (img, name, pos, dep, spec, status) => {
        var resp = await axios.post("http://localhost:8080/api/members", {img:img, name:name, pos:pos, dep:dep, spec:spec, status:status}); 
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

    return(
        <div className="AddPage">
            <div className="Header">
                    <Link to="/Home">
                    <img src="/Back.svg" className="backImage"></img>
                </Link>
                <div className="title">
                    <h2>Add Member</h2>
                </div>
            </div>

            <AvatarSelection newImg={HandleImg}></AvatarSelection>

            <div className="statusTag">
                <DropDown onStatus={HandleStatus}/>
                <StatusTag statusText={status}/>
            </div>
                

            <div className="TasksBox">
                <Input type='text' header={'Name'} placeholder={'Jon Doe'} onChange={(e)=>{
                    setName(e.target.value)
                }}/>
                <Input type='text' header={'Position'} placeholder={'Team Member'} onChange={(e)=>{
                    setPos(e.target.value)
                }}/>
                <Input type='text' header={'Department'} placeholder={'Design'} onChange={(e)=>{
                    setDep(e.target.value)
                }}/>
                <Input  type='text' header={'Specialization'} placeholder={'Graphic Design'} onChange={(e)=>{
                    setSpec(e.target.value)
                }}/>
            </div>
            <div className="saveButton"> 
            
            <Button path={{ pathname:'/Home'}} onClick={()=>{
                    onSave(img, name, pos, dep, spec, status)
                }}
                buttonText= "Save Changes"
                />
                
            </div>
        </div>
    );
}

export default AddMember;