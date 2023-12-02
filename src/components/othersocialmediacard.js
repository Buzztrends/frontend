"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaEllipsisH } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa6";
import { FaLessThan } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { useContentContext } from "@/context/contentContext";
import Cookies from "js-cookie";

const Othersocialmediacard = ({ caption }) => {
  const { selectedImages } = useContentContext();
  const [num, setNum] = useState(0);

  const [username, setUsername] = useState("");
  useEffect(() => {
    setUsername(Cookies.get("username"));
  }, []);

  const handleImages = (val) => {
    if (val == "inc") {
      setNum((num) => (num + 1) % selectedImages.length);
    } else {
      if (num == 0) {
        setNum(selectedImages.length - 1);
      } else {
        setNum((num) => num - 1);
      }
    }
  };

  return (
    <div className="insta col-span-2 flex flex-col gap-2 mt-6">
      {/* <div className="flex ml-2 items-center gap-2">
        <span className="font-roboto text-xl font-semibold leading-6">
          Post
        </span>
      </div> */}
      <div className="flex flex-col p-5 rounded-lg border border-black gap-3 font-roboto text-xs leading-4">
        <div className="relative">
          <img alt="" src={selectedImages[num]} width={300} height={100} />
          {selectedImages.length != 1 && (
            <div
              className="absolute right-0 top-1/2 cursor-pointer"
              onClick={() => handleImages("inc")}
            >
              <FaGreaterThan />
            </div>
          )}
          {selectedImages.length != 1 && (
            <div
              className="absolute left-0 top-1/2 cursor-pointer"
              onClick={() => handleImages("dec")}
            >
              <FaLessThan />
            </div>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <div className="font-normal">{caption}</div>
        </div>
      </div>
    </div>
  );
};

export default Othersocialmediacard;


