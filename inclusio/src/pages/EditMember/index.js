import React, {useEffect, useState} from 'react';
import './Edit.scss';
import Input from 'comps/Input';
import StatusTag from 'comps/StatusTag';
import Button from 'comps/Button';
import axios from 'axios';

const EditMember = (props) => {

    // var member = props.location.state.o;
    // console.log(member)

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
                <Input 
                placeholder="Name"
                />
                <Input 
                placeholder="Position"               
                />
                <Input 
                placeholder="Department"              
                />
                <Input
                placeholder="Socialization"               
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