"use client";
import { useContentContext } from "@/context/contentContext";
import { useEffect } from "react";
import { BiSolidCircle } from "react-icons/bi";
import { BsCheckCircleFill } from "react-icons/bs";

export default function AiImages() {
    const url1 = "https://images.unsplash.com/photo-1517404215738-15263e9f9178?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const url2 = "https://images.unsplash.com/photo-1598128558393-70ff21433be0?q=80&w=1989&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const url3 = "https://images.unsplash.com/photo-1699436245497-47cf50f7c4b2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const url4 = "https://images.unsplash.com/photo-1682685797277-f2bf89b24017?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


    const { selectedImages, setSelectedImages } = useContentContext()

    const toggleImageSelection = (imageLink) => {
        setSelectedImages((prevState) => prevState.includes(imageLink) ? prevState.filter((link) => link !== imageLink) : [...prevState, imageLink]);
    }
    
    // console.log(selectedImages);
    // const mapImageUrlToId = (imageId, imageUrl) => {
    //     setGeneratedImagesObj((prevState)=>{
    //         return {
    //             ...prevState,
    //             [imageId]: imageUrl
    //         }
    //     });
    // }

    const images = [
        {
            id: 1,
            url: url1
        },
        {
            id: 2,
            url: url2
        },
        {
            id: 3,
            url: url3
        },
        {
            id: 4,
            url: url4
        }
    ];

    useEffect(() => {
        const preSelect = []
        for (let image of images) {
            preSelect.push(image.url);
        }

        setSelectedImages((prevState) => [...prevState, ...preSelect]);
        // console.log(selectedImages)
    }, [])

    return (
        <>
            <div className="w-1/2 rounded-lg border-primary-color border font-medium ml-3 mr-4">
                <div className="border-b text-primary-color text-lg border-neutral-900 px-6 py-3">
                    AI Generated Images:
                </div>
                <div className="px-4 py-2 overflow-y-auto h-96 m-8">
                    <div className="grid grid-cols-2 grid-rows-2 gap-4">
                        {
                            images.map((image, index) => {
                                // mapImageUrlToId(image.id, image.url);
                                return (
                                    <ImageDiv key={image.id} link={image.url} id={index}/>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )

    function ImageDiv({ id, link }) {
        return (
            <div className="relative select-none">
                <span className="absolute top-0 right-0 mt-2 mr-2" onClick={(e) => toggleImageSelection(link)}>
                    {
                        selectedImages.includes(link) ? <BsCheckCircleFill color="green" size={28} /> : <BiSolidCircle color='white' size={28} />
                    }
                </span>
                <img src={link} className="rounded-xl w-full h-full object-cover" onClick={(e)=>document.getElementById(`${id}`).showModal()} />

                <dialog id={id} className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <div className="h-8 font-medium">AI Generated Image</div>
                        <img src={link}/>
                    </div>
                </dialog>
            </div>
        )
    }
}