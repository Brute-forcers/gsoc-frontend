import React from 'react'
import "./style.css";
import gitIcon from "./git-icon.svg";

const Issue = ({issue,setPreview,setWorking}) => {
    const clickHandler = () =>{
        setWorking(issue)
        setPreview(true);
    }
    return (
        <div className="issueContainer">
            <img src={gitIcon} alt="icon" className="svg"/>
            <h3>#{issue.number}</h3>
         <p className="desktop-only">{issue.title}</p>
         <span>Good first issue</span>
         <button onClick={clickHandler}>Info</button>
         <div className="mobile-only">
         <p >This is an issue related to this. Please fix it.</p>
         </div>
        </div>
    )
}

export default Issue;
