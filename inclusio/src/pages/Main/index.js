import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Profile from 'comps/Profile';
import CategoryBar from 'comps/CategoryBar';

const Main = () => {
    return( 
        <div className = "Main">
            <CategoryBar/>
            <Profile/>
        </div>
    );
}

export default Main;