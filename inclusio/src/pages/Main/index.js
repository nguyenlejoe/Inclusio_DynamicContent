import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Profile from 'comps/Profile';
import CategoryBar from 'comps/CategoryBar';
import SearchBar from 'comps/SearchBar';
import CircleButton from 'comps/CircleButton';


const Main = () => {
    
    const [MemberList, setMembers] = useState([]);
    let categories = MemberList.map((member) => member.dep)
    let uniqueCats = [new Set(categories)]

    const HandleMembers = async() => {
        let resp = await axios.get("http://localhost:8080/api/members");
        setMembers(...[resp.data.members])
    }

    // const GetCats = async() => {
    //     let resp = await axios.get("http://localhost:8080/api/members/dep");
    //     setAllCats(resp.data.members);
    // }

    const FilterCats = ()=>{

    }

    const DeleteMember = async(id) => {
        let resp = await axios.delete(`http://localhost:8080/api/members/${id}`);
        HandleMembers()
        console.log(resp)
    }

    const FilterCategory = (dpt) => {
        setMembers(MemberList.filter(o => o.dep === dpt))
    }

    useEffect(()=>{
        HandleMembers()
        // GetCats()
    },[])

    return( 
        <div className = "Main">
            <h1 className="header">Team Tracker</h1>
            <CategoryBar onFilter={FilterCategory} categories={uniqueCats} />
            <div className="top_cont">
                <SearchBar></SearchBar>
                <CircleButton></CircleButton>
            </div>
            <Profile members={MemberList} onDelete={GetCats}/>
        </div>
    );
}

export default Main;