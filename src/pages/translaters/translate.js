import React from "react";
import "../translaters/translate.css";
import ImgSrc from "../../shared/ImgSrc";
import StarIcon from '@material-ui/icons/Star';
import Footer from "../../components/Footer/Footer";

import { CarouselWrapper } from 'react-pretty-carousel';
import VideoPopup from "./vdio";

function Translate() {
    return (
        <div>
            
                
            <div className="App">
			<header className="App-header">
				<h1>YouTube Translator</h1>
                <h4>Get your videos in any language</h4>
				<pre><div class="line"></div></pre>
                <input type="text" placeholder="Enter the URL" />
                
     <VideoPopup />
			</header>
			{/* <footer className="footer">
				Made by - 19IT121 Venis Prajapati And 19IT114 Virag Patel
			</footer> */}
		</div>
   

   

</div>

)
   
}

export default Translate

