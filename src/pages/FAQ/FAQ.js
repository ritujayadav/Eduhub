import React, { useState } from "react";
import "./FAQ.css";
import ImgSrc from "../../shared/ImgSrc";
import Scrolltop from "../../components/ScrollTop/Scrolltop";
import { Fragment } from "react";
import Footer from "../../components/Footer/Footer";

export default function FAQ() {
  const [isOneActive, setOneActive] = useState("false");
  const [isTwoActive, setTwoActive] = useState("false");
  const [isThreeActive, setThreeActive] = useState("false");
  const [isFourActive, setFourActive] = useState("false");

  const handleToggle = (ques) => {
    switch (ques) {
      case "one":
        setOneActive((prev) => !prev);
        break;
      case "two":
        setTwoActive((prev) => !prev);
        break;
      case "three":
        setThreeActive((prev) => !prev);
        break;
      case "four":
        setFourActive((prev) => !prev);
        break;
    }
  };
  return (
    <Fragment>
      <section className="faq__container">
        <Scrolltop showBelow={250} />
        <div>
          <h2 className="faq__title">FAQS</h2>

          <div
            className={`faq ${isOneActive ? "" : "active"}`}
            onClick={handleToggle.bind(this, "one")}
            key="1"
          >
            <div className="faq__question">
              <h3>Q: HOW DO I FIGURE OUT WHAT TO LEARN?</h3>

              <svg width="15" height="10" viewBox="0 0 42 25">
                <path
                  d="M3 3L21 21L39 3"
                  stroke="white"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="faq__answer">
              <p>
                The most important thing is that you want to learn something
                that interests you, because once you start learning, you’ll be
                with this topic for a while. Choosing something just because
                it’s popular or what others are doing isn’t the way to go
                because if you don’t have a true interest in it, you’ll lose the
                motivation to learn! Spend some time seriously looking into the
                different tech career paths before choosing one to go down.
              </p>
            </div>
          </div>

          <div
            className={`faq ${isTwoActive ? "" : "active"}`}
            onClick={handleToggle.bind(this, "two")}
            key="2"
          >
            <div className="faq__question">
              <h3>Q: How can I start learning?</h3>

              <svg width="15" height="10" viewBox="0 0 42 25">
                <path
                  d="M3 3L21 21L39 3"
                  stroke="white"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="faq__answer">
              <p>
              
To start learning on EduHub, you can begin by watching educational videos and reading insightful stories. These materials are created to help you grasp new concepts and broaden your knowledge. Additionally, there are quizzes available to test your understanding and reinforce what you've learned.


              </p>
            </div>
          </div>

          <div
            className={`faq ${isThreeActive ? "" : "active"}`}
            onClick={handleToggle.bind(this, "three")}
            key="3"
          >
            <div className="faq__question">
              <h3>Q:Do I need a computer?</h3>

              <svg width="15" height="10" viewBox="0 0 42 25">
                <path
                  d="M3 3L21 21L39 3"
                  stroke="white"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="faq__answer">
              <p>
             
While you can certainly use a computer to access EduHub, the platform is designed to be versatile. You can also access it using a tablet or a smartphone. This means you can learn on the device that is most comfortable and convenient for you.
              </p>
            </div>
          </div>

          <div
            className={`faq ${isFourActive ? "" : "active"}`}
            onClick={handleToggle.bind(this, "four")}
            key="4"
          >
            <div className="faq__question">
              <h3>
                Q: What if I don't understand something?

              </h3>

              <svg width="15" height="10" viewBox="0 0 42 25">
                <path
                  d="M3 3L21 21L39 3"
                  stroke="white"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="faq__answer">
              <p>
              No need to worry! If you come across something that you find challenging or confusing, you can ask questions. EduHub provides ways for you to seek clarification and get help from fellow learners or experts, ensuring that you have the support you need on your learning path.
              </p>
            </div>
          </div>
        </div>
        <div className="faq__img">
          <img
            src={ImgSrc.confuse}
            alt="Content Owned By <a href='https://pngtree.com/so/reading-clipart'>reading clipart png from pngtree.com</a>"
            className="faq__confuse--img"
          />
        </div>
      </section>
      <Footer />
    </Fragment>
  );
}
