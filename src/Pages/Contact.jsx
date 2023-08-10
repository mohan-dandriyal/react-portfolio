import React from "react";
import "../Pages/Contact.css";
import cont_img1 from "../img/contact-me copy.jpg";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="container">
        <section>
          <div className="row">
            <div className="col-12  ">
              <h1 className="cont_sec1_h1 text-center">Contact Me</h1>
            </div>

            <div className="col-12 d-flex justify-content-center">
              <img src={cont_img1} alt="" />
            </div>
          </div>
        </section>

        <section className="cont_sec-2">
          <div className="row">
            <div className="col-md-12">
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

         <div className="row">
            <div className="col-lg-4">
              <div className="contact-sidebar-wapper">
                <div className="contact-sidebar">
                  {/* <!-- Start Project Sidebar Item --> */}
                  <ul className="contact-sidebar-list-item">
                    {/* <!-- Start contact Single Box --> */}
                    <li className="contact-sidebar-single-box">
                      <h6 className="title-text">Phone:</h6>
                      <a href="tel:+0123456789" className="link">
                        0123456789
                      </a>
                    </li>
                    {/* <!-- End contact Single Box --> */}
                    {/* <!-- Start contact Single Box --> */}
                    <li className="contact-sidebar-single-box">
                      <h6 className="title-text">Email:</h6>
                      <a href="mailto:demo@example.com" className="link">
                        demo@example.com
                      </a>
                    </li>
                    {/* <!-- End contact Single Box --> */}
                    {/* <!-- Start contact Single Box --> */}
                    <li className="contact-sidebar-single-box">
                      <h6 className="title-text">Website:</h6>
                      <a href="https://www.example.com" className="link">
                        www.example.com
                      </a>
                    </li>
                    {/* <!-- End contact Single Box --> */}
                    {/* <!-- Start contact Single Box --> */}
                    <li className="contact-sidebar-single-box">
                      <h6 className="title-text">Address:</h6>
                      <span className="text"> Your address goes here.</span>
                    </li>
                    {/* <!-- End contact Single Box --> */}
                  </ul>
                  {/* <!-- End Project Sidebar Item --> */}
                </div>
                {/* <!-- Start Sidebar Widget Single Item - Social Widgets --> */}
                <div className="sidebar-widget-single-area ">
                  <h3 className="title">Follow Me</h3>
                  <ul className="social-link d-flex gap-3">
                    <li>
                      <Link to="https://www.example.com" target="_blank">
                      <i class="fa-brands fa-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.example.com" target="_blank">
                      <i class="fa-brands fa-square-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.example.com" target="_blank">
                      <i class="fa-brands fa-linkedin"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* <!-- End Sidebar Widget Single Item - Social Widgets --> */}
              </div>
            </div>

            <div className="col-lg-7 offset-lg-1">
              <div className="contact-form-wrapper section-mt-165">
                {/* <!-- Start Section Content --> */}
                <div className="content">
                  <span className="section-tag">Get In Touch</span>
                  <h2 className="title">
                    If you have any porject or need help. Contact me
                  </h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting emndustry lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    print only five centuries, but also the leap into
                    electronic.
                  </p>
                </div>
                {/* <!-- End Section Content --> */}

                {/* <!-- Start Contact Form Box --> */}
                <div className="contact-form-box">
                  <form
                    id="contact-form"
                    className="default-form contact-form"
                    action="https://whizthemes.com/mail-php/jaber/contact.php"
                    method="post"
                  >
                    <div className="row mb-n6">
                      <div className="col-xl-6 mb-6">
                        <div className="default-form-group">
                          <input
                            name="name"
                            type="text"
                            placeholder="Name"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 mb-6">
                        <div className="default-form-group">
                          <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 mb-6">
                        <div className="default-form-group">
                          <input
                            name="phone"
                            type="tel"
                            placeholder="Phone"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 mb-6">
                        <div className="default-form-group">
                          <input
                            name="subject"
                            type="text"
                            placeholder="Subject"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-xl-12 mb-6">
                        <div className="default-form-group">
                          <textarea
                            name="message"
                            placeholder="Comment"
                            required=""
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-12 mb-6">
                        <div className="default-form-group tex-center">
                          <button
                            type="submit"
                            className="btn btn-lg btn-outline-one"
                          >
                            Submit Message
                          </button>
                        </div>
                      </div>
                      <p className="form-messege"></p>
                    </div>
                  </form>
                </div>
                {/* <!-- End Contact Form Box --> */}
              </div>
            </div>
         </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
