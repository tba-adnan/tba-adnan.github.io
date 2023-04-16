import React from 'react';
import ReactPlayer from 'react-player';

function YouTubePlayer() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=FG0fTKAqZ5g"
        width="100%"
        height="100%"
      />
    </div>
  );
}

export default YouTubePlayer;
