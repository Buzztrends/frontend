"use client"
import React from 'react'
import Socialmedia from '@/components/socialmedia'
import Trendingnews from '@/components/trendingnews'
import Sidebar from '@/components/sidebar';
import { useState } from 'react';
import Competition from '@/components/competition';
import Link from 'next/link';
// import TrendCard from '@/components/TrendCard';
// import Hashtag from '@/components/Hashtag';

export default function Home() {
  const data = {
    "general_news": [
      {
        "title": "Lorem Ipsum",
        "url": "https://www.example.com",
        "source": "Example News",
        "topic": "Technology"
      },
      {
        "title": "New Technology Advancements",
        "url": "https://www.example.com/tech-advancements",
        "source": "Tech Innovations Weekly",
        "topic": "Technology"
      },
      {
        "title": "Data Security in the Digital Age",
        "url": "https://www.example.com/data-security",
        "source": "Cybersecurity Times",
        "topic": "Technology"
      },
      {
        "title": "Latest Operating System Updates",
        "url": "https://www.example.com/os-updates",
        "source": "OS Insights",
        "topic": "Technology"
      },
      {
        "title": "Lorem Ipsum",
        "url": "https://www.example.com",
        "source": "Example News",
        "topic": "Technology"
      },
      {
        "title": "New Technology Advancements",
        "url": "https://www.example.com/tech-advancements",
        "source": "Tech Innovations Weekly",
        "topic": "Technology"
      },
      {
        "title": "Data Security in the Digital Age",
        "url": "https://www.example.com/data-security",
        "source": "Cybersecurity Times",
        "topic": "Technology"
      },
      {
        "title": "Latest Operating System Updates",
        "url": "https://www.example.com/os-updates",
        "source": "OS Insights",
        "topic": "Technology"
      },
      {
        "title": "Lorem Ipsum",
        "url": "https://www.example.com",
        "source": "Example News",
        "topic": "Technology"
      },
      {
        "title": "New Technology Advancements",
        "url": "https://www.example.com/tech-advancements",
        "source": "Tech Innovations Weekly",
        "topic": "Technology"
      },
      {
        "title": "Data Security in the Digital Age",
        "url": "https://www.example.com/data-security",
        "source": "Cybersecurity Times",
        "topic": "Technology"
      },
      {
        "title": "Latest Operating System Updates",
        "url": "https://www.example.com/os-updates",
        "source": "OS Insights",
        "topic": "Technology"
      },
      {
        "title": "Lorem Ipsum",
        "url": "https://www.example.com",
        "source": "Example News",
        "topic": "Technology"
      },
      {
        "title": "New Technology Advancements",
        "url": "https://www.example.com/tech-advancements",
        "source": "Tech Innovations Weekly",
        "topic": "Technology"
      },
      {
        "title": "Data Security in the Digital Age",
        "url": "https://www.example.com/data-security",
        "source": "Cybersecurity Times",
        "topic": "Technology"
      },
      {
        "title": "Latest Operating System Updates",
        "url": "https://www.example.com/os-updates",
        "source": "OS Insights",
        "topic": "Technology"
      }
    ],
    "industry_news": [
      {
        "title": "Space Exploration Breakthroughs",
        "url": "https://www.example.com/space-exploration",
        "source": "Cosmic Discoveries",
        "topic": "Science"
      },
      {
        "title": "Advances in Medical Research",
        "url": "https://www.example.com/medical-research",
        "source": "Health Today",
        "topic": "Science"
      },
      {
        "title": "Global Economic Trends",
        "url": "https://www.example.com/economic-trends",
        "source": "Financial Gazette",
        "topic": "Business"
      }
    ],
    "current_events": [
      {
        "event_name": "Advances in Medical Research",
        "topic": "Science"
      },
      {
        "event_name": "Data Security in the Digital Age",
        "topic": "Technology"
      },
      {
        "event_name": "Latest Operating System Updates",
        "topic": "Technology"
      }
    ],
    "social_media_trends": [
      {
        "title": "Trend 1",
        "hashtags": ["#trending1", "#popular"],
        "validation": null
      },
      {
        "title": "Trend 2",
        "hashtags": ["#trending2", "#viral"],
        "validation": null
      },
      {
        "title": "Trend 3",
        "hashtags": ["#trending3", "#socialmedia"],
        "validation": null
      },
      {
        "title": "Trend 4",
        "hashtags": ["#trending4", "#engagement"],
        "validation": null
      },
      //   {
      //     "title": "Trend 5",
      //     "hashtags": ["#trending5", "#followers"],
      //     "validation": null
      //   }
    ]
  };

  const mapper = {
    "industry_news": "Industry News",
    "general_news": "General News",
    "current_events": "Current Events",
    "social_media_trends": "Social Media"

  };
const [title, setTitle] = useState("");
  const [description , setDescription] = useState("");
  const [event_name, setEvent_name] = useState("");
  const [source, setSource] = useState("");
  const [topic, setTopic] = useState("");
  const [image, setImage] = useState("");


  // Modal 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = ({data}) => {
    setIsModalOpen(!isModalOpen);
setTitle(data.title);
    setEvent_name(data.event_name);
    setSource(data.source);
    setTopic(data.topic);
    setImage("/images/card.png");
    setDescription("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet dictum aliquam, nibh.");
  };

  const closeModal = () => {
    setIsModalOpen(false);
      };



  return (
    <div className='flex'>
      <Sidebar />
      <div className='p-5 flex flex-col gap-11 w-4/5 ml-auto'>
        <Trendingnews data={data} mapper={mapper} toggleModal={toggleModal} />
        <Socialmedia data={data} mapper={mapper} />
        <Competition/>
        {/* Modal starts  */}
      {
        isModalOpen && (
          <div className="fixed top-0 left-0 right-0 bottom-0 flex z-40 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full items-center justify-center">
            <div className="relative w-full max-w-6xl max-h-full">
              <div className="relative bg-white rounded-lg shadow-xl dark:bg-gray-700">
                <div className="flex items-start justify-between p-4 rounded-t ">
                  <h3 className="text-xl text-gray-900 dark:text-white mx-4">
                    {title}
                  </h3>
                  <button
                    onClick={closeModal}
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="px-6 space-y-6 md:w-5/10">
                  <div className="news-card flex">
                    <div className="h-full w-1/2 border p-4">
                      <div className='source mb-4'>
                        {source}
                      </div>
                      <img className="" src={image}></img>
                      <div className="mt-4">
                        {/* {event_name} */}
                      </div>
                      <div className="mt-4 mb-4">
                        {description} <button>... more</button>
                      </div>
                    </div>
                    <div className="news-side-card w-auto">
                      <div className="new-hashtag-card md:h-1/3 flex flex-wrap">
                        {/* <Hashtag tag="India" />
                      <Hashtag tag="India" />
                      <Hashtag tag="India" />
                      <Hashtag tag="India" />
                      <Hashtag tag="India" /> */}
                      </div>
                      <div className="news-hashtags-card"></div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end p-2 space-x-2 rounded-b dark:border-gray-600">
                  <Link
                    href={{
                      pathname: "/generate-content",
                      query: { title: title},
                    }}
                    onClick={closeModal}
                    type="button"
                    className="text-white bg-linear-gradient hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Generate Content
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )
      }
      {/* Modal ends  */}
      </div>

      
    </div >
  )
}


