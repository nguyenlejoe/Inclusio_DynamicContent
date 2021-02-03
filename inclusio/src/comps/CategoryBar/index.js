import React, {useEffect, useState, css} from 'react';
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

const CategorySet = styled.div`
    display:flex;
    width:100%;
    justify-content:space-around;


    ${props => props.state === true && css`
    display:none;
    `}
`;

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


    ${props => props.active === true && css`
        border-bottom: 3px solid #056571;
        color:#056571;
    `}

    ${props => props.state === true && css`
        display:none;
    `}
    
`;
    

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

const CategoryBar = ({categories, onFilter, onAll}) => {
    console.log(categories)
    const [Cats, setCats] = useState([]);
    const [Page, setPage] = useState(1);
    const NumItems = 4;
    var Num = Page + 1;
    var arr = categories.slice(0,3);

    const GetCats = () => {
        setCats(arr);
    }

    const Next = () =>{
        setPage(Num);
        if(Page >= categories.length/4){
            console.log(Page)
            setPage(0)
            setCats(
                categories.slice(NumItems*(Num-1), NumItems*Num)
            )
        }else{
            setCats(
                categories.slice(NumItems*(Num-1), NumItems*Num)
            )
        }
    }

    useEffect(()=>{
        GetCats()
    },[])

    return <CategoryCont>
            <CategorySet>
                <CategoryTabs onClick={onAll}>All</CategoryTabs>
                {Cats && Cats.map(o=><CategoryTabs onClick={()=>{
                    onFilter(o)
                }}>{o}</CategoryTabs>)}
            </CategorySet>
            <ArrowCont onClick={()=>{
                Next()
            }}/>
        </CategoryCont>
}

CategoryBar.defaultProps = {
    // categories:fakeDpt
}

export default CategoryBar;