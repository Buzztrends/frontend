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
    <div className="flex flex-col gap-y-2 md:w-full h-full">
      <div className="flex justify-between">
        <div className="bg-gray-400 rounded-lg flex justify-between items-center h-14 w-3/5">
          {items.map((item, index) => (
            <button
              ref={index === 0 ? firstBtnRef : null}
              key={index}
              onClick={() => {setSelectedTab(index)
                
              }}
              className={`w-1/2 h-full rounded-lg focus:bg-gradient-linear focus:text-white ${selectedTab === index ? 'bg-gradient-linear text-white' : ''}`}
            >
              {item.tab}
            </button>
          ))}
        </div>
        <div className="items-center flex justify-items-center">
          <button>Edit Prompt</button>
        </div>
      </div>

      <div className="text h-full">
        {items.map((item, index) => (
          <div key={index} className={`${selectedTab === index ? "" : "hidden"}`}>
            {item.content}
            {/* <div dangerouslySetInnerHTML={{__html:item.content}}></div> */}
          </div>
        ))}
      </div>
    </div>
  );
}
