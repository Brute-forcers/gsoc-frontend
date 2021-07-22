import React, {createContext, useEffect, useState} from "react";
import {getOrgs} from "./Api/Api";

export const Context = createContext();

export const Store = ({children}) => {
    const [Orgs, setOrgs] = useState([]);
    useEffect(() => {
        getOrgs().then(res => {
            setOrgs(res.data);
        })
    }, [])

    return (
        <Context.Provider value={[Orgs, setOrgs]}>
            {children}
        </Context.Provider>
    )


}