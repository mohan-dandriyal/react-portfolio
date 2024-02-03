import React from 'react'
import "../Footer/Footer.css"
import logo  from "../../img/logo.png"

import { Typewriter } from "react-simple-typewriter";

const Footer = () => {

  return (
    <>

      <section className='footer_sec'>
        <div className='foot_inner'>
          {/* <!-- Footer --> */}
          <footer className="text-center text-lg-start  text-muted">
            {/* <!-- Section: Social media --> */}
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
              {/* <!-- Left --> */}
              <div className="me-5 d-none d-lg-block text-light">
                <span>Get connected with us on social networks:</span>
              </div>
              {/* <!-- Left --> */}

              {/* <!-- Right --> */}
              <div>
                <a href="https://www.linkedin.com/in/prince-kumar-20b571228/" target='blank' className="me-4 text-reset ">
                  <i className="text-light fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/" target='blank' className="me-4 text-reset ">
                  <i className="text-light fab fa-github"></i>
                </a>
                <a href="" className="me-4 text-reset ">
                  <i className="text-light fab fa-facebook-f"></i>
                </a>
                <a href="" className="me-4 text-reset ">
                <i class=" text-light fa-brands fa-x-twitter"></i>
                </a>
                <a href="" className="me-4 text-reset ">
                  <i className="text-light fab fa-instagram"></i>
                </a>
              </div>
              {/* <!-- Right --> */}
            </section>
            {/* <!-- Section: Social media --> */}

            {/* <!-- Section: Links  --> */}
            <section className="">
              <div className="container text-center text-md-start mt-5">
                {/* <!-- Grid row --> */}
                <div className="row mt-3">
                  {/* <!-- Grid column --> */}
                  <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    {/* <!-- Content --> */}
                    {/* <h6 className="text-uppercase fw-bold mb-4 text-light">
                      <i className="fas fa-gem me-3 "></i>PRINCE
                    </h6> */}
                    <div>
                       <img src={logo} style={{width : "150px"}}/>
                    </div>

                    <p className="mb-3 text-light" style={{ margin: "auto 0", fontWeight: "normal" }}>
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
                    </p>

                    <p className='lh-base text-light'>
                      Hello There! I'm A Web Designer, And I'm Very Passionate And
                      Dedicated To My Work. I Have Acquired The Skills And
                      Knowledge Necessary To Make Your Project A Success.
                    </p>
                  </div>
                  {/* <!-- Grid column --> */}

                  {/* <!-- Grid column --> */}
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 ">
                    {/* <!-- Links --> */}
                    <h6 className="text-uppercase fw-bold mb-4 text-light">
                      what Service I do?
                    </h6>
                    <p className='text-light'>
                      <a href="#!" className="text-reset text-decoration-none ">Website Design</a>
                    </p>
                    <p className='text-light'>
                      <a href="#!" className="text-reset text-decoration-none ">Responsive & update design</a>
                    </p>
                    <p className='text-light'>
                      <a href="#!" className="text-reset text-decoration-none ">Backend work</a>
                    </p>
                  </div>
                  {/* <!-- Grid column --> */}

                  {/* <!-- Grid column --> */}
                  <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    {/* <!-- Links --> */}
                    <h6 className="text-uppercase fw-bold mb-4 text-light">
                      Menu-tabs
                    </h6>
                    <p className='text-light '>
                      <a href="#Home" className="text-reset ">Home</a>
                    </p>
                    <p className='text-light '>
                      <a href="#about" className="text-reset ">About</a>
                    </p>
                    <p className='text-light '>
                      <a href="#service" className="text-reset ">Service</a>
                    </p>
                    <p className='text-light '>
                      <a href="#project" className="text-reset ">Project</a>
                    </p>
                    <p className='text-light '>
                      <a href="#contact" className="text-reset ">Contact</a>
                    </p>
                  </div>
                  {/* <!-- Grid column --> */}

                  {/* <!-- Grid column --> */}
                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    {/* <!-- Links --> */}
                    <h6 className="text-uppercase fw-bold mb-4 text-light">Contact</h6>
                    <p className='text-light'><i className="fas fa-home me-2"></i> Delhi, New Delhi 110080, India</p>
                    <p className='text-light'>
                      <i className="fas fa-envelope me-2"></i>developer.prince001@gmail.com</p>
                    <p className='text-light'><i className="fas fa-phone me-2"></i> +91 7210235389</p>
                    <p className='text-light'><i className="fas fa-print me-2"></i> +91 7210235389</p>
                  </div>
                  {/* <!-- Grid column --> */}
                </div>
                {/* <!-- Grid row --> */}
              </div>
            </section>
            {/* <!-- Section: Links  --> */}

            {/* <!-- Copyright --> */}
            <div className="text-center pb-4 text-light" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
              © 2023 Copyright:
              <a className="text-reset fw-bold text-light" href="https://chimerical-kringle-3e6bea.netlify.app">Portfolio.com</a>
            </div>
            {/* <!-- Copyright --> */}
          </footer>
          {/* <!-- Footer --> */}
        </div>

      </section>

    </>
  )
}

export default Footer