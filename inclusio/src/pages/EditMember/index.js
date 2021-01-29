import React, {useEffect, useState} from 'react';
import './Edit.scss';
import Input from 'comps/Input';
import StatusTag from 'comps/StatusTag';
import Button from 'comps/Button';
import DropDown from 'comps/DropDown';
import axios from 'axios';
import {Link} from "react-router-dom";

const EditMember = (props) => {

    // var member = props.location.state.o;
    // console.log(member)

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

                <StatusTag />
                <DropDown />

            <div className="TasksBox">
                <Input 
                placeholder="Name"
                header="Name"
                />
                <Input 
                placeholder="Position"  
                header="Position"             
                />
                <Input 
                placeholder="Department"  
                header="Department"            
                />
                <Input
                placeholder="Specialization"
                header="Specialization"               
                />
            </div>
            <div className="saveButton"> 
                <Button 
                width="80%"
                buttonText= "Save Changes"
                />
            </div>
        </div>
    );
}

export default EditMember;