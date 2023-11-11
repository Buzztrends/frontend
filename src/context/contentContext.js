import { createContext, useContext, useState } from "react";

const ContentContext = createContext();

const useContentContext = ()=>{
    return useContext(ContentContext);
}

const ContentContextProvider = ({children})=>{
    const [selectedImages, setSelectedImages] = useState([]);
    // const [generatedImagesObj, setGeneratedImagesObj] = useState({});

    return (
        <ContentContext.Provider value={{selectedImages, setSelectedImages}}>
            {children}
        </ContentContext.Provider>
    )
}

module.exports = {
    useContentContext,
    ContentContextProvider
}
