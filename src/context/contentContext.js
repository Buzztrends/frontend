import { createContext, useContext, useState } from "react";

const ContentContext = createContext();

const useContentContext = ()=>{
    return useContext(ContentContext);
}

const ContentContextProvider = ({children})=>{
    const [selectedImages, setSelectedImages] = useState([]);
    const [extras, setExtras] = useState("");
    // const [generatedImagesObj, setGeneratedImagesObj] = useState({});

    return (
        <ContentContext.Provider value={{selectedImages, setSelectedImages, extras, setExtras}}>
            {children}
        </ContentContext.Provider>
    )
}

module.exports = {
    useContentContext,
    ContentContextProvider
}
