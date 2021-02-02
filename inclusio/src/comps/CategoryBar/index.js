import React, {useEffect, useState,} from 'react';
import styled, {css,} from 'styled-components';

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

    ${props => props.active === true && css`
    display:none;
`}
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

const CategoryBar = ({categories, onFilter}) => {


    
    return(
        <CategoryCont>

            <CategorySet>
                {categories && categories.map(o=><CategoryTabs onClick={()=>{
                    onFilter(o)
                }}>{o}</CategoryTabs>)}
            </CategorySet>


            {/* <OneSetTabs state={OneSet}>
                {categories && categories.map(o=><CategoryTabs state={FirstSet}  onClick={onClick}>{o}</CategoryTabs>)}
            </OneSetTabs> */}

            {/* Mapping first and second set of categories */}
            
            {/* {sliced1 && sliced1.map(o=><CategoryTabs state={FirstSet}  onClick={onClick}>{o}</CategoryTabs>)}
           
            {sliced2 && sliced2.map(o=><CategoryTabs state={SecondSet} onClick={onClick}>{o}</CategoryTabs>)} */}
           
           {/* Arrow that changes the state of the first set and second */}
            {/* <ArrowCont 
            active={nextState}
            onClick={()=>{
                if(!FirstSet){
                    setFirstSet(true)
                    setSecondSet(false)
                }else{
                    setFirstSet(false)
                    setSecondSet(true)
                }
            }}></ArrowCont> */}
        </CategoryCont>
    );
}

CategoryBar.defaultProps = {
    categories:fakeDpt
}

export default CategoryBar;