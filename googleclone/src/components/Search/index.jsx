import React,{useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from "@material-ui/core";
import MicIcon from '@material-ui/icons/Mic';
import "./index.css";
import {useHistory} from "react-router-dom";
import {useStateValue} from "../../Context/StateProvider";
import {actionTypes} from "../../Context/Reducer";

export default function Search({showButtons=true}) {
const [input,setInput]=useState("");
const history=useHistory();
const [,dispatch]=useStateValue();

    //handle search
    const handleSearch=(e)=>{
        if(e.key==="Enter")
        {
            e.preventDefault();
            //push the user input to the context
        dispatch({
            type:actionTypes.SET_SEARCH_TERM,
            term:input
        });
        //direct the user to the searcy result page
            history.push("/search");
            }
    }
    return (
       
        <form>
            <div className="search">
                <div className="search_input">
                    <SearchIcon className="search__searchIcon"/>
                    <input autoFocus onChange={(e)=>setInput(e.target.value)} 
                                    onKeyPress={handleSearch}/>
                    <MicIcon className="search_micIcon"/>
                </div>
                {
                    showButtons&&
                    <div className="search_buttons">
                        <Button onClick={handleSearch} type="submit">Google Search</Button>
                        <Button>I'm Feeling Lucky</Button>
                    </div>
                }
            
            </div>
        </form>
    )
}


