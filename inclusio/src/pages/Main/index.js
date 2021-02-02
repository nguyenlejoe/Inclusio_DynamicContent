import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Profile from 'comps/Profile';
import CategoryBar from 'comps/CategoryBar';
import SearchBar from 'comps/SearchBar';
import CircleButton from 'comps/CircleButton';


const Main = () => {
    
    const [MemberList, setMembers] = useState([]);
    const [AllCats, setAllCats] = useState([]);
    const [Cats, setCats] = useState([]);

    let categories = MemberList.map((member) => member.dep)
    let cats = [new Set(categories)]

    const HandleMembers = async() => {
        let resp = await axios.get("http://localhost:8080/api/members");
        setMembers(...[resp.data.members])
    }

    const GetCats = async() => {
        let resp = await axios.get("http://localhost:8080/api/members/dep");
        setAllCats(resp.data.members);

    }

    const FilterCats = ()=>{

    }

    const DeleteMember = async(id) => {
        let resp = await axios.delete(`http://localhost:8080/api/members/${id}`);
        console.log(resp)
    }

    useEffect(()=>{
        HandleMembers()
        // GetCats()
    },[])

    return( 
        <div className = "Main">
            <h1 className="header">Team Tracker</h1>
            <CategoryBar categories={cats} />
            <div className="top_cont">
                <SearchBar></SearchBar>
                <CircleButton></CircleButton>
            </div>
            <Profile members={MemberList} onDelete={GetCats}/>
        </div>
    );
}

export default Main;