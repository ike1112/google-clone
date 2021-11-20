import React from 'react';
import {Link} from "react-router-dom";
import AppsIcon from '@material-ui/icons/Apps';
import {Avatar} from "@material-ui/core";
import Search from "../../components/Search";
import './index.css';


export default function Home() {
    return (
        <div className="home">
            {/* Home page header */}
           <div className="home__header">
               {/* home page header left */}
                <div className="home__headerLeft">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>
                 {/* home page header right */}
                <div className="home__headerRight">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    {/* app iccon */}
                    <AppsIcon/>
                    {/* profile icon */}
                    <Avatar/>
               </div>
           </div>
           {/* search input */}
           <div className="home__body">
                <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" 
                alt="logo"/>
                <div className="home_inputContainer">
                   <Search/>
                 </div>
            </div>

            
        </div>
    )
}
