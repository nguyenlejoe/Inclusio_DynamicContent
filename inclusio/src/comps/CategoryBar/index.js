import React, {useEffect, useState,} from 'react';
import styled, {css, ThemeConsumer} from 'styled-components';

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

const CategoryBar = ({categories}) => {

    //States to display first and second set of categories
    const [FirstSet, setFirstSet] = useState(false)
    const [SecondSet, setSecondSet] = useState(true)

    //Slice array that is coming through if user assigns more than 4 categories
  
    var sliced1;
    var sliced2;
    
    if(categories.length > 4){
        sliced1 = categories.slice(0, 4)
        sliced2 = categories.slice(4, 9)
    }
    console.log(sliced1, sliced2)


    
    return(
        <CategoryCont>
            {/* Mapping first and second set of categories */}
            {sliced1 && sliced1.map(o=><CategoryTabs state={FirstSet} active={o.active} onClick={()=>{
               if(!o.active){
                o.active = true;  
               }else{
                o.active = false;
               }
               
                console.log(o.active)
            }}>{o.Department}</CategoryTabs>)}
           
            {sliced2 && sliced2.map(o=><CategoryTabs state={SecondSet} active={o.active}>{o.Department}</CategoryTabs>)}
           
           {/* Arrow that changes the state of the first set and second */}
            <ArrowCont onClick={()=>{
                if(!FirstSet){
                    setFirstSet(true)
                    setSecondSet(false)
                }else{
                    setFirstSet(false)
                    setSecondSet(true)
                }
            }}></ArrowCont>
        </CategoryCont>
    );
}

CategoryBar.defaultProps = {
    categories:fakeDpt
}

export default CategoryBar;