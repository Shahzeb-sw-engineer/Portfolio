import Navbar from "../Components/Navbar";
import hi from '../assets/icons/hi.png'
import skill1 from '../assets/icons/Html.png'
import skill2 from '../assets/icons/CSS.png'
import skill3 from '../assets/icons/JavaScript.png'
import skill4 from '../assets/icons/React.png'
import skill7 from '../assets/icons/NodeJs.png'
import skill8 from '../assets/icons/figma.png'
import skill9 from '../assets/icons/bootstrap.png'
import skill10 from '../assets/icons/taiwind.png'
import skill11 from '../assets/icons/mysql.png'
import skill12 from '../assets/icons/Mongodb.png'

import profileImage from '../assets/Images/IMG_20240812_001857.jpg'
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <div className="Top_Section">
        <Navbar />
      </div>
      <div className="Hero_Section">
        <div className="container heroSection">
          <div className="row py-5">
            <div className="col-lg-6 d-flex justify-content-around">
              <div className="WelcomeText">
                <div className="py-2">
                  <h1>Hi, I'm Muhammad Shahzeb,<img src={hi} alt="" /></h1>
                  <p>A Front-End Web Developer. I specialize in creating responsive, interactive, and modern web applications using technologies like HTML, CSS, JavaScript, Bootstrap, React.js, and more. My passion is to turn ideas into digital solutions with clean, efficient code. Explore my work below!</p>
                </div>
                <div className="d-flex">
                  <i class="bi bi-geo-alt-fill"></i>
                  <p className="px-1">Rawalpindi Punjab Pakistan</p>
                </div>
                <div className="py-2">
                  <a href="https://github.com/Shahzeb-sw-engineer"><i class="bi bi-github"></i></a>
                  <a href="www.linkedin.com/in/muhammad-shahzeb-73b099335"><i class="bi bi-linkedin px-3"></i></a>
                  <a href="https://www.facebook.com/profile.php?id=100035486062793&mibextid=ZbWKwL"><i class="bi bi-facebook "></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-around">
              <div className="Profile">
                <img src={profileImage} className="img-fluid" alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Skill_Section">
        <div className="container Skills">
          <div className="row ">
            <div className="col-lg-12 d-flex justify-content-around">
              <h1 className="text-center">My Skills</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2">
              <div className="SkillImage">
                <img src={skill1} className="img-fluid" alt="" srcset="" />
                <h5>HTML</h5>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="SkillImage">
                <img src={skill2} className="img-fluid" alt="" srcset="" />
                <h5>CSS</h5>
              </div></div>
            <div className="col-lg-2">
              <div className="SkillImage">
                <img src={skill3} className="img-fluid" alt="" srcset="" />
                <h5>JavaScript</h5>
              </div></div>
            <div className="col-lg-2">
              <div className="SkillImage">
                <img src={skill4} className="img-fluid" alt="" srcset="" />
                <h5>React js</h5>
              </div></div>
              <div className="col-lg-2">
              <div className="SkillImage">
                <img src={skill8} className="img-fluid" alt="" srcset="" />
                <h5>Figma</h5>
              </div></div>
          </div>
          <div className="row">
            <div className="col-lg-2">
              <div className="SkillImage">
                <img src={skill7} className="img-fluid" alt="" srcset="" />
                <h5>Node Js</h5>
              </div></div>
       
            <div className="col-lg-2">
              <div className="SkillImage">
                <img src={skill9} className="img-fluid" alt="" srcset="" />
                <h5>Bootstrap</h5>
              </div></div>
            <div className="col-lg-2">
              <div className="SkillImage">
                <img src={skill10} className="img-fluid" alt="" srcset="" />
                <h5>Tailwind</h5>
              </div></div>
            <div className="col-lg-2">
              <div className="SkillImage">
                <img src={skill11} className="img-fluid" alt="" srcset="" />
                <h5>MySql</h5>
              </div></div>
            <div className="col-lg-2">
              <div className="SkillImage">
                <img src={skill12} className="img-fluid" alt="" srcset="" />
                <h5>Mongodb</h5>
              </div></div>
          </div>
        </div>
      </div>
      
  
      <div className="Footer_Section">
        <Footer />
      </div>
    </>
  )
}

export default Home;
