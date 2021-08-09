import React from "react";
import "./style.css";

const Empty = ({repo}) => {
    return (
        <div className='repoContainer'>
            <h2>{repo.repoName}</h2>
            <div className="issuesContainer">
                <h4>No Issues here!</h4>
            </div>
        </div>
    )
}

export default Empty;