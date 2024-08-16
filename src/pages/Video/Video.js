import React from "react";
import "./Video.css";

const Video = () => {
  return (
    <div className="video__container">
      <h1>Topics</h1>
      <ul className="video__card--ul">
        <li className="video__card"><a href="/lecture/learn">Videos to Access</a></li>
      </ul>
    </div>
  )
}

export default Video;
