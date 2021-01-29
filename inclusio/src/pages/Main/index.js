import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Profile from 'comps/Profile';
import CategoryBar from 'comps/CategoryBar';
import SearchBar from 'comps/SearchBar';
import CircleButton from 'comps/CircleButton';


const Main = () => {
    
    const [MemberList, setMembers] = useState([]);

    const HandleMembers = async() => {
        let resp = await axios.get("/api/members");
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
            <div className="top_cont">
                <SearchBar></SearchBar>
                <CircleButton></CircleButton>
            </div>
            <Profile/>
        </div>
    );
}

export default Main;