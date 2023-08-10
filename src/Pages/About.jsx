import React from "react";
import aboutme_img1 from "../img/aboutme_img2.webp";
import aboutme_img2 from "../img/faq_img.png";
import "../Pages/About.css";

const About = () => {
  return (
    <>
      <div className=" container ">
        <section className="About_sec1">
          <div className="col-sm-12 fs-1 fw-bold text-center my-3">
            <h1 className="About_sec1_h1">About Me</h1>
          </div>
        </section>

        <section className="sec2 my-5">
          <div className="row flex-sm-wrap " style={{ minHeight: "500px" }}>
            <div className="col-sm-12 col-md-6">
              <span className="text-start">I'm a Developer</span>
              <h2 className="title">
                I Develop Ideas <br />
                That Help People
              </h2>

              <nav>
                <ul
                  className="nav nav-tabs flex justify-content-between"
                  id="nav-tab"
                  role="tablist"
                >
                  <button
                    className="nav-link active"
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-home"
                    type="button"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    My-Details
                  </button>
                  <button
                    className="nav-link"
                    id="nav-profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    My Skills
                  </button>
                  <button
                    className="nav-link"
                    id="nav-contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-contact"
                    type="button"
                    role="tab"
                    aria-controls="nav-contact"
                    aria-selected="false"
                  >
                    My Blogs
                  </button>
                </ul>
              </nav>

              {/* sec2- box-1 start */}
              <div className="tab-content my-3" id="nav-tabContent">
                <div
                  className="tab-pane fade show active "
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <div className="row s2-pro">
                    <ul className="list-wrap col-lg-6  ">
                      <li className="list-group s2-box1-icon">
                        <div className="content">
                          <i className="fa-solid fa-user me-2 "></i>
                          <span>Name:</span>
                          <p className="s2-box1-text">Prince</p>
                        </div>
                      </li>

                      <li className="list-group">
                        <div className="content">
                          <i className="fa-solid fa-envelope me-2"></i>
                          <span>Email:</span>
                          <p className="s2-box1-text">
                            Developer.prince001@gmail.com
                          </p>
                        </div>
                      </li>

                      <li className="list-group">
                        <div className="content">
                          <i className="fa-solid fa-language me-2"></i>
                          <span>Language:</span>
                          <p className="s2-box1-text">Hindi / English</p>
                        </div>
                      </li>
                    </ul>
                    <ul className=" col-lg-6">
                      <li className="list-group">
                        <div className="content">
                          <i className="fa-solid fa-phone me-2"></i>
                          <span>Phone No:</span>
                          <p className="s2-box1-text">+91-7210235389</p>
                        </div>
                      </li>

                      <li className="list-group">
                        <div className="content">
                          <i className="fa-solid fa-location-dot me-2"></i>
                          <span>Address:</span>
                          <p className="s2-box1-text">
                            G-8/50 sangam vihar New Delhi-110080
                          </p>
                        </div>
                      </li>

                      <li className="list-group">
                        <div className="content">
                          <i className="fa-solid fa-flag me-2"></i>
                          <span>Nationality:</span>
                          <p className="s2-box1-text">Indian</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* sec2- box-1 end */}

                {/* sec2- box-2 start */}
                <div
                  className="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  <div className="s2_box2 row">
                    <ul className="col-md-6">
                      <li className="mb-4 list-group list-wrap me-3 ">
                        <i
                          className="fa-brands fa-html5 fs-4"
                          style={{ color: "orange" }}
                        ></i>
                        <span className="">HTML</span>
                      </li>
                      <li className="mb-4 list-group  list-wrap me-3 ">
                        <i
                          className="fa-brands fa-css3-alt fs-4"
                          style={{ color: "blue" }}
                        ></i>
                        <span className="">CSS</span>
                      </li>
                      <li className="mb-4 list-group list-wrap me-3 ">
                        <i
                          className="fa-brands fa-bootstrap fs-4"
                          style={{ color: "#8512fb" }}
                        ></i>
                        <span className="">Bootstrap</span>
                      </li>
                    </ul>

                    <ul className="col-md-6">
                      <li className="mb-4 list-group list-wrap me-3 ">
                        <i
                          className="fa-brands fa-square-js fs-4"
                          style={{ color: "black" }}
                        ></i>
                        <span className="">Java-script</span>
                      </li>
                      <li className="mb-4 list-group list-wrap me-3 ">
                        <i
                          className="fa-regular fa-address-book fs-4"
                          style={{ color: "purple" }}
                        ></i>
                        <span className="">media Quary</span>
                      </li>
                      <li className="mb-4 list-group list-wrap me-3 ">
                        <i
                          className="fa-brands fa-react fs-4"
                          style={{ color: "blue" }}
                        ></i>
                        <span className="">React-js</span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* sec2- box-2 end */}

                {/* sec2- box-3 start */}
                <div
                  className="tab-pane fade"
                  id="nav-contact"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab"
                >
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item border rounded-3">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          About My portfolio
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>{" "}
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the{" "}
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          About My Skills
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the second item's accordion body.
                          </strong>{" "}
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the{" "}
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          About my Porjects
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the third item's accordion body.
                          </strong>{" "}
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the{" "}
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* sec2- box-3 end */}
              </div>
            </div>

            {/* sec2  right start */}
            <div className="col-sm-12 col-md-6 position-relative justify-content-center align-items-center" style={{ minHeight: "inherit" }}>
              <div className="img-inner ">
                <div className="s2_rightbox"></div>
                <div className="s2_rightbox_2 w-100 h-100  position-absolute d-flex justify-content-center align-items-center">
                  <img className=" w-75" src={aboutme_img1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* sec2  right end */}

        {/* sec3-start */}

        <section className=" mb-3">
          <div className="row">
            <div className="col-md-6">
              <div className="s3_img mb-3">
                <img className="w-100 h-100" src={aboutme_img2} alt="" />
              </div>
              <div className="s3_text">
                <div className="s3_h2">
                  <h2>All Your Questions Are Here</h2>
                </div>
                <div className="s3_p">
                  <div className="s3_h3">& Knock Me Directly to Know More</div>
                </div>
                <p>
                  Lorem Ipsum Dolor Sit Amet, Sed Nulla Ante Amet, Elementum
                  Tincidunt Arcu Sed Laoreet, Natoque Ac Eget Imperdiet. Ac
                  Scelerisque Nibh Dolores Consectetuer,
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="s3_right">


                <div className="accordion accordion-flush" id="accordionFlushExample">
                  <div className="accordion-item  my-3 border rounded-3">
                    <h2 className="accordion-header border rounded-3 " id="flush-headingOne">
                      <button className="accordion-button collapsed border rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Accordion Item #1
                      </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                    </div>
                  </div>

                  <div className="accordion-item border mb-3 rounded-3">
                    <h2 className="accordion-header border rounded-3" id="flush-headingTwo">
                      <button className="accordion-button collapsed border rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Accordion Item #2
                      </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                  </div>
                  <div className="accordion-item mb-3 border rounded-3">
                    <h2 className="accordion-header border rounded-3" id="flush-headingThree">
                      <button className="accordion-button collapsed border rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Accordion Item #3
                      </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                  </div>
                  <div className="accordion-item border mb-3 rounded-3">
                    <h2 className="accordion-header border rounded-3" id="flush-headingFour">
                      <button className="accordion-button collapsed border rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                        Accordion Item #4
                      </button>
                    </h2>
                    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingfour" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                  </div>
                  <div className="accordion-item border mb-3 rounded-3">
                    <h2 className="accordion-header border rounded-3" id="flush-headingFive">
                      <button className="accordion-button collapsed border rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                        Accordion Item #5
                      </button>
                    </h2>
                    <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                  </div>

                </div>
                {/* sec3- box-1 end */}
              </div>
            </div>
          </div>
        </section>

        {/* sec3-start  */}
      </div>
    </>
  );
};

export default About;
