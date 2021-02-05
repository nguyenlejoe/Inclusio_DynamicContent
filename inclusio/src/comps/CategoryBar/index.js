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

    &:hover{
        border-bottom: 3px solid #056571;
        color:#056571;
    }
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
    // const [Current, setCurrent] = useState('All');
    const [Cats, setCats] = useState(categories.slice(0,3));
    const [Page, setPage] = useState(0);
    const NumItems = 3;
    // var arr = categories.slice(0,3);

    // const GetCats = () => {
        // setCats();
    // }

    const Next = () =>{
        var Num = Page + 1;
        setPage(Num);
        if(Page >= categories.length/NumItems){
            console.log(Num)
            setPage(0)
            setCats(
                categories.slice(NumItems*(Num-1), NumItems*Num)
            )
        }else{
            console.log(Num)
            setCats(
                categories.slice(NumItems*(Num-1), NumItems*Num)
            )
        }
    }

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