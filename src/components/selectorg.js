import React, {useContext, useState} from 'react'
import "./style.css";
import {Context} from "../Store";

const SelectOrg = () => {
    const [Orgs] = useContext(Context);
    const [,,,,, setOrgName] = useContext(Context);
    const [selectedOrg, setSelectedOrg] = useState("Select an Organisation")
    console.log(Orgs);
    const handleSubmit = (event) => {
        event.preventDefault();
        setOrgName(Orgs[selectedOrg-1]);
    }
    const handleChange = (event) => {
        const val = event.target.value;
        setSelectedOrg(val)
        console.log(val);
    }
    return (
        <article className="dropContainer">
            <select className="dropdown" value={selectedOrg} onChange={handleChange}>
                <option value={0}>Select an Organisation</option>
                {Orgs.map((org, index) => <option value={index + 1} key={index}>{org}</option>)}
            </select>
            <button type="submit" onClick={handleSubmit} className="dropBtn">Submit</button>
        </article>
    )
}

export default SelectOrg;
