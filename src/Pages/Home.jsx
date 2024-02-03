import React, { useState } from "react";
import sec1img1 from "../img/home-right.png.webp";
import sec2_img1 from "../img/h2_about_img.png";
import "../Pages/Home.css";
import "../Responsive/Responsive.css"


import aboutme_img1 from "../img/aboutme_img2.webp";
// tool-img
import html from "../img/tool/html.png";
import bootstrap from "../img/tool/bootstrap.png";
import css from "../img/tool/css.png";
import figma from "../img/tool/figma.png";
import js from "../img/tool/js.png";
import photoshop from "../img/tool/photoshop.png";
import react_img from "../img/tool/react.png";
import sass from "../img/tool/sass.png";
//service-img
import service1 from "../img/service/services2.gif"
import service2 from "../img/service/services3.gif"
import service3 from "../img/service/services4.gif"
//project-img-logo
import lixella from "../img/project/linxella.png";
import africa from "../img/project/africa.png";
import alx from "../img/project/alx.png";
import bit from "../img/project/bit.png";
import win9 from "../img/project/logo-light.png";
//project-img-web
import lixella_web from "../img/project/linxella-web.png";
import africa_web from "../img/project/africa-web.png";
import alx_web from "../img/project/alx-web.png";
import bit_web from "../img/project/bit-web.png";
import win9_web from "../img/project/win-web.png";

import pdf from "../Asset/Resume_designer.pdf";
import { Typewriter } from "react-simple-typewriter";
import "swiper/css";
import { Link } from "react-router-dom";

const Home = () => {
  const [Hire, setHire] = useState(false);
 
  const toggle = () => {
    setHire(true);
  };




  return (
    <>
      <div className={`modal ${Hire && `show d-block`}`} tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Hire Me</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setHire(false)}
              ></button>
            </div>
            <div className="modal-body">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-12">
                  <div
                    className="card text-black"
                    style={{ borderRadius: "25px" }}
                  >
                    <div className="card-body p-md-5">
                      <div className="row justify-content-start">
                        <div className="col-md-12 col-lg-12 col-xl-12 order-2 order-lg-1">
                          <form className="mx-1 mx-md-4">
                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <input
                                  type="text"
                                  id="form3Example1c"
                                  className="form-control"
                                />
                                <label
                                  className="form-label"
                                  htmlFor="form3Example1c"
                                >
                                  Your Name
                                </label>
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <input
                                  type="email"
                                  id="form3Example3c"
                                  className="form-control"
                                />
                                <label
                                  className="form-label"
                                  htmlFor="form3Example3c"
                                >
                                  Your Email
                                </label>
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fa-solid fa-clipboard-question me-3 fs-4"></i>
                              <div className="form-outline flex-fill mb-0">
                                <input
                                  type="text"
                                  id="form3Example4c"
                                  className="form-control"
                                />
                                <label
                                  className="form-label"
                                  htmlFor="form3Example4c"
                                >
                                  Subject
                                </label>
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fa-solid fa-message me-3 fs-4"></i>
                              <div className="form-outline flex-fill mb-0">
                                <textarea
                                  type="text"
                                  id="form3Example4cd"
                                  className="form-control"
                                ></textarea>
                                <label
                                  className="form-label"
                                  htmlFor="form3Example4cd"
                                >
                                  Your massage
                                </label>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => setHire(false)}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                send
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid img ">
        <div className="container">
          {/* sec1 start */}
          <section
            id="home"
            className="d-flex align-items-center"
            style={{ minHeight: "100vh" }}
          >
            <div className="row mx-auto flex-wrap-reverse  p-3 banner row-gap-5 w-100">
              <div className="col-md-7  d-flex justify-content-start align-items-center">
                <div className="sec1cont col-md-12 ">
                  <h1 className="s1_cont">
                    <span>👋</span>Hey, I am Prince
                  </h1>
                  <h2
                    className="mb-3"
                    style={{ margin: "auto 0", fontWeight: "normal" }}
                  >
                    I'm a professionsal Front-End <br /> Developer having
                    expertise <br />
                    in{" "}
                    <span style={{ color: "#33f4cd ", fontWeight: "bold" }}>
                      {/* Style will be inherited from the parent element */}
                      <Typewriter
                        words={[
                          "HTML",
                          "CSS3",
                          "JAVASCRIPT",
                          "REACT-JS",
                          "BOOTSTRAP",
                          "TAILWIND CSS",
                          "RESPONSIVE",
                        ]}
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        // onLoopDone={handleDone}
                        // onType={handleType}
                      />
                    </span>
                  </h2>

                  <div className="d-flex gap-3">
                    <button
                      className="s1_btn1 btn btn-lg  same_button"
                      onClick={toggle}
                    >
                      Hire me
                    </button>
                    <Link
                      to={pdf}
                      target="_blank"
                      className="s1_btn2 btn btn-lg same_button"
                    >
                      Get cv
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-5 ">
                <div className="sec1_img1 ">
                  <img className="s1_img1" src={sec1img1} alt="" />
                </div>
              </div>
            </div>
          </section>
          {/* sec1 end*/}

          {/* sec2 start*/}
          <section className="sec2" id="about">
            <div className="row  align-items-center flex-wrap-reverse row-gap-5">
              <div className="sec2_img text-center col-md-6 col-md-6">
                <img className=" my_iamge" src={sec2_img1} alt="" />
              </div>

              <div className="sec2_cont col-md-6 col-md-6">
                <div>
                  <h2 className="sec2_heading same_heading">About Me</h2>
                </div>
                <p className="">I'm a Designer</p>
                <h2 className="">
                  I Can Design per <br />
                  Your Requirement
                </h2>
                <div>
                  <p>
                    Hello There! I'm A Web Designer, And I'm Very Passionate And{" "}
                    <br />
                    Dedicated To My Work. I Have Acquired The Skills And <br />
                    Knowledge Necessary To Make Your Project A Success. I Enjoy
                    Every <br />
                    Step Of The Design Process, From Discussion And
                    Collaboration.
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <div className="sec2_btn me-3 d-flex justify-content-center align-items-center ">
                    <i className="s2_arrow fa-solid fa-arrow-right"></i>
                  </div>
                  <h4>Ready to work</h4>
                </div>
              </div>
            </div>
          </section>

          {/* sec2 end*/}

          {/* sec2.1 resume start */}

          <section className="sec-res">
            <h2 className="resume">
              {" "}
              <strong>Resume</strong>
            </h2>
            <div className="row pb-3">
              <div className="col-md-4">
                <div className="Company_history Resume_owner d-flex align-items-center justify-content-between">
                  <div className="user_name ">
                    <h4 className="res-nam">Prince</h4>
                    <p className="res-p">Front-end Developer</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <h2 className="mb-0  months ">+6</h2>
                    <span>
                      months<br></br> Experience
                    </span>
                  </div>
                </div>
                <p className="res-p mb-2">
                  Hi there! My name is Prince, and I'm a Front-end Developer
                  based in delhi, India. I'm Very Passionate And Dedicated To My
                  Work.
                </p>
                <p className="res-p">
                  I've been working in the web Designer field for 6 months, and
                  during that time, I've gained experience.
                </p>
                <p className="res-p">
                  I Have Acquired The Skills And Knowledge Necessary To Make
                  Your Project A Success. I Enjoy Every Step Of The Design
                  Process, From Discussion And Collaboration.
                </p>
              </div>
              <div className="col-md-4 text-center" >
                {/* <img
                  src={robot}
                  alt="pic"
                /> */}
              <div className="img-inner ">
                <div className="s2_rightbox "></div>
                <div className="s2_rightbox_2 w-100 h-100  position-absolute d-flex justify-content-center align-items-center">
                  <img className=" h-100" src={aboutme_img1} alt="" />
                </div>
              </div>
           


              </div>
              <div className="col-md-4">
                <div className="Company_history d-flex align-items-center justify-content-between">
                  <div className="user_name">
                    <h5 className="">Current working</h5>
                    <h6 className="mb-0">Web Designer</h6>
                    <p className="res-p">Reliwell Technology</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <a href="/" className="curr_btn ">
                      Current
                    </a>
                  </div>
                </div>

                <div className="Company_history mb-2 d-flex align-items-center justify-content-between">
                  <div className="user_name">
                    <h5 className="">Roles & Responsibilities</h5>
                    <p className="res-p">
                      Created successful websites that <br /> met requirements
                      for objectives <br /> such as load speed and design.
                    </p>
                    <p className="res-p">
                      Built layouts according to customer <br /> parameters
                      using HTML, CSS, Bootstrap, JavaScript, JQuery and
                      Photoshop.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* ================================================ */}
            <div className="row mb-5">
              <div className="col-md-6">
                <h4 className="detail_title">Skills</h4>
                <div className="skills_cntr">
                  <a href="/">HTML5</a>
                  <a href="/">Css</a>
                  <a href="/" className=".curr_btn">
                    javascript
                  </a>
                  <a href="/">React Js</a>
                  <a href="/">Bootstrap</a>
                  <a href="/">Tailwind-css</a>
                  <a href="/">Photoshop</a>
                  <a href="/">Scss</a>
                  <a href="/">Responsive Website</a>
                  <a href="/">Figma</a>
                  <a href="/">Jquery</a>
                  <a href="/">Git-Hub</a>
                </div>
              </div>

              <div className="col-md-6">
                <h4 className="detail_title">Tools I use every day</h4>
                <div className="Tech_skills_cntr">
                  <a href="/">
                    <img src={html} alt="icon"></img>
                  </a>
                  <a href="/">
                    <img src={css} alt="icon"></img>
                  </a>
                  <a href="/">
                    <img src={js} alt="icon"></img>
                  </a>
                  <a href="/">
                    <img src={bootstrap} alt="icon"></img>
                  </a>
                  <a href="/">
                    <img src={react_img} alt="icon"></img>
                  </a>
                  <a href="/">
                    <img src={sass} alt="icon"></img>
                  </a>
                  <a href="/">
                    <img src={photoshop} alt="icon"></img>
                  </a>
                  <a href="/">
                    <img src={figma} alt="icon"></img>
                  </a>
                </div>
              </div>
            </div>
            {/* ================ */}
            <div className="row">
              <div className="col-md-12">
                <h4 className="detail_title">Freelance Clients</h4>
                <div className="freelance_client">
                  <p>
                    <img src={africa} alt="client" />
                  </p>
                  <p>
                    <img src={lixella} alt="client" />
                  </p>
                  <p>
                    <img src={bit} alt="client" />
                  </p>
                  <p>
                    <img className="alx-img" src={alx} alt="client" />
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* sec2.1 resume start */}

          {/* sec3 start*/}
          <section className="sec3 my-5 py-5" id="service">
            <div className="">
              <h2 className="sec2_heading text-center same_heading">Service</h2>
            </div>
            <h3 className="text-center">What Service Do I Provide</h3>
            <p className="text-center">
            In my portfolio, I showcase my expertise in various web
              development technologies and frameworks.
            </p>

            <div className="row justify-content-between ">
                <div className="col-md-4  mb-4">
                 <div className="card ser-card">
                    <div className="card-body card-img p-0">
                      <img className="ser-img" src={service1}/>
                         <div className="txt">
                           <h2>Heading <hr/></h2>
                           <p>Lorem ipsum dolor sit amet consectetur, adipisicing 
                            elit. Nostrum dolore labore est incidunt officiis harum,
                             placeat, a officia expedita sunt nam delectus cumque at
                              doloribus provident nulla minima sint consectetur? </p>
                         </div>
                     </div>
                 </div>
                </div>
                <div className="col-md-4 mb-4">
                 <div className="card ser-card">
                    <div className="card-body card-img p-0">
                    <img className="ser-img" src={service2}/>
                       <div className="txt">
                           
                       </div>
                     </div>
                 </div>
                </div>
                <div className="col-md-4 mb-4">
                 <div className="card ser-card">
                    <div className="card-body card-img p-0">
                    <img className="ser-img" src={service3}/>
                       <div className="txt">
                           
                       </div>
                     </div>
                 </div>
                </div>
            </div>
          </section>
          {/* sec3 end*/}

          {/* sec4 start*/}
          <section className="mb-5" id="project">
            <h2 className="sec4_heading s4 same_heading">
            <span className="btm-line" >Projects</span>
            </h2>
            <p className=" s4-p s4 mt-3">Creative Works</p>
            <div className="row">
              <div className="s4_navtab ">
                <ul
                  className="nav nav-pills mb-3 d-flex justify-content-center align-items-center py-3"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                    <img className="tag-nam" src={africa}/>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                    <img className="tag-nam" src={lixella}/>
                    </button>
                  </li>
                  <li className="nav-item"  role="presentation">
                    <button
                      className="nav-link"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-contact"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                     <img className="tag-nam tag-alx" src={alx}/>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-java-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-java"
                      type="button"
                      role="tab"
                      aria-controls="pills-java"
                      aria-selected="false"
                    >
                     <img className="tag-nam" src={win9}/>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-react-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-react"
                      type="button"
                      role="tab"
                      aria-controls="pills-react"
                      aria-selected="false"
                    >
                     <img className="tag-nam " src={bit}/>
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <div className="row row-gap-4">
                      <div className="col-sm-12 s4-img s4_img1 w-100">
                      <a href="https://africacrypto.com" target="black"> 
                      <img src={africa_web} alt="" className=" " /></a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <div className="row row-gap-4">
                      <div className="col-sm-12 s4-img s4_img1 w-100 ">
                        <a href="https://linxella.io/" target="black"> 
                        <img src={lixella_web} alt="" className="" /></a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-contact"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab"
                  >
                    <div className="row row-gap-4">
                      <div className="col-sm-12 s4-img s4_img3 w-100 ">
                       <a href="https://alxglobal.network/" target="black">
                        <img src={alx_web} alt="" className="" /></a>
                      </div>
                    
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="pills-java"
                    role="tabpanel"
                    aria-labelledby="pills-java-tab"
                  >
                    <div className="row row-gap-4">
                      <div className="col-sm-12 s4-img s4_img4 ">
                        <a href="https://win9.ai/" target="black">
                        <img src={win9_web} alt="" className="" /></a>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="pills-react"
                    role="tabpanel"
                    aria-labelledby="pills-react-tab"
                  >
                    <div className="row row-gap-4">
                      <div className="col-sm-12 s4-img s4_img3 w-30 ">
                        <a href="https://bitvers.com/" target="black">
                        <img src={bit_web} alt="" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* sec4 end*/}

          {/* section contact start */}

            <section className="contact mb-5" id="contact" >
               <div className="container">
                 <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-6 map">
                        <iframe
                            className=" h-100 w-100"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d876.5148783825973!2d77.25269446855667!3d28.507857118432284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1126a9451f7%3A0x2d4447b88ab7a5ed!2s8%2F36%2C%20Talimabad%2C%20Sangam%20Vihar%2C%20New%20Delhi%2C%20Delhi%20110080!5e0!3m2!1sen!2sin!4v1689849807251!5m2!1sen!2sin"
                            width="600"
                            height="450"
                            style={{ border: "0" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                          ></iframe>
                        </div>
                        <div className="col-md-6 form">
                           <form>
                            <strong><h2>Contact</h2></strong>
                            <hr/>
                            <div className="row">
                                <div className="col-6 mb-5 ">
                                    <input type="text" className="form-control" placeholder="FirstName"/>
                                </div> 
                                <div className="col-6 mb-5 ">
                                    <input type="text" className="form-control" placeholder="LastName"/> 
                                </div> 
                                <div className="col-6 mb-5">
                                    <input type="number" className="form-control" placeholder="Phone Number"/> 
                                </div> 
                                <div className="col-6 mb-5 ">
                                    <input type="text" className="form-control" placeholder="Your Mail"/> 
                                </div>
                                <div className="col-12 mb-4">
                                    <textarea type="text"className="form-control" placeholder="Comment"/> 
                                </div> 
                                <div className="col-12 mb-5 ">
                                    <button className="form-control sub-btn ">submit</button> 
                                </div> 
                             </div>
                           </form>  
                        </div>
                      </div>
                 </div>
               </div>
            </section>

          {/* section contact end */}

          {/* <div className="cursor" style={{left:xMain, top:yMain}} onMouseMove={(e)=>this.cursor(e)}></div>
           */}
        </div>
      </div>
    </>
  );
};

export default Home;
