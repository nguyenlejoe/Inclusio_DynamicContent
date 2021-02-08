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

    //Grab all categories and find unique ones
    let categories = Cats.map((member) => member.dep)
    let uniqueCats = [...new Set(categories)];

    //Grab all members from database
    const HandleMembers = async() => {
        let resp = await axios.get("http://localhost:8080/api/members");
        setMembers(...[resp.data.members])

        //Filter members to all from the start
        FilterCategory('All')
    }

    //Get all categories from existing members 
    const GetCats = async() => {
        let resp = await axios.get("http://localhost:8080/api/members/dep");
        setCategories(resp.data.members)

    }

    //Delete members
    const DeleteMember = async(id) => {
        let resp = await axios.delete(`http://localhost:8080/api/members/${id}`);
        HandleMembers()
    }

    //Filter members by category
    const FilterCategory = async(dpt) => {

        //If dpt is not All, display members that have the same category
        if(dpt !== "All"){
            let resp = await axios.get(`http://localhost:8080/api/members/filter/${dpt}`);
            //Update map
            setFilter(...[resp.data.members])
        //Display all members 
        } else if(dpt === 'All'){
            let resp = await axios.get(`http://localhost:8080/api/members/filter/All`);
            setFilter(...[resp.data.members])
        }
    }

    //Search for members by name
    const Names = async(name) => {

        //If the search bar is not empty, find member by name
        if(name !== ""){
            let resp = await axios.get(`http://localhost:8080/api/members/name/${name}`);
            setFilter(...[resp.data.members])
            console.log(Filtered)
            console.log(name)
        //If search is empty, display all members

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
            {/* Pass array of members and unique categories */}
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