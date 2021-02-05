import React, {useEffect, useState} from 'react';
import Button from 'comps/Button';
import './LandingPage.scss';
import axios from 'axios';



const Landing = () => {

    return(
    <div className="PageCont">
            <img src="/Bubbles1.svg" className="Bubbles1"></img>
        <div className="LogoCont">
            <img src="/LandingLogo.svg"></img>
        </div>
        <div  className= "ButtonCont">

            <div className="Buttons">
            <Button 
                buttonText= "Get Organized"
                bgcolor= "#CCDFCB"
                color= "#056571"
                hovercolor= "#CCDFCB"
                hoverborder= " 3px solid #CCDFCB"
                path={{pathname: '/Home'}}
            />
            </div>
            <div className="Buttons">
            <Button 
                buttonText= "Sign In"
                bgcolor= "#CCDFCB"
                color= "#056571"
                hovercolor= "#CCDFCB"
                hoverborder= " 3px solid #CCDFCB"
                path={{pathname: '/Home'}}
            />
            </div>
        </div>
        <img src="/Bubbles2.svg"  className="Bubbles2"></img>
    </div>    
    )

}

export default Landing;