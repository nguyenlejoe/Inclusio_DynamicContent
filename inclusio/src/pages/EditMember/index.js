import React, {useEffect, useState} from 'react';
import './Edit.scss';
import Input from 'comps/Input';
import StatusTag from 'comps/StatusTag';
import Button from 'comps/Button';
import axios from 'axios';

const EditMember = (props) => {

    // var member = props.location.state.o;
    // console.log(member)

    const [img, setImg] = useState("");
    const [name, setName] = useState("");
    const [pos, setPos] = useState("");
    const [dep, setDep] = useState("");
    const [spec, setSpec] = useState("");
    const [status, setStatus] = useState("");

    const onSave = async (img, name, pos, dep, spec, status) => {
        var resp = await axios.post("/api/members", {img:img, name:name, pos:pos, dep:dep, spec:spec, status:status}); 
        console.log("new member", resp);
    }

    return(
        <div className="EditPage">
            <div className="Header">

        
                    <img src="/Back.svg" className="backImage"></img>
                <div className="title">
                    <h2>Edit Member</h2>
                </div>

            </div>

            <div className="StatusBox">
                <StatusTag />
            </div>
            <div className="TasksBox">
                <Input type='text' placeholder='Name' onChange={(e)=>{
                    setName(e.target.value)
                }}/>
                <Input type='text' placeholder='Position' onChange={(e)=>{
                    setName(e.target.value)
                }}/>
                <Input type='text' placeholder='Department' onChange={(e)=>{
                    setName(e.target.value)
                }}/>
                <Input  type='text' placeholder='Specialization' onChange={(e)=>{
                    setName(e.target.value)
                }}/>
            </div>
            <div className="saveButton"> 
                <Button  onClick={()=>{
                    onSave(img, name, pos, dep, spec, status)
                }}
                width="100%"
                buttonText= "Save Changes"
                />
            </div>
        </div>
    );
}

export default EditMember;