import React, {useContext} from 'react'
import "./style.css";
import {Context} from "../Store";

const SelectOrg = () => {
    const [Orgs,setOrgs] = useContext(Context);
    console.log(Orgs);
    return (
        <article className="dropContainer">
            <select className="dropdown">
                <option>Select an Organisation</option>
                {Orgs.map((org, index)=><option key={index}>{org}</option>)}
            </select>
            <button type="submit" className="dropBtn">Submit</button>
        </article>
    )
}

export default SelectOrg;
