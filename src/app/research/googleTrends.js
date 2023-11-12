import React, { useEffect } from 'react';

const GoogleTrendsWidget = () => {
    useEffect(() => {
        // Load the Google Trends script
        const script = document.createElement('script');
        script.src = 'https://ssl.gstatic.com/trends_nrtr/3523_RC02/embed_loader.js';
        script.async = true;
        document.head.appendChild(script);

        // Execute the script to render the widget
        script.onload = () => {
            const trendsScript = document.createElement('script');
            trendsScript.text = `
        trends.embed.renderExploreWidget("TIMESERIES", {
          "comparisonItem": [{"keyword": "Diwali", "geo": "IN", "time": "today 1-m"},{"keyword": "holi", "geo": "IN", "time": "today 1-m"}],
          "category": 0,
          "property": ""
        }, {
          "exploreQuery": "date=today%201-m&geo=IN&q=Diwali&hl=en",
          "guestPath": "https://trends.google.com:443/trends/embed/"
        });
      `;
            document.head.appendChild(trendsScript);
        };

        // Clean up the script on component unmount
        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <div>
            <h1>Google Trends Widget</h1>
            <div id="your-trends-container">
                <iframe
                    title="Google Trends Widget"
                    id="google-trends-iframe"
                    style={{ width: '30%', height: '500px', border: 'none' }}
                />
            </div>
        </div>
    );
};

export default GoogleTrendsWidget;