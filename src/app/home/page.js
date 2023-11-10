import React from 'react'
import Socialmedia from '@/components/socialmedia'
import Trendingnews from '@/components/trendingnews'
import { Sidebar } from '@/components/sidebar';

export default function Home(){
     const data={
      "general_news":[
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
  "industry_news":[
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
  "current_events":[
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
  "social_media_trends":[
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

const mapper={
  "industry_news":"Industry News",
  "general_news":"General News",
  "current_events":"Current Events",
  "social_media_trends":"Social Media"

};

    return(
        <div className='flex'>
      <Sidebar />
      <div className='p-9 w-4/5 flex flex-col gap-6'>
        <Trendingnews data={data} mapper={mapper}/>
      <Socialmedia data={data} mapper={mapper}/>
      </div>
      </div>
    )
}