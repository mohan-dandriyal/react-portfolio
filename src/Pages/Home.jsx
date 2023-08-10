import React, { useState } from "react";
import sec1img1 from "../img/home-right.png.webp";
import sec2_img1 from "../img/h2_about_img.png";
import "../Pages/Home.css";
import sec4_img1 from "../img/h2_project_img01.jpg";
import sec4_img2 from "../img/h2_project_img02.jpg";
import sec4_img3 from "../img/h2_project_img03.jpg";
import sec4_img4 from "../img/h2_project_img04.jpg";
import sec4_img5 from "../img/h2_project_img05.jpg";
import sec4_img6 from "../img/h2_project_img06.jpg";
import sec4_html from "../img/html.jpeg";
import sec4_css from "../img/css.jpeg";
import sec4_bootstrap from "../img/bootstrap.jpeg";
import sec4_responsive from "../img/reponsive.jpeg";
import sec4_js from "../img/js.jpeg";
import sec4_react from "../img/react.jpeg";
import pdf from '../Asset/Resume.pdf';

import { Typewriter } from "react-simple-typewriter";

import "swiper/css";
import { Link } from "react-router-dom";
//  import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Link } from "react-router-dom";

const Home = () => {


  const [Hire, setHire] = useState(false)

  const toggle = () =>{
    setHire(true)
  }

  return (
    <>



          <div class={`modal ${Hire && `show d-block`}`} tabindex="-1">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Modal title</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <p>Modal body text goes here.</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>




      <div className="container-fluid img ">
        <div className="container">



          {/* sec1 start */}
          <section
            id="banner"
            className="d-flex align-items-center"
            style={{ minHeight: "100vh" }}
          >
            <div className="row mx-auto flex-wrap-reverse  p-3 banner row-gap-5 w-100">
              <div className="col-md-6  d-flex justify-content-start align-items-center">
                <div className="sec1cont col-md-12 ">
                  <h2 className="s1_cont">HELLO!</h2>
                  <h1 className="mb-3" style={{ margin: "auto 0", fontWeight: "normal" }}>
                    I'm {" "}
                    <span style={{ color: "black", fontWeight: "bold" }}>
                      {/* Style will be inherited from the parent element */}
                      <Typewriter
                        words={["Prince", "<>Front-End Developer</>"]}
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={2000}
                      // onLoopDone={handleDone}
                      // onType={handleType}
                      />
                    </span>
                  </h1>

                  <div className="d-flex gap-3">
                    <button className="s1_btn1 btn btn-lg text-light same_button" onClick={toggle}>
                      Hire me
                    </button>
                    <Link to={pdf} target="_blank" className="s1_btn2 btn btn-lg same_button" >Get cv</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="sec1_img1 ">
                  <img className="s1_img1" src={sec1img1} alt="" />
                </div>
              </div>
            </div>
          </section>
          {/* sec1 end*/}

          {/* sec2 start*/}
          <section className="sec2  ">
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
                  <div className="sec2_btn  bg-light me-3 d-flex justify-content-center align-items-center ">
                    <i className="s3_arrow fa-solid fa-arrow-right"></i>
                  </div>
                  <h4>Available jobs</h4>
                </div>
              </div>
            </div>
          </section>

          {/* sec2 end*/}

          {/* sec3 start*/}
          <section className="sec3 my-5 py-5">
            <div className="">
              <h2 className="sec2_heading text-center same_heading">Service</h2>
            </div>
            <h3 className="text-center">What Service Do I Provide</h3>
            <p className="text-center">
              In my portfolio, I showcase my expertise in various web
              development technologies and frameworks. With proficiency in HTML,
              CSS, and JavaScript, I create interactive and dynamic web pages
              that engage users. I also specialize in React.js, utilizing its
              powerful components and virtual DOM for building scalable and
              efficient web applications. Additionally, I leverage Bootstrap to
              create responsive and mobile-friendly designs that adapt
              seamlessly to different devices.
            </p>
            <div className="row  row-gap-5 flex-wrap justify-content-center my-5 ">
              <div className="sce3_left col-lg-4 col-md-6  d-flex justify-content-center">
                <div className="card" style={{ width: "24rem" }}>
                  <img
                    src={sec4_html}
                    className="card-img-top s3_box"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">HTML</h5>
                    <p className="card-text">
                      It is a standard markup language used to create and
                      structure the content of web pages. HTML uses various tags
                      and attributes to define elements and their relationships
                      on a webpage. It forms the backbone of a webpage by
                      determining the layout, text, images, hyperlinks, and
                      multimedia content displayed in a browser.{" "}
                    </p>
                    <Link to="/" className="btn btn-primary">
                      Go somewhere
                    </Link>
                  </div>
                </div>
              </div>

              <div className="sce3_left col-lg-4 col-md-6 d-flex justify-content-center">
                <div className="card" style={{ width: "24rem" }}>
                  <img
                    src={sec4_css}
                    className="card-img-top s3_box"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">CSS</h5>
                    <p className="card-text">
                      {" "}
                      CSS, or Cascading Style Sheets, is a powerful style sheet
                      language used to describe the presentation of HTML and XML
                      documents. It separates the content from the design,
                      allowing developers to create visually appealing and
                      consistent layouts for web pages across different devices
                      and screen sizes.{" "}
                    </p>
                    <Link to="/" className="btn btn-primary">
                      Go somewhere
                    </Link>
                  </div>
                </div>
              </div>

              <div className="sce3_left col-lg-4 col-md-6 d-flex justify-content-center">
                <div className="card" style={{ width: "24rem" }}>
                  <img
                    src={sec4_bootstrap}
                    className="card-img-top s3_box"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">BOOTSTRAP</h5>
                    <p className="card-text">
                      Bootstrap is a popular front-end framework used for
                      building responsive and mobile-friendly websites and web
                      applications. It provides pre-designed HTML, CSS, and
                      JavaScript components and utilities, making it easier for
                      developers to create modern and visually appealing
                      interfaces.
                    </p>
                    <Link to="/" className="btn btn-primary">
                      Go somewhere
                    </Link>
                  </div>
                </div>
              </div>

              <div className="sce3_left col-lg-4 col-md-6 d-flex justify-content-center">
                <div className="card" style={{ width: "24rem" }}>
                  <img
                    src={sec4_responsive}
                    className="card-img-top s3_box"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">REPONSIVE WEBSITE</h5>
                    <p className="card-text">
                      A responsive website is a site that adapts and adjusts its
                      layout and design automatically based on the user's
                      device, screen size, and orientation. It ensures optimal
                      viewing and interaction, providing a seamless and
                      user-friendly experience across desktops, tablets, and
                      smartphones.
                    </p>
                    <Link to="/" className="btn btn-primary">
                      Go somewhere
                    </Link>
                  </div>
                </div>
              </div>

              <div className="sce3_left col-lg-4 col-md-6 d-flex justify-content-center">
                <div className="card" style={{ width: "24rem" }}>
                  <img
                    src={sec4_js}
                    className="card-img-top s3_box"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">JAVA-SCRIPT</h5>
                    <p className="card-text">
                      JavaScript is a high-level programming language used
                      primarily for adding interactivity and dynamic behavior to
                      web pages. It enables client-side scripting, allowing
                      developers to create interactive elements, handle user
                      input, and modify content on-the-fly without requiring
                      page reloads.
                    </p>
                    <Link to="/" className="btn btn-primary">
                      Go somewhere
                    </Link>
                  </div>
                </div>
              </div>

              <div className="sce3_left col-lg-4 col-md-6 d-flex justify-content-center">
                <div className="card" style={{ width: "24rem" }}>
                  <img
                    src={sec4_react}
                    className="card-img-top s3_box"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">REACT-JS</h5>
                    <p className="card-text">
                      React.js is a JavaScript library for building user
                      interfaces, specifically focused on creating reusable UI
                      components. It allows developers to efficiently update and
                      render components in response to data changes, enhancing
                      the performance of web applications.
                    </p>
                    <Link to="/" className="btn btn-primary">
                      Go somewhere
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* sec3 end*/}

          {/* sec4 start*/}
          <section>
            <p className=" s4-p s4">Creative Works</p>
            <h2 className="sec4_heading s4 same_heading">
              You Will Like These Design
              <br /> Made by Me
            </h2>
            <p className="sec4_cont s4">
              I have worked on diverse projects utilizing technologies such as
              HTML, CSS, JavaScript, React.js, and Bootstrap.
              <br />
              From creating responsive websites with clean and modern designs to
              developing interactive web applications with seamless <br />
              user experiences, my projects demonstrate my proficiency in these
              versatile tools and frameworks.
            </p>
            <div className="row">
              <div className="s4_navtab ">
                <ul
                  className="nav nav-pills mb-3 d-flex justify-content-center py-3"
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
                      ALL PROJECT
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
                      HTML/CSS
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
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
                      BOOTSTRAP
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
                      JAVA-SCRIPT
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
                      REACT-JS
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
                      <div className="col-sm-4 s4-img s4_img1 w-30 h-75">
                        <img src={sec4_img1} alt="" className="w-100" />
                      </div>
                      <div className="col-sm-4 s4-img s4_img2 h-150">
                        <img src={sec4_img2} alt="" className="w-100" />
                      </div>
                      <div className="col-sm-4 s4-img s4_img3h-75">
                        <img src={sec4_img3} alt="" className="w-100" />
                      </div>
                      <div className="col-sm-4 s4-img s4_img4  h-150">
                        <img src={sec4_img4} alt="" className="w-100" />
                      </div>
                      <div className="col-sm-4 s4-img s4_img5 h-75">
                        <img src={sec4_img5} alt="" className="w-100" />
                      </div>
                      <div className="col-sm-4 s4-img s4_img6 h-150">
                        <img src={sec4_img6} alt="" className="w-100" />
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
                      <div className="col-sm-4 s4-img s4_img1 w-30 ">
                        <img src={sec4_img1} alt="" className="w-100" />
                      </div>
                      <div className="col-sm-4 s4-img s4_img2 w-30 h-150">
                        <img src={sec4_img2} alt="" className="w-100" />
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
                      <div className="col-sm-4 s4-img s4_img3 w-30 ">
                        <img src={sec4_img3} alt="" className="w-100" />
                      </div>
                      <div className="col-sm-4 s4-img s4_img4 w-30 h-150">
                        <img src={sec4_img4} alt="" className="w-100" />
                      </div>
                      <div className="col-sm-4 s4-img  w-30 ">
                        <img src={sec4_img5} alt="" className="w-100" />
                      </div>
                      <div className="col-sm-4 s4-img s4_img6 w-30 h-150">
                        <img src={sec4_img6} alt="" className="w-100" />
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
                      <div className="col-sm-4 s4-img s4_img4  h-150">
                        <img src={sec4_img4} alt="" className="w-100" />
                      </div>
                      <div className="col-sm-4 s4-img ">
                        <img src={sec4_img5} alt="" className="w-100" />
                      </div>
                      <div className="col-sm-4 s4-img s4_img6 h-150">
                        <img src={sec4_img6} alt="" className="w-100" />
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
                      <div className="col-sm-4 s4-img s4_img3 w-30 ">
                        <img src={sec4_img3} alt="" />
                      </div>
                      <div className="col-sm-4 s4-img s4_img4 w-30 h-150">
                        <img src={sec4_img4} alt="" />
                      </div>

                      <div className="col-sm-4 s4-img ">
                        <img src={sec4_img5} alt="" className="w-100" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* sec4 end*/}

          <section id="map" className="mb-5">
            <div className="row gap-mb-3">
              <div className="bg-light col-md-6 rounded-3">
                {/* <!--Section: Contact v.2--> */}
                <section className="mb-4">
                  {/* <!--Section heading--> */}
                  <h2 className="h1-responsive font-weight-bold text-center my-4 same_heading">
                    Contact us
                  </h2>
                  {/* <!--Section description--> */}
                  <p className="text-center w-responsive mx-auto mb-5">
                    Do you have any questions? Please to contact us directly.
                  </p>

                  <div className="row">
                    {/* <!--Grid column--> */}
                    <div className="col-md-12 mb-md-0 mb-5">
                      <form
                        id="contact-form"
                        name="contact-form"
                        action="mail.php"
                        method="POST"
                      >
                        {/* <!--Grid row--> */}
                        <div className="row">
                          {/* <!--Grid column--> */}
                          <div className="col-md-12">
                            <div className="md-form mb-0">
                              <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-control"
                              />
                              <label htmlFor="name" className="">
                                Your name
                              </label>
                            </div>
                          </div>
                          {/* <!--Grid column--> */}

                          {/* <!--Grid column--> */}
                          <div className="col-md-12">
                            <div className="md-form mb-0">
                              <input
                                type="text"
                                id="email"
                                name="email"
                                className="form-control"
                              />
                              <label htmlFor="email" className="">
                                Your email
                              </label>
                            </div>
                          </div>
                          {/* <!--Grid column--> */}
                        </div>
                        {/* <!--Grid row--> */}

                        {/* <!--Grid row--> */}
                        <div className="row">
                          <div className="col-md-12">
                            <div className="md-form mb-0">
                              <input
                                type="text"
                                id="subject"
                                name="subject"
                                className="form-control"
                              />
                              <label htmlFor="subject" className="">
                                Subject
                              </label>
                            </div>
                          </div>
                        </div>
                        {/* <!--Grid row--> */}

                        {/* <!--Grid row--> */}
                        <div className="row">
                          {/* <!--Grid column--> */}
                          <div className="col-md-12">
                            <div className="md-form">
                              <textarea
                                type="text"
                                id="message"
                                name="message"
                                rows="2"
                                className="form-control md-textarea"
                              ></textarea>
                              <label htmlFor="message">Your message</label>
                            </div>
                          </div>
                        </div>
                        {/* <!--Grid row--> */}
                      </form>

                      <div className="text-center text-md-left">
                        <button
                          className="btn btn-primary"
                          onClick="document.getElementById('contact-form').submit();"
                        >
                          Send
                        </button>
                      </div>
                    </div>
                    {/* <!--Grid column--> */}
                  </div>
                </section>
                {/* <!--Section: Contact v.2--> */}
              </div>
              <div className="col-md-6">
                <div className="map">
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
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
