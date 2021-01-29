import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Profile from 'comps/Profile';
import CategoryBar from 'comps/CategoryBar';


const Main = () => {
    
    const [MemberList, setMembers] = useState([]);

    const HandleMembers = async() => {
        let resp = await axios.get("http://localhost:8080/api/members");
        console.log(resp);
        // setMembers(resp.data)
    }

    useEffect(()=>{
        HandleMembers()
    },[])

    return( 
        <div className = "Main">
            <h1>Inclusio</h1>
            <CategoryBar/>

            <Profile /*members={MemberList}*//>
        </div>
    );
}

export default Main;