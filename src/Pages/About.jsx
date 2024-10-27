import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import profileImage from '../assets/Images/IMG_20240812_001857.jpg'
import hi from '../assets/icons/hi.png'
function About() {

  return (
    <>
      <div className="Top_Section">
        <Navbar />
      </div>
      <div className="Hero_Section">
        <div className="container">
          <div className="Skillsinfo">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1>About Me</h1>
                <p>I am a passionate front-end web developer with a strong focus on creating interactive, responsive, and visually appealing websites. With expertise in HTML, CSS, JavaScript, and modern frameworks like React, Angular, and Next.js, I strive to bring ideas to life on the web. I am constantly exploring new tools and technologies, such as Figma for design, Node.js for back-end development, and Bootstrap and Tailwind for styling. My goal is to build seamless user experiences that blend creativity with functionality, ensuring every project meets the highest standards.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Detail_Section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 about-text">
              <img src={profileImage} className="ProfileImage img-fluid" />
              <h1>Hi, I'm Muhammad Hamza,<img src={hi} className="hiPNG" alt="" /></h1>
              <p>
                I am a dedicated and enthusiastic <b>Front-End Web Developer</b> with a passion for building user-friendly, responsive, and aesthetically pleasing websites. My journey in web development began with the fundamentals of <b>HTML</b>, <b>CSS</b>, and <b >JavaScript</b>, which allowed me to create static and dynamic websites that were both functional and visually engaging. Over time, I have continuously honed my skills and expanded my knowledge to include modern web technologies and frameworks that enable me to create more robust, interactive, and scalable applications.
              </p>

              <h4>Core Skills & Technologies</h4>
              <p>
                <b>HTML (HyperText Markup Language):</b> <br />
                HTML is the foundation of web development, and I have an in-depth understanding of semantic HTML5. I focus on writing clean, well-structured markup that ensures accessibility and SEO optimization.
              </p>

              <p>
                <b>CSS (Cascading Style Sheets):</b> <br />
                I am skilled in CSS3, including modern features such as Flexbox and Grid, which allow me to create flexible layouts that adapt seamlessly to different screen sizes.
              </p>

              <p>
                <b>JavaScript:</b> <br />
                JavaScript is the core language that powers interactivity on the web, and I have extensive experience in writing clean, modular, and efficient JavaScript code.
              </p>

              <h4>Frameworks & Libraries</h4>
              <p>
                <b>React.js:</b> <br />
                I specialize in React.js, a popular JavaScript library used for building fast, dynamic, and scalable web applications.
              </p>

              <h4>Back-End & Database</h4>
              <p>
                <b>7. Node.js:</b> <br />
                I am proficient in Node.js, which enables me to handle server-side logic using JavaScript. With Node.js, I can create RESTful APIs and handle back-end functionality.
              </p>

              <p>
                <b>Databases – MySQL & MongoDB:</b> <br />
                For data storage, I have worked with both relational databases like MySQL and NoSQL databases like MongoDB.
              </p>

              <h4>Design Tools & UI Frameworks</h4>
              <p>
                <b>Figma:</b> <br />
                Good design is essential for a successful website or application, and I frequently use Figma to collaborate with designers and create wireframes and prototypes.
              </p>

              <p>
                <b>Bootstrap & Tailwind CSS:</b> <br />
                For styling and responsive design, I often utilize Bootstrap and Tailwind CSS. These frameworks help me deliver both functional and visually appealing websites.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="Education_Section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-around">
              <h1 className="text-center">Education</h1>
            </div>
          </div>
          <div className="Institute">
            <div className="row ">
              <div className="col-lg-12 col-sm-12">
                <div className="text">
                  <div className="textS1 justify-content-between">
                    <div className="">
                      <h5>BS Spftwear Engineering</h5>
                      <p><b>Kohat University of Science & Technology</b></p>
                    </div>
                    <div>
                      <p>Sep-2020 | july 2024</p>
                    </div>
                  </div>
                  <div className="textS2">
                  <p><i className="bi bi-geo-alt-fill"></i>Kohat KPK Pakistan</p>
                  </div></div></div>
            </div>
          </div>
          <div className="Institute">
            <div className="row ">
              <div className="col-lg-12 col-sm-12">
                <div className="text">
                  <div className="textS1 justify-content-between">
                    <div className="">
                      <h5>HSSC ICS </h5>
                      <p><b>Fouji Foundation College Lachi </b></p>
                    </div>
                    <div>
                      <p>july-2017 | july-2020</p>
                    </div>
                  </div>
                  <div className="textS2">
                  <p><i className="bi bi-geo-alt-fill"></i>Kohat KPK Pakistan</p>
                  </div></div></div>
            </div>
          </div>
          <div className="Institute my-0">
            <div className="row">
              <div className="col-lg-12 col-sm-12">
                <div className="text">
                  <div className="textS1 justify-content-between">
                    <div className="">
                      <h5>SSC Science</h5>
                      <p><b>Rehman Baba College Lachi Kohat</b></p>
                    </div>
                    <div>
                      <p>2016 | 2018</p>
                    </div>
                  </div>
                  <div className="textS2">
                  <p><i className="bi bi-geo-alt-fill"></i>Kohat KPK Pakistan</p>
                  </div></div></div>
            </div>
          </div>
        </div>
      </div>
  
      <div className="Footer_Section">
        <Footer />
      </div>
    </>
  )
}
export default About;