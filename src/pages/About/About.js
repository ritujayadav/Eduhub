import React,{ useState, useEffect } from "react";
import axios from "axios";
import GitHubIcon from '@material-ui/icons/GitHub';
import Scrolltop from "../../components/ScrollTop/Scrolltop";
import Footer from "../../components/Footer/Footer";
import ImgSrc from "./../../shared/ImgSrc";
import "./About.css";

const About = (props) => {

  const [contributors, setContributors] = useState([]);
  const [viewnumber, setViewNumber] = useState(15);
  const [adminmentors, setAdminMentors] = useState([]);
  const adminmentors_ids = [58785998, 78724676];

  const apiURL = "";

  useEffect(() =>
  {
    const fetchData = async () =>
    {
      const res = await axios.get(apiURL);
      setAdminMentors(res.data.filter(contributor => adminmentors_ids.includes(contributor.id)));
      setContributors(res.data.filter(contributor => !adminmentors_ids.includes(contributor.id)));
    };
    fetchData();
  }, []);

  const getrole = (id) => {
    switch(id){
      case 58785998 : return "Admin"; 
      case 78724676 : return "Mentor";
      default : return "Contributor";
    }
  }

  const handleViewMore = (e) => {
    e.preventDefault(); 
    setViewNumber(viewnumber + 15);
  }

  const handleViewLess = (e) => {
    e.preventDefault(); 
    setViewNumber(viewnumber - 15);
  }

  return (
    <div>
      <section className="about__container">
        <h1 className="about__heading">Who we are</h1>
        <div className="about__div">
          <img src={ImgSrc.Education} alt="logo" />
          <h1>What is EduHub?</h1>
          <p>
          Welcome to EduHub – Your Personalized E-Learning Haven!<br></br>
🌟 Tailored Learning: Choose from a diverse range of courses.<br></br>
📚 Interactive Experience: Engage with quizzes, assignments and more.<br></br>
🤝 Community Connection: Grow together in a supportive online community.<br></br>
🎓 Expert Guidance: Learn from industry experts that bring your education to life.<br></br>
🏆 Certify Your Skills: Earn certificates upon completion, showcasing your expertise to the world.<br></br>
⏰ Flexibility: Study at your own pace, anytime, anywhere – fitting learning into your busy lifestyle.<br></br>


<br></br>
Join EduHub today and unlock a world of learning that's as unique as you are. Your journey to knowledge starts here!





.
          </p>
        </div>
        <div className="about__div">
          <img src={ImgSrc.Working} alt="logo" />
          <h1>How does it work?</h1>
          <p>
          EduHub helps you learn, even if you haven't been to school.
          <br></br>

❓ FAQs: Find answers to questions you have, like having a helpful friend.
<br></br>
🧠 Quiz Time: Take fun quizzes that ask questions about what you learned.
<br></br>
📚 Blogs: Read online stories that teach you about interesting topics and new words.
<br></br>
📺 Videos: Watch short movies that teach you new things, like stories that make learning easy.
<br></br>
🌟 Learn Together: EduHub is for everyone. You can talk to others and share what you learned.
<br></br>
🏆 Show What You Know: When you finish, you get a special paper called a "certificate" 
<br></br>
<br></br>
Join EduHub today for your learning adventure. It's like having a friend who helps you learn every day!.
          </p>
        </div>
        <div className="about__div">
          <img src={ImgSrc.Free} alt="logo" />
          <h1>Is it free?</h1>
          <p>Yes, EduHub is absolutely free for everyone. Learning should be available to everyone, and that's why EduHub doesn't cost anything. Join us and start learning today!</p>
        </div>
        <br/>
        <br/>
        <h1 className="about__heading">Meet Our Team</h1>
        <div className="contributors__list">
          {adminmentors.map((mentor, index) => {
            return (
              <div className="contributor" key={index}>
                <div className="contributor__img">
                  <img src={mentor.avatar_url} alt="contributor-avatar" />
                </div>
                <div className={`contributor__details mentor__details`}>
                  <a href={mentor.html_url} target="_blank">
                  <h3><i className="fab fa-github" aria-hidden="true"></i>@{mentor.login}</h3></a>
                  <p> Project { getrole(mentor.id) }</p>
                </div>
              </div>
              )
            })
          }
        </div>
        <div className="contributors__list">
          {contributors.slice(0,viewnumber).map((contributor, index) => {
            return (
              <div className="contributor" key={index}>
                <div className="contributor__img">
                  <img src={contributor.avatar_url} alt="contributor-pic" />
                </div>
                {
                <div className="contributor__details">
                  <a href={contributor.html_url} target="_blank">
                  <h3><i className="fab fa-github" aria-hidden="true"></i>@{contributor.login}</h3></a>
                  <p>{ getrole(contributor.id) }</p>
                </div>
                }
              </div>
              )
            })
          }
        </div>
        <div className="view__options">
          { viewnumber < contributors.length ?
          <button className="view__more--button" onClick={ handleViewMore }>
            View More
          </button>
          : null }
          { viewnumber > contributors.length ?
          <button className="view__more--button" onClick={ handleViewLess }>
            View Less
          </button>
        : null }
        </div>
        <Scrolltop showBelow={250} />
      </section>
      <Footer />
    </div>
  );
};

export default About;
