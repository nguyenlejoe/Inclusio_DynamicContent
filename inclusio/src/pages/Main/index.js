import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Profile from 'comps/Profile';
import CategoryBar from 'comps/CategoryBar';
import SearchBar from 'comps/SearchBar';
import CircleButton from 'comps/CircleButton';
import AvatarSelection from 'comps/AvatarSelection'


const Main = () => {
    
    const [MemberList, setMembers] = useState([]);
    const [Cats, setCategories] = useState([])
    const [Filtered, setFilter, searchFilter] = useState([])

    let categories = Cats.map((member) => member)
    let uniqueCats = [...new Set(categories)];

    const HandleMembers = async() => {
        let resp = await axios.get("http://localhost:8080/api/members");
        setMembers(...[resp.data.members])
        FilterCategory('All')
    }

    const GetCats = async() => {
        let resp = await axios.get("http://localhost:8080/api/members/dep");
        setCategories(resp.data.members)

    }

    const DeleteMember = async(id) => {
        let resp = await axios.delete(`http://localhost:8080/api/members/${id}`);
        HandleMembers()
    }

    const FilterCategory = async(dpt) => {
        if(dpt !== "All"){
            let resp = await axios.get(`http://localhost:8080/api/members/filter/${dpt}`);
            setFilter(...[resp.data.members])
        } else if(dpt === 'All'){
            let resp = await axios.get(`http://localhost:8080/api/members/filter/All`);
            setFilter(...[resp.data.members])
        }
    }

    const Names = async(name) => {
        if(name !== ""){
            let resp = await axios.get(`http://localhost:8080/api/members/name/${name}`);
            setFilter(...[resp.data.members])
        } else {
            let resp = await axios.get(`http://localhost:8080/api/members/name/All`);
            setFilter(...[resp.data.members])
        }
    }


    useEffect(()=>{
        HandleMembers()
        GetCats()
    },[])

    return( 
        <div className = "Main">
            <h1 className="header">Team Tracker</h1>
            <CategoryBar onFilter={FilterCategory} onAll={HandleMembers} categories={uniqueCats} />
            <div className="top_cont">
                <SearchBar
                    searchFilter={Names}
                />
                <CircleButton></CircleButton>
            </div>
            <Profile members={Filtered} onDelete={DeleteMember}/>
        </div>
    );
}

export default Main;