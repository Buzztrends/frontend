"use client";
import { useEffect } from "react";
import Header from "@/components/header";
import InputText from "@/components/inputText";
import Dropdown from "@/components/dropdown";
import Button from "@/components/button";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";

import PostText from "@/components/Generate-Content/post-text";
import AiImages from "@/components/Generate-Content/ai-images";
import {
    useContentContext,
} from "@/context/contentContext";
import Sidebar from "@/components/sidebar";
import Instapost from "@/components/instapost";
import axios from "axios";

export default function GenerateContent({ searchParams }) {

    // To toggle moment customization
    const [momentCustomization, setMomentCustomization] = useState(false);

    // To select one/multiple social media platforms to generate content for-
    // Multiple socials will be integrated in future, currently implementing single social

    // const [selectedSocials, setSelectedSocials] = useState([]);
    const [selectedSocial, setSelectedSocial] = useState();

    const socials = [
        {
            id: 1,
            label: "instagram",
        },
        {
            id: 2,
            label: "facebook",
        },
        {
            id: 3,
            label: "linkedin",
        },
        {
            id: 4,
            label: "twitter",
        },
        {
            id: 5,
            label: "email",
        },
        {
            id: 6,
            label: "whatsapp",
        },
    ];

    // const toggleSocial = (socialLabel) => {
    //     setSelectedSocials((prevState) =>
    //         prevState.includes(socialLabel)
    //             ? prevState.filter((label) => label !== socialLabel)
    //             : [...prevState, socialLabel]
    //     );
    // };
    const toggleSocial = (socialLabel) => {
        setSelectedSocial((prevState) => prevState == socialLabel ? "" : socialLabel);
    }

    const displaySocial = (label) => {
        if (label === "instagram") {
            return <FaInstagram size={40} />;
        } else if (label === "facebook") {
            return <FaFacebook size={40} />;
        } else if (label === "linkedin") {
            return <FaLinkedin size={40} />;
        } else if (label === "twitter") {
            return <FaXTwitter size={40} />;
        } else if (label === "email") {
            return <FaRegEnvelope size={40} />;
        } else if (label === "whatsapp") {
            return <FaWhatsapp size={40} />;
        }
    };




    // To select product - to be enabled later
    // const [selectedProduct, setSelectedProduct] = useState("");

    // const handleSelectProduct = (event) => {
    //     setSelectedProduct(event.target.value);
    // };

    // const products = ["option1", "option2"]




    // to select objective
    const [selectedObjective, setSelectedObjective] = useState("");

    const handleSelectObjective = (event) => {
        setSelectedObjective(event.target.value);
    };

    const objectives = ["inform", "persuade", "entertain"];

    



    // To select content tone
    const [selectedTone, setSelectedTone] = useState("");

    const handleSelectTone = (event) => {
        setSelectedTone(event.target.value);
    };

    const tones = ["formal", "casual", "informative", "persuasive"];

    // To show or not show content generation form
    const [contentFormVisible, setContentFormVisible] = useState(true);


    // Storing and submitting form data
    const [formData, setFormData] = useState({});

    useEffect(() => {
        setFormData({ ...formData, 'moment-for-generation': searchParams.title || '' });
    }, []);

    const updateFormData = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleGenerateContentFormSubmission = async(e) => {
        e.preventDefault();

        try{
            const headers = {
                'api-key': process.env.NEXT_PUBLIC_API_KEY
            }
    
            const data = {
                company_id: 100,
                content_type: `${selectedSocial} post`,
                moment: formData['moment-for-generation'],
                custom_moment: 1,
                objective: selectedObjective,
                location: "india",
                audience: "young teenagers",
                tone: selectedTone,
                structure: formData['content-structure']
            }
            
            const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER}/text_generation/simple_generation`, data,{headers});
            
            if(res.status == 200){
                setContentFormVisible(false);
            }
        } catch(err){
            console.log(err);
        }
    }


    // context from ai images component
    const { selectedImages } = useContentContext();

    return (
        <>
            <div className="flex">
                <Sidebar />

                <div className="w-4/5 flex flex-col ml-auto">
                    <Header header="Create Content" />
                    <div className="w-full mt-24"></div>
                    <div className="w-full">
                        <form action="" className="ml-6" onSubmit={handleGenerateContentFormSubmission}>
                            <div className="mt-5 mr-4">
                                <label
                                    htmlFor="moment-input"
                                    className="text-xl font-medium text-primary-color"
                                >
                                    Moment:
                                </label>
                                <div className="flex items-center space-x-2 w-full">
                                    <InputText
                                        name="moment-for-generation"
                                        id="moment-input"
                                        isDisabled={momentCustomization ? undefined : true}
                                        handleChange={updateFormData}
                                        defValue={searchParams.title}
                                    />

                                    <span
                                        className={`select-none cursor-pointer inline-flex items-center space-x-1 px-5 py-2 mt-2 rounded-lg hover:bg-gray-200 font-medium ${momentCustomization
                                            ? "border-2 border-black border-solid bg-gray-200"
                                            : "border-2 border-transparent border-solid bg-gray-300"
                                            }`}
                                        onClick={(e) =>
                                            setMomentCustomization(!momentCustomization)
                                        }
                                    >
                                        <span>
                                            <FaEdit />
                                        </span>
                                        <span>Customize</span>
                                    </span>
                                </div>
                            </div>

                            <div className="my-10 mr-4">
                                <div
                                    className={`flex item-center justify-between w-full py-5 px-5 rounded-xl ${contentFormVisible
                                        ? "border"
                                        : "border-2 border-primary-color"
                                        }`}
                                    onClick={(e) => setContentFormVisible(!contentFormVisible)}
                                >
                                    <p className="cursor-default text-xl font-medium text-primary-color">
                                        Content Generation:
                                    </p>
                                    <span className={`${contentFormVisible ? "hidden" : null}`}>
                                        <BsChevronRight size={28} />
                                    </span>
                                    <span className={`${contentFormVisible ? null : "hidden"}`}>
                                        <BsChevronDown size={28} />
                                    </span>
                                </div>
                                <div
                                    className={`border border-solid border-primary-color rounded-lg  w-full h-auto px-8 mt-2 ${contentFormVisible ? "block" : "hidden"
                                        }`}
                                >
                                    <div className="mt-5 mb-10">
                                        <p className="text-l font-semibold">
                                            Content for (select one):
                                        </p>
                                        <div className="flex flex-wrap space-x-10 my-3">
                                            {socials.map((social) => {
                                                return (
                                                    // code for multiple socials
                                                    // <div
                                                    //     key={social.id}
                                                    //     className={`cursor-pointer ${selectedSocials.includes(social.label)
                                                    //         ? "bg-linear-gradient text-white"
                                                    //         : null
                                                    //         } p-1.5 rounded-lg`}
                                                    //     onClick={() => toggleSocial(social.label)}
                                                    // >
                                                    //     {displaySocial(social.label)}
                                                    // </div>

                                                    <div
                                                        key={social.id}
                                                        className={`cursor-pointer ${selectedSocial == social.label
                                                            ? "bg-linear-gradient text-white"
                                                            : null
                                                            } p-1.5 rounded-lg`}
                                                        onClick={() => toggleSocial(social.label)}
                                                    >
                                                        {displaySocial(social.label)}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {/* <div className="my-10">
                                        <p className="text-l font-semibold">Select product:</p>
                                        <Dropdown
                                            name="product"
                                            id="select-product"
                                            options={products}
                                            selectedOption={selectedProduct}
                                            handleSelectChange={handleSelectProduct}
                                        />
                                    </div> */}

                                    <div className="my-10">
                                        <p className="text-l font-semibold">Select objective:</p>
                                        <Dropdown
                                            name="objective"
                                            id="select-objective"
                                            options={objectives}
                                            selectedOption={selectedObjective}
                                            handleSelectChange={handleSelectObjective}
                                        />
                                    </div>

                                    <div className="my-10">
                                        <p className="text-l font-semibold">Content Tonality:</p>
                                        <Dropdown
                                            name="tonality"
                                            id="select-tone"
                                            options={tones}
                                            selectedOption={selectedTone}
                                            handleSelectChange={handleSelectTone}
                                        />
                                    </div>

                                    <div className="my-10">
                                        <p className="text-l font-semibold">
                                            Structure of Content:
                                        </p>
                                        <InputText
                                            name="content-structure"
                                            id="content-structure"
                                            handleChange={updateFormData}
                                        />
                                    </div>

                                    <div className="my-10">
                                        <p className="text-l font-semibold">Similar Content:</p>
                                        <textarea
                                            name="similar-content"
                                            id="similar content"
                                            className="border border-solid border-primary-color rounded-lg  block w-full h-32 px-5 py-2 mt-2 font-medium overflow-y-auto"
                                            onChange={updateFormData}
                                        />
                                    </div>

                                    <div className="my-10 flex justify-center">
                                        <Button buttonText="Generate Content" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="cursor-default my-4 text-xl font-medium text-primary-color w-full">
                        <div className="float-left ml-6">
                            Instagram:
                        </div>
                    </div>
                    <div>
                        <div className="flex">
                            <PostText />
                            <AiImages />
                        </div>

                        <div className={`mt-5 mb-5 flex justify-end gap-2 w-1/3 mr-4 float-right`}>
                            <span className={`w-1/2 ${selectedImages.length == 0 ? 'pointer-events-none' : null}`} onClick={() => document.getElementById('post-preview-modal').showModal()}>
                                <Button buttonText="Preview" strokeOnly={true} width="full" />
                            </span>
                            <span className={`w-1/2 ${selectedImages.length == 0 ? 'pointer-events-none' : null}`}>
                                <Button buttonText="Publish" width="full" />
                            </span>
                        </div>
                        {/* <span className="w-10 bg-red-500" onClick={(e)=>console.log(selectedImages)}>click me</span> */}


                        <dialog id="post-preview-modal" className="modal">
                            <div className="modal-box max-w-4xl">
                                <form method="dialog">
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <Instapost />
                            </div>
                        </dialog>
                    </div>
                </div>

            </div>
        </>
    );
}
