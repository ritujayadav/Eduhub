import React, { useState } from 'react';

const VideoPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <button onClick={togglePopup}>Translate</button>

      {showPopup && (
        <div className="video-popup">
          <video controls>
          {/* give your video linke here */}
            <source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button onClick={togglePopup}>Close</button>
        </div>
      )}

      <style jsx>{`
        /* Style for the video popup */
        .video-popup {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: white;
          padding: 20px;
          border: 1px solid #ccc;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
          z-index: 1000;
        }
      `}</style>
    </div>
  );
};

export default VideoPopup;