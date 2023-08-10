import React from 'react'
import ser_img1 from "../img/services_details_img.png"
import "../Pages/Service.css"

import sec4_html from "../img/html.jpeg";
import sec4_css from "../img/css.jpeg";
import sec4_bootstrap from "../img/bootstrap.jpeg";
import sec4_responsive from "../img/reponsive.jpeg";
import sec4_js from "../img/js.jpeg";
import sec4_react from "../img/react.jpeg";

import { Link } from "react-router-dom";



const Service = () => {
  return (
     <>

          
         <div className="container ">
             <div className="row w-100 h-100 my-5 bg-danger-500">
                 <div className="col-sm-12  w-100 h-50 ">
                       <h1 className="sec1_h1 text-center">Service</h1>
                 </div>

                  <div className="col-12 d-flex justify-content-center ">
                    <img src={ser_img1} alt="" />
                  </div>
             </div>

             <section className="sec3 my-5 py-5">
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
          </div> {/* <container-end> */}

     </>
  )
}

export default Service