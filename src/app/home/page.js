"use client";
import React from "react";
import Socialmedia from "@/components/socialmedia";
import Trendingnews from "@/components/trendingnews";
import Sidebar from "@/components/sidebar";
import { useState, useEffect } from "react";
import Competition from "@/components/competition";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header";
import axios from "axios";
import GoogleTrends from "./googleTrends";


// import TrendCard from '@/components/TrendCard';
// import Hashtag from '@/components/Hashtag';

export default function Home() {
  const [details, setDetails] = useState(null);
  const [show, setShow] = useState(false);

  const getData = async () => {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER}/user/data`,
        { company_id: 100 },
        {
          headers: { 
            'api-key': `${process.env.NEXT_PUBLIC_API_KEY}`,
            'x-access-token': localStorage.getItem('authToken')
          },
        }
      )
      setDetails(res.data.moments);
      setShow(true);
      console.log(res.data.moments, "line 27");
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
  }, [])

  const mapper = {
    industry_news: "Industry News",
    general_news: "General News",
    current_events: "Current Events",
    social_media_trends: "Social Media",
  };
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [event_name, setEvent_name] = useState("");
  const [source, setSource] = useState("");
  const [topic, setTopic] = useState("");
  const [image, setImage] = useState("");
  const [trends, setTrends] = useState([]);

  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = ({ data }) => {
    setIsModalOpen(!isModalOpen);
    setTitle(data.title);
    setEvent_name(data.event_name);
    setSource(data.source);
    setTopic(data.topic);
    setImage(data.top_image);
    setDescription(data.description);
    setTrends(data.validation.google_trends);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className=" w-4/5 ml-auto">
        <Header header="Research" />
        <div className="p-5 mt-24 flex flex-col gap-11">
          {show && <Trendingnews data={details} mapper={mapper} toggleModal={toggleModal} />}
          {show && <Socialmedia id={"socialmedia"} data={details} mapper={mapper} />}
          {/* <Competition id={"competition"} /> */}
          {/* Modal starts  */}
          {isModalOpen && (
            <div className="fixed top-0 left-0 right-0 bottom-0 flex z-40 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full items-center justify-center">
              <div className="relative w-full max-w-6xl max-h-full">
                <div className="relative bg-white rounded-lg shadow-xl dark:bg-gray-700">
                  <div className="flex items-start justify-between p-4 rounded-t ">
                    <h3 className="text-xl text-gray-900 dark:text-white mx-4">
                      {title}{event_name}
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
                        <div className="source mb-4">{source}</div>
                        <img alt="" src={image} width={600} height={100} />
                        <div className="mt-4">{/* {event_name} */}</div>
                        <div className="mt-4 mb-4">
                          {description} {topic}
                        </div>
                      </div>
                      <div className="news-side-card w-1/2">
                        {/* <div className="new-hashtag-card md:h-1/3 flex flex-wrap"></div> */}
                        <div className="news-hashtags-card w-full">
                          <div id="widget" className='w-full'>
                            {console.log('trends', trends)}
                            <GoogleTrends
                              type="TIMESERIES"
                              keywords={trends.length < 5 ? trends:trends.slice(0, 5)} //max keywords allowed in google trends embedding is only 5
                              url="https://ssl.gstatic.com/trends_nrtr/3523_RC02/embed_loader.js"
                            />
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end p-2 space-x-2 rounded-b dark:border-gray-600">
                    <Link
                      href={{
                        pathname: "/generate-content",
                        query: { title: title },
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
          )}
          {/* Modal ends  */}
        </div>
      </div>
    </div>
  );
}
