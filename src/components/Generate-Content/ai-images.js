"use client";
import { useContentContext } from "@/context/contentContext";
import Image from "next/image";
import { useEffect } from "react";
import { BiSolidCircle,BiRefresh } from "react-icons/bi";
import { BsCheckCircleFill } from "react-icons/bs";

export default function AiImages({images}) {
    console.log(images);
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

    // useEffect(() => {
    //     const preSelect = []
    //     for (let image of images) {
    //         preSelect.push(image.url);
    //     }

    //     setSelectedImages((prevState) => [...prevState, ...preSelect]);
    //     // console.log(selectedImages)
    // }, [])

    return (
        <>
            <div className="w-1/2 rounded-lg border-primary-color border ml-3 mr-4">
                <div className="flex justify-between border-b text-primary-color text-lg border-neutral-900 px-6 py-3">
                    <div className="font-medium items-center">AI Generated Images:</div>
                    <button className="regenerate-btn p-1 px-4 border border-indigo-800 rounded-lg flex items-center text-base hover:bg-gradient-linear hover:text-white"><div className='mx-2 text-2xl'><BiRefresh/> </div> Regenerate</button>
                </div>
                <div className="px-2 overflow-y-auto h-96 m-8">
                    <div className="grid grid-cols-2 grid-rows-2 gap-4">
                        {
                            images.map((image, index) => {
                                // mapImageUrlToId(image.id, image.url);
                                return (
                                    <ImageDiv key={index} link={image} id={index} alt=""/>
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
                <img alt="" src={link} className="rounded-xl w-full h-full object-cover" onClick={(e)=>document.getElementById(`${id}`).showModal()} />

                <dialog id={id} className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <div className="h-8 font-medium">AI Generated Image</div>
                        <img alt="" src={link} width={500} height={100}/>
                    </div>
                </dialog>
            </div>
        )
    }
}