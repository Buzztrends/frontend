import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const useUserContext = ()=>{
    return useContext(UserContext);
}

const UserContextProvider = ({children})=>{
    const [username, setUsername] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [companyId, setCompanyId] = useState("");

    return (
        <UserContext.Provider value={{username, companyName, companyId, setUsername, setCompanyId, setCompanyName}}>
            {children}
        </UserContext.Provider>
    )
}

module.exports = {
    useUserContext,
    UserContextProvider
}
