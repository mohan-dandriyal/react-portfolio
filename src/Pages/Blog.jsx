import React from "react";
import "../Pages/Project.css"
import proj_img1 from "../img/proj_4.avif"
import sec4_img1 from "../img/h2_project_img01.jpg";
import sec4_img2 from "../img/h2_project_img02.jpg";
import sec4_img3 from "../img/h2_project_img03.jpg";
import sec4_img4 from "../img/h2_project_img04.jpg";
import sec4_img5 from "../img/h2_project_img05.jpg";
import sec4_img6 from "../img/h2_project_img06.jpg";

const Blog = ()=> {
   return(
    <>
       <div className="container">
         <section className="pro_sec1" >
               <div className="row">
                  <div className="col-12">
                    <h1 className="pro_sec1_h1 text-center">Projects</h1>
                  </div>
                  <div className="col-12 d-flex justify-content-center ">
                     <img src={proj_img1} alt="" />
                  </div>
               </div>
         </section>


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
       </div>
    </>
   ) 
}

export default Blog