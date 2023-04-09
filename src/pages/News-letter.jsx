import React from 'react';
import YouTubePlayer from '../components/ytplayer';

function Newsletter() {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-0">
        {/* <YouTubePlayer /> */}
      </div>
      <div className="relative flex justify-center pt-[120px]">
        <iframe
          className="shadow-lg shadow-inner rounded-xl"
          src="https://tebbaa.substack.com/embed"
          width="480"
          height="320"
          style={{ border: '1px solid #EEE', background: 'white' }}
          frameborder="0"
          scrolling="no"
          allowtransparency="true"
        ></iframe>
      </div>
    </div>
  );
}

export default Newsletter;
