import React, {useContext} from 'react'
import SelectOrg from '../components/selectorg';
import "./style.css";
import {Context} from "../Store";
import Repos from "../components/Repos";
import Empty from "../components/empty";

const Organisations = () => {
    const [, , Issues] = useContext(Context);
    console.log(Issues);

    return (<div className="orgContainer">
        <SelectOrg/>
        {
            Issues.map((repo, index) => {
            if (repo.issues.length !== 0)
                return <Repos repo={repo} key={index}/>
            else
                return <Empty repo={repo} key={index}/>
        })}
    </div>)
}

export default Organisations;
