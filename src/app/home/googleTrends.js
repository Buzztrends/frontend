import React from "react";
import Script from "react-load-script";

export default function GoogleTrends({ type, keywords, url }) {
    const comparisonItem = []
    for(let keyword of keywords){
        comparisonItem.push({
            keyword,
            geo: "IN",
            time: "today 1-m"
        })
    }

  const handleScriptLoad = _ => {
    window.trends.embed.renderExploreWidgetTo(
      document.getElementById("widget"),
      type,
      {
        comparisonItem,
        category: 0,
        property: ""
      },
      {
        exploreQuery: `date=today%201-m&geo=IN&q=Diwali,Holi&hl=en`,
        guestPath: "https://trends.google.com:443/trends/embed/"
      }
    );
  };

  const renderGoogleTrend = _ => {
    return <Script url={url} onLoad={handleScriptLoad} />;
  };

  return <div className="googleTrend">{renderGoogleTrend()}</div>;
}