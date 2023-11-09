"use client";
import { useContentContext } from "@/context/contentContext";
import { useEffect } from "react";
import { BiSolidCircle } from "react-icons/bi";
import { BsCheckCircleFill } from "react-icons/bs";

export default function AiImages() {
    const url1 = "https://images.unsplash.com/photo-1517404215738-15263e9f9178?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const url2 = "https://images.unsplash.com/photo-1598128558393-70ff21433be0?q=80&w=1989&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


    const { selectedImages, setSelectedImages } = useContentContext()

    const toggleImageSelection = (imageId) => {
        setSelectedImages((prevState) => prevState.includes(imageId) ? prevState.filter((id) => id !== imageId) : [...prevState, imageId]);
    }

    const images = [
        {
            id: 1,
            url: url1
        },
        {
            id:2,
            url: url2
        },
        {
            id:3,
            url: url1
        },
        {   
            id:4,
            url: url2
        }
    ];

    useEffect(()=>{
        const preSelect = []
        for(let image of images){
            preSelect.push(image.id);
        }

        setSelectedImages(preSelect);
    }, [])

    return (
        <>
            <div className="rounded-lg border-primary-color border shadow-primary font-medium">
                <div className="border-b text-primary-color text-lg border-neutral-900 px-6 py-3">
                    AI Generated Images:
                </div>
                <div className="px-6 py-4">
                    <div className="grid grid-cols-2 grid-rows-2 gap-4">
                        {
                            images.map((image)=>{
                                return (
                                    <ImageDiv id={image.id} link={image.url}/>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )

    function ImageDiv({id, link}){
        return (
            <div className="relative select-none">
                <span className="absolute top-0 right-0 mt-2 mr-2" onClick={(e)=>toggleImageSelection(id)}>
                    {
                        selectedImages.includes(id) ? <BsCheckCircleFill color="green" size={28}/>:<BiSolidCircle color='white' size={28}/>
                    }
                </span>
                <img src={link} className="rounded-xl w-full h-full object-cover"/>
            </div>
        )
    }
}