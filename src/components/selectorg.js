import React from 'react'
import "./style.css";
const SelectOrg = () => {
    return (
        <article className="dropContainer">
            <select className="dropdown">
                <option>Select an Organisation</option>
                <option value="Mozilla">Mozilla</option>
                <option value="Brute-forcers">Brute-forcers</option>
                <option value="Checkstyle">Checkstyle</option>
            </select>
            <button type="submit" className="dropBtn">Submit</button>
        </article>
    )
}

export default SelectOrg;
