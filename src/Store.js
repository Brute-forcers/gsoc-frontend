import React, {createContext, useEffect, useState} from "react";
import {getIssuesWithRepos, getOrgs} from "./Api/Api";

export const Context = createContext();

export const Store = ({children}) => {
    const [Orgs, setOrgs] = useState([]);
    const [Issues, setIssues] = useState([{repoName: "checkstyle", issues: []}]);
    const [orgName, setOrgName] = useState('zulip');
    useEffect(() => {
        getOrgs().then(res => {
            setOrgs(res.data);
            console.log(Orgs);
        })
        getIssuesWithRepos("zulip").then(res => {
            setIssues(res.data.repoDetails)
            console.log(Issues)
        })
        // eslint-disable-next-line
    },[])
    useEffect(() => {
        getIssuesWithRepos(orgName).then(res => {
            setIssues(res.data.repoDetails);
            console.log(res.data.repoDetails);
        })
    }, [orgName]);

    return (
        <Context.Provider value={[Orgs, setOrgs, Issues, setIssues, orgName, setOrgName]}>
            {children}
        </Context.Provider>
    )
}