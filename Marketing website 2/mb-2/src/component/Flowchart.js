import emailSentIcon from "../Assets/Email sent.svg";
import React, { useEffect } from "react";
import emailOpenedTwice from "../Assets/Email opened twice.svg";
import emailNotOpened from "../Assets/Email not opened.svg";
import pricingPageVisited from "../Assets/Pricing page visited.svg";
import visitLinkedinProfile from "../Assets/Visit Linkedin Profile.svg";
import sendLinkedInInmail from "../Assets/Send LinkedIn Inmail.svg";
import sendConnectionRequest from "../Assets/Send connection request.svg";
import connectionRequestAccepted from "../Assets/Connection request accepted.svg";
import sendLinkedinMessage from "../Assets/Send LinkedIn message.svg";
import callTheProspect from "../Assets/Call the prospect.svg";
import sendFollowUpMail from "../Assets/Send followup email.svg";

export const Flowchart = () => {
  useEffect(() => {
    const zoomEffectElements = document.querySelectorAll(".zoom-effect");
    const allContainers = document.querySelectorAll(".tree .li-container");

    function applyBlur() {
      console.log("Blur applied");
      allContainers.forEach((li) => {
        if (!li.classList.contains("zoom-effect")) {
          li.classList.add("blur-applied");
        }
      });
    }

    // Function to remove blur from all elements
    function removeBlur() {
      console.log("Blur removed");
      allContainers.forEach((li) => {
        li.classList.remove("blur-applied");
      });
    }

    zoomEffectElements.forEach((element) => {
      element.addEventListener("animationiteration", () => {
        console.log("Animation iteration started");

        setTimeout(() => {
          applyBlur();
        }, 1000);

        setTimeout(() => {
          removeBlur();
        }, 2750);
      });
    });
  }, []);

  return (
    <>
    <div className="background-image"></div>
    <div className="tree">
      <ul>
        <li>
          <div className="li-container mailSent">
            <div className="mailSent-div">
              <div className="mailsent-icon">
                {" "}
                <img
                  src={emailSentIcon}
                  alt="Email Sent Icon"
                  className="email-icon"
                />
              </div>
              <a className="mailSentAnchor" href="#">
                Email Sent
              </a>
            </div>
          </div>

          <ul>
            <li>
              <div className="li-container parent-container">
                <div className="inner-li-container">
                  <div className="emailOpenedTwice-icon">
                    <img
                      src={emailOpenedTwice}
                      alt="Email opened twice Icon"
                      className="icon2"
                    />
                  </div>
                  <div className="text-container">
                    <a href="#"> Email Opened twice</a>
                  </div>
                </div>
              </div>

              <ul>
                <li>
                  <div className="li-container">
                    <div className="inner-li-container-child-icon">
                      <div className="icon-bg">
                        <img
                          src={pricingPageVisited}
                          alt="Email Sent Icon"
                          className="icon"
                        />
                      </div>
                      <a href="#">Pricing page visited</a>
                    </div>
                  </div>

                  <ul>
                    <li>
                      <div className="li-container">
                        <div className="inner-li-container-child-icon">
                          <div className="icon-bg">
                            <img
                              src={sendConnectionRequest}
                              alt="Email Sent Icon"
                              className="icon"
                            />
                          </div>
                          <a href="#">Send Connection Request</a>
                        </div>
                      </div>
                      <ul>
                        <li>
                          <div className="li-container">
                            <div className="request-accepted">
                              <img
                                src={connectionRequestAccepted}
                                alt="Email Sent Icon"
                                className="icon"
                              />
                              <a href="#">Connection Request Accepted</a>
                            </div>
                            <div className="linkedIn-parent">
                              <div className="li-child">
                              {/* <div className="li-connection-icon-bg"> */}
                                <img
                                  src={sendLinkedinMessage}
                                  alt="Email Sent Icon"
                                  className="icon"
                                />
                                {/* </div> */}
                                <a href="#">Send LinkedIn Message</a>
                              </div>
                              <div className="li-child">
                                <div className="prospect-icon">
                                  <img
                                    src={callTheProspect}
                                    alt="Email Sent Icon"
                                    className="icon"
                                  />
                                </div>

                                <a href="#" className="call-prospect">
                                  Call the Prospect
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <div className="li-container parent-container">
                <div className="inner-li-container">
                  <div className="emailNotOpened-icon">
                    <img
                      src={emailNotOpened}
                      alt="Email not opened Icon"
                      className="icon3"
                    />
                  </div>
                  <div className="text-container">
                    <a href="#">Email not opened</a>
                  </div>
                </div>
              </div>

              <ul>
                <li>
                  <div className="li-container first-child-extended">
                    <div className="inner-li-container-child-icon">
                      <div className="icon-bg">
                        <img
                          src={sendFollowUpMail}
                          alt="Email Sent Icon"
                          className="icon"
                        />
                      </div>
                      <a href="#">Send followup email</a>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <div className="li-container zoom-effect">
                        <div className="inner-li-container-child-icon">
                          <div className="icon-bg">
                            <img
                              src={visitLinkedinProfile}
                              alt="Email Sent Icon"
                              className="icon"
                            />
                          </div>
                          <a href="#">Visit LinkedIn Profile</a>
                        </div>
                      </div>
                      <ul>
                        <li>
                          <div className="li-container zoom-effect">
                            <div className="inner-li-container-child-icon">
                              <div className="icon-bg">
                                <img
                                  src={sendLinkedInInmail}
                                  alt="Email Sent Icon"
                                  className="icon"
                                />
                              </div>
                              <a href="#">Send LinkedIn Inmail</a>
                            </div>
                          </div>
                          <ul>
                            <li>
                              <div className="li-container">
                                <div className="inner-li-container-child-icon">
                                  <div className="icon-bg">
                                    <img
                                      src={sendConnectionRequest}
                                      alt="Email Sent Icon"
                                      className="icon"
                                    />
                                  </div>

                                  <a href="#">Send connection Request</a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    </>
  );
};
