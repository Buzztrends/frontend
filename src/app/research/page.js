"use client";
import { useState } from "react";
import NewsCard from "@/components/NewsCard/index.js";

export default function Research() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <NewsCard toggleModal={toggleModal}/>

      {isModalOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex z-40 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full items-center justify-center">
          <div className="relative w-full max-w-6xl max-h-full">
            <div className="relative bg-white rounded-lg shadow-xl dark:bg-gray-700">
              <div className="flex items-start justify-between p-4 rounded-t ">
                <h3 className="text-xl text-gray-900 dark:text-white">
                  Title: Ind vs SA | Topic: Viral Instagram Trend
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
              <div className="p-6 space-y-6 md:w-5/10">
                <div className="news-card flex">
                  <div className="no-scrollbar overflow-y-auto h-96">
                    <TrendCard />
                    <TrendCard />
                    <TrendCard />
                    <TrendCard />
                    <TrendCard />
                  </div>
                  <div className="news-side-card w-auto">
                    <div className="new-hashtag-card md:h-1/3 flex flex-wrap">
                      <Hashtag tag="India" />
                      <Hashtag tag="India" />
                      <Hashtag tag="India" />
                      <Hashtag tag="India" />
                      <Hashtag tag="India" />
                    </div>
                    <div className="news-hashtags-card"></div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end p-2 space-x-2 rounded-b dark:border-gray-600">
                <button
                  onClick={closeModal}
                  type="button"
                  className="text-white bg-linear-gradient hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Generate Content
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const TrendCard = () => {
  return (
    <div className="trend-card m-4 p-4 rounded-xl bg-white bg-clip-border border-black border">
      <div className="trend-card-head">
        India isn't peaking early and will believe there is room for
        improvement, says Ravi Shastri
      </div>
      <div className="trend-card-content text-xs mt-2">
        India isn't peaking early and will believe there is room for
        improvement, says Ravi Shastri
      </div>
    </div>
  );
};

const Hashtag = ({tag}) => {
  return (
    <div className="news-hashtags p-2 px-8 m-4 border border-indigo-800 rounded-3xl">#{tag}</div>
  );
};
