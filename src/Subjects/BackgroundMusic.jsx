import React from "react";
import YouTube from "react-youtube";

const BackgroundMusic = ({ videoId, volume = 100 }) => {
  const onReady = (event) => {
    event.target.setVolume(volume); // 0–100 range
    event.target.playVideo();
  };

  return (
    <YouTube
      videoId={videoId}
      opts={{
        height: "0",
        width: "0",
        playerVars: {
          autoplay: 1,
          loop: 1,
          playlist: videoId,
          controls: 0,
        },
      }}
      onReady={onReady}
    />
  );
};

export default BackgroundMusic;