import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Profile from 'comps/Profile';
import CategoryBar from 'comps/CategoryBar';
import SearchBar from 'comps/SearchBar';
import CircleButton from 'comps/CircleButton';


const Main = () => {
    
    const [MemberList, setMembers] = useState([]);

    let categories = MemberList.map((member) => member.dep)

    console.log(categories)

    const HandleMembers = async() => {
        let resp = await axios.get("http://localhost:8080/api/members");
        setMembers(...[resp.data.members])
        console.log(MemberList);
    }

    useEffect(()=>{
        HandleMembers()
    },[])

    return( 
        <div className = "Main">
            <h1>Inclusio</h1>
            <CategoryBar categories={categories} />
            <div className="top_cont">
                <SearchBar></SearchBar>
                <CircleButton></CircleButton>
            </div>
            <Profile members={MemberList}/>
        </div>
    );
}

export default Main;