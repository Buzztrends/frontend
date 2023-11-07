"use client";
import "./style.css";
import {useState, useEffect, useRef } from "react";

export default function TabComponent({ items }) {
  const firstBtnRef = useRef(null);
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    firstBtnRef.current.focus();
  }, []);

  return (
    <div className="flex flex-col gap-y-2 md:w-full">
      <div className="flex justify-between">
        <div className="bg-gray-400 rounded-lg flex justify-between md:w-1/2 items-center gap-x-2">
          {items.map((item, index) => (
            <button
              ref={index === 0 ? firstBtnRef : null}
              key={index}
              onClick={() => setSelectedTab(index)}
              className={`outline-none w-full p-2 rounded-xl focus:bg-gradient-linear focus:text-white ${selectedTab === index ? 'bg-gradient-linear text-white' : ''}`}
            >
              {item.tab}
            </button>
          ))}
        </div>
        <div className="items-center mt-2">
          <button>Edit Prompt</button>
        </div>
      </div>

      <div>
        {items.map((item, index) => (
          <div className={`${selectedTab === index ? "" : "hidden"}`}>
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
}
