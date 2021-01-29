import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Profile from 'comps/Profile';
import CategoryBar from 'comps/CategoryBar';


const Main = () => {
    
    const [MemberList, setMembers] = useState([]);

    const HandleMembers = async() => {
        let resp = await axios.get("/api/members");
        console.log(resp);
    }

    useEffect(()=>{
        HandleMembers()
    },[])

    return( 
        <div className = "Main">
            <h1>Inclusio</h1>
            <CategoryBar/>

            <Profile/>
        </div>
    );
}

export default Main;