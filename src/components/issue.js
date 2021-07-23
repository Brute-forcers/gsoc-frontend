import React from 'react'
import "./style.css";

const Issue = ({issue,setPreview}) => {
    const clickHandler = () =>{
        setPreview(true);
    }
    return (
        <article className="issueContainer">
         <img src="./static/git-icon.svg" alt="Organization icon" className="svg"/>
         <h3>#{issue.number}</h3>
         <p className="desktop-only">This is an issue related to this. Please fix the issue.</p>
         <span>Good first issue</span>
         <button onClick={clickHandler}>Info</button>
         <div className="mobile-only">
         <p >This is an issue related to this. Please fix it.</p>
         </div>
        </article>
    )
}

export default Issue;
