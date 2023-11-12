import { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const SidebarContext = createContext();

const useSidebarContext = ()=>{
    return useContext(SidebarContext);
}

const SidebarContextProvider = ({children})=>{
    const pathname = usePathname();
    const [selectedTab, setSelectedTab] = useState();

    useEffect(()=>{
        if(pathname == '/home'){
            setSelectedTab("research");
        } else if(pathname == '/generate-content'){
            setSelectedTab("generate-content");
        }
    }, [pathname]);


    return (
        <SidebarContext.Provider value={{selectedTab, setSelectedTab}}>
            {children}
        </SidebarContext.Provider>
    )
}

module.exports = {
   useSidebarContext,
   SidebarContextProvider
}
