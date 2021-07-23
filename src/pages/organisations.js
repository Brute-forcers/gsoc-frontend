import React, {useContext} from 'react'
import SelectOrg from '../components/selectorg';
import "./style.css";
import {Context} from "../Store";
import Repos from "../components/Repos";

const Organisations = () => {
    const [, , Issues] = useContext(Context);
    console.log(Issues);

    return (<div className="orgContainer">
        <SelectOrg/>
        {Issues.map((repo, index) => {
            return <Repos repo={repo} key={index}/>
        })}
    </div>)
}

export default Organisations;
