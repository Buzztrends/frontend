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
import { FaTwitter } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

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
            return <FaTwitter size={40} />
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


    // To check if content is generated or not
    const [isContentGenerated, setIsContentGenerated] = useState(false);
    


    return (
        <>
            <Header header="Create Content" />
            <div className="h-24 w-10/12 mb-10 float-right">
                <form action="" className="ml-6">
                    <div className="mt-5">
                        <label htmlFor="moment-input" className="text-xl font-medium text-primary-color">Moment:</label>
                        <div className="flex items-center space-x-2 w-10/12">
                            <InputText name="moment-for-generation" id="moment-input" isDisabled={momentCustomization ? undefined:true}/>
                            <span className={`select-none cursor-pointer inline-flex items-center space-x-1 px-5 py-2 mt-2 rounded-lg hover:bg-gray-200 font-medium ${momentCustomization ? "border-2 border-black border-solid bg-gray-200":"border-2 border-transparent border-solid bg-gray-300"}`} onClick={(e)=>setMomentCustomization(!momentCustomization)}>
                                <span><FaEdit/></span>
                                <span>Customize</span>
                            </span>
                        </div>
                    </div>

                    <div className="my-10">
                        <p className="text-xl font-medium text-primary-color">Content Generation:</p>
                        <div className="border border-solid border-primary-color rounded-lg shadow-primary block w-10/12 h-auto px-8 my-2">
                            <div className="mt-5 mb-10">
                                <p className="text-l font-semibold">Content for (select one or multiple):</p>
                                <div className="flex space-x-10 my-3">
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
                                <Dropdown name="product" id="select-product" options={products} selectedOption={selectedProduct} handleSelectChange={handleSelectProduct}/>
                            </div>


                            <div className="my-10">
                                <p className="text-l font-semibold">Content Tonality:</p>
                                <Dropdown name="tonality" id="select-tone" options={tones} selectedOption={selectedTone} handleSelectChange={handleSelectTone}/>
                            </div>

                            <div className="my-10">
                                <p className="text-l font-semibold">Structure of Content:</p>
                                <InputText name="content-structure" id="content-structure" />
                            </div>

                            <div className="my-10">
                                <p className="text-l font-semibold">Similar Content:</p>
                                <textarea name="similar-content" id="similar content" className="border border-solid border-primary-color rounded-lg shadow-primary block w-10/12 h-64 px-5 py-2 mt-2 font-medium overflow-y-auto"/>
                            </div>

                            <div className="mt-10 mb-5 flex justify-center">
                                <Button buttonText="Generate Content"/>
                            </div>
                        </div>
                    </div>


                </form>
            </div>
        </>
    )
}