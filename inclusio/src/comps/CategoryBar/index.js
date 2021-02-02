import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';

const CategoryCont = styled.div`
    min-height: 55px;
    max-height: 100px;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-around;
    border-bottom: 3px solid #A1A1A1;

`;

const ArrowCont = styled.div`
    margin-bottom:-4px;
    width:10px;
    height:10px;
    display:flex;
    position:relative;
    right:5px;
    background-size:contain;
    background-repeat:no-repeat;
    background-image:url(/arrow.png);
`;

//     ${props => props.active === true && css`
//     display:none;
// `}


const CategoryTabs = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    min-height:54px;
    max-height:100px;
    border-bottom: 3px solid #A1A1A1;
    min-width:10%;
    position:relative;
    top:3px;

`;
    // ${props => props.active === true && css`
    //     border-bottom: 3px solid #056571;
    //     color:#056571;
    // `}
//     ${props => props.state === true && css`
//         display:none;
// `}
    

var fakeDpt = [
    {
        Department:"All",
        active:true
    },
    {
        Department:"Design",
        active:false
    },
    {
        Department:"Development",
        active:false
    },
    {
        Department:"Marketing",
        active:false
    },
    {
        Department:"Management",
        active:false
    },
    {
        Department:"Communication",
        active:false
    },
    {
        Department:"Law",
        active:false
    },
    {
        Department:"Test",
        active:false
    },
]




const CategoryBar = ({categories, onClick}) => {
    const [Cats, setCats] = useState([])
    const [AllCats, setAllCats] = useState([])
    const items_per_page = 4;
    var num = 1;

    // var newCats = new Set(categories)
    // console.log('new cats', newCats)
    // setCats([newCats])

    // const GetCats = async() => {
    //     let resp = await axios.get("http://localhost:8080/api/members/dep");
    //     setAllCats(...[resp.data.members])
    //     console.log('cats', resp)
    //     FilterCats()
    // }

    // const FilterCats = ()=>{
    //     setCats(...new Set(AllCats))
    // }

    const GetCats = () => {
        // console.log('passed',categories)
    //     // setAllCats(categories);
    //     // var arr = categories.slice(0,4)
    //     // setCats(arr)
    //     // setAllCats(categories)
    }

    // const ChangeCats = (num) =>{
    //     setCats(
    //         allcats.slice(items_per_page*(num-1), items_per_page*num)
    //     )
    // }

    // console.log('cats',categories)
    useEffect(()=>{
        GetCats()
    },[])

    // States to display first and second set of categories
    // const [FirstSet, setFirstSet] = useState(false)
    // const [SecondSet, setSecondSet] = useState(true)
    // const [nextState, setNext] = useState(true)

    //Slice array that is coming through if user assigns more than 4 categories
  
    // var sliced1;
    // var sliced2;
    
    // if(categories.length > 4){
    //     sliced1 = categories.slice(0, 4)
    //     sliced2 = categories.slice(4, 9)
    //     // setNext(false)
    // }
    
    // console.log(sliced1, sliced2)


    return <CategoryCont>

            {categories && categories.map(o=><CategoryTabs>{o}</CategoryTabs>)}

            {/* {categories && categories.map(o=><CategoryTabs state={FirstSet}  onClick={onClick}>{o}</CategoryTabs>)} */}

            {/* Mapping first and second set of categories */}
            
            {/* {sliced1 && sliced1.map(o=><CategoryTabs state={FirstSet}  onClick={onClick}>{o}</CategoryTabs>)}
           
            {sliced2 && sliced2.map(o=><CategoryTabs state={SecondSet} onClick={onClick}>{o}</CategoryTabs>)} */}
           
           {/* Arrow that changes the state of the first set and second */}
            <ArrowCont 
            // active={nextState}
            onClick={()=>{
                // num = num++;
                // ChangeCats(num)

                // if(!FirstSet){
                //     setFirstSet(true)
                //     setSecondSet(false)
                // }else{
                //     setFirstSet(false)
                //     setSecondSet(true)
                // }
            }}></ArrowCont>
        </CategoryCont>
}

CategoryBar.defaultProps = {
    // categories:fakeDpt
}

export default CategoryBar;