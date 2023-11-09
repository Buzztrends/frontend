"use client";
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
import { BsChevronRight } from "react-icons/bs"
import { BsChevronDown } from "react-icons/bs";

import PostText from "@/components/Generate-Content/post-text";
import AiImages from "@/components/Generate-Content/ai-images";
import { ContentContextProvider, useContentContext } from "@/context/contentContext";

export default function GenerateContent() {
    // To toggle moment customization
    const [momentCustomization, setMomentCustomization] = useState(false);

    // To select one/multiple social media platforms to generate content for-
    const [selectedSocials, setSelectedSocials] = useState([]);

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
            label: "linkedin"
        },
        {
            id: 4,
            label: "twitter"
        },
        {
            id: 5,
            label: "email"
        },
        {
            id: 6,
            label: "whatsapp"
        }
    ]

    const toggleSocial = (socialId) => {
        setSelectedSocials((prevState) => prevState.includes(socialId) ? prevState.filter((id) => id !== socialId) : [...prevState, socialId]);
    }

    const displaySocial = (label) => {
        if (label === "instagram") {
            return <FaInstagram size={40} />;
        } else if (label === "facebook") {
            return <FaFacebook size={40} />
        } else if (label === "linkedin") {
            return <FaLinkedin size={40} />
        } else if (label === "twitter") {
            return <FaXTwitter size={40} />
        } else if (label === "email") {
            return <FaRegEnvelope size={40} />
        } else if (label === "whatsapp") {
            return <FaWhatsapp size={40} />
        }
    }



    // To select product
    const [selectedProduct, setSelectedProduct] = useState("");

    const handleSelectProduct = (event) => {
        setSelectedProduct(event.target.value);
    };

    const products = [
        {
            id: 1,
            value: "option1"
        },
        {
            id: 2,
            value: "option2"
        },
        {
            id: 3,
            value: "option3"
        }
    ]


    // To select content tone
    const [selectedTone, setSelectedTone] = useState("");

    const handleSelectTone = (event) => {
        setSelectedTone(event.target.value);
    };

    const tones = [
        {
            id: 1,
            value: "option1"
        },
        {
            id: 2,
            value: "option2"
        },
        {
            id: 3,
            value: "option3"
        }
    ]


    // To show or not show content generation form
    const [contentFormVisible, setContentFormVisible] = useState(true);

    // console.log(useContentContext());

    return (
        <ContentContextProvider>
            <div className="flex">
                <div className="w-1/6 bg-gray-300">
                    sidebar
                </div>

                <div className="w-10/12">
                    <Header header="Create Content" />
                    <div className="w-full float-right">
                        <form action="" className="ml-6">
                            <div className="mt-5 mr-8">
                                <label htmlFor="moment-input" className="text-xl font-medium text-primary-color">Moment:</label>
                                <div className="flex items-center space-x-2 w-full">
                                    <InputText name="moment-for-generation" id="moment-input" isDisabled={momentCustomization ? undefined : true} />
                                    <span className={`select-none cursor-pointer inline-flex items-center space-x-1 px-5 py-2 mt-2 rounded-lg hover:bg-gray-200 font-medium ${momentCustomization ? "border-2 border-black border-solid bg-gray-200" : "border-2 border-transparent border-solid bg-gray-300"}`} onClick={(e) => setMomentCustomization(!momentCustomization)}>
                                        <span><FaEdit /></span>
                                        <span>Customize</span>
                                    </span>
                                </div>
                            </div>

                            <div className="my-10 mr-8">
                                <div className={`flex item-center justify-between w-full py-5 px-5 rounded-xl ${contentFormVisible ? 'border' : 'border-2 border-primary-color'}`} onClick={(e) => setContentFormVisible(!contentFormVisible)}>
                                    <p className="cursor-default text-xl font-medium text-primary-color" >Content Generation:</p>
                                    <span className={`${contentFormVisible ? 'hidden' : null}`}><BsChevronRight size={28} /></span>
                                    <span className={`${contentFormVisible ? null : 'hidden'}`}><BsChevronDown size={28} /></span>
                                </div>
                                <div className={`border border-solid border-primary-color rounded-lg w-full h-auto px-8 mt-2 ${contentFormVisible ? 'block' : 'hidden'}`}>
                                    <div className="mt-5 mb-10">
                                        <p className="text-l font-semibold">Content for (select one or multiple):</p>
                                        <div className="flex flex-wrap space-x-10 my-3">
                                            {
                                                socials.map((social) => {
                                                    return (
                                                        <div key={social.id} className={`cursor-pointer ${selectedSocials.includes(social.id)
                                                            ? "bg-linear-gradient text-white"
                                                            : null
                                                            } p-1.5 rounded-lg`} onClick={() => toggleSocial(social.id)}>
                                                            {displaySocial(social.label)}
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>
                                    </div>

                                    <div className="my-10">
                                        <p className="text-l font-semibold">Select product:</p>
                                        <Dropdown name="product" id="select-product" options={products} selectedOption={selectedProduct} handleSelectChange={handleSelectProduct} />
                                    </div>


                                    <div className="my-10">
                                        <p className="text-l font-semibold">Content Tonality:</p>
                                        <Dropdown name="tonality" id="select-tone" options={tones} selectedOption={selectedTone} handleSelectChange={handleSelectTone} />
                                    </div>

                                    <div className="my-10">
                                        <p className="text-l font-semibold">Structure of Content:</p>
                                        <InputText name="content-structure" id="content-structure" />
                                    </div>

                                    <div className="my-10">
                                        <p className="text-l font-semibold">Similar Content:</p>
                                        <textarea name="similar-content" id="similar content" className="border border-solid border-primary-color rounded-lg block w-full h-64 px-5 py-2 mt-2 font-medium overflow-y-auto" />
                                    </div>

                                    <div className="my-10 flex justify-center">
                                        <Button buttonText="Generate Content" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="cursor-default my-4 ml-6 text-xl font-medium text-primary-color">
                        Instagram :
                    </div>
                    <div>
                        <div className="flex mb-10">
                            <div className="w-1/2 ml-6 mr-3">
                                <PostText />
                            </div>
                            <div className="w-1/2 ml-3 mr-6">
                                <AiImages />
                            </div>
                        </div>
                        <div className="mt-5 flex">
                            <Button buttonText="Preview" strokeOnly={true}/>
                            <Button buttonText="Publish" width="5/6"/>
                        </div>
                    </div>
                </div>
            </div>
        </ContentContextProvider>
    )
}