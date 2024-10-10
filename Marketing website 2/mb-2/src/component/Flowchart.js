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
        if (
          !li.classList.contains("zoom-effect") &&
          !li.classList.contains("zoom-avoid")
        ) {
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
                <a className="mailSentAnchor">
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
                      <a> Email Opened twice</a>
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
                        <a>Pricing page visited</a>
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
                            <a>Send Connection Request</a>
                          </div>
                        </div>
                        <ul>
                          <li>
                            <div className="li-container zoom-avoid">
                              <div className="request-accepted">
                                <img
                                  src={connectionRequestAccepted}
                                  alt="Request Accepted Icon"
                                  className="icon"
                                />
                                <a>Connection Request Accepted</a>
                              </div>
                              <div className="linkedIn-parent">
                                <div className="li-child">
                                  <div className="connection-accepted-icon-bg">
                                    <img
                                      src={sendLinkedinMessage}
                                      alt="Message Sent Icon"
                                      className="connection-accepted-icon"
                                    />
                                  </div>
                                  <a className="a-connection-request-accepted">Send LinkedIn Message</a>
                                </div>
                                <div className="li-child">
                                  <div className="call-prospect-icon-bg zoom-effect">
                                    <img
                                      src={callTheProspect}
                                      alt="call Icon"
                                      className="call-prospect-icon"
                                    />
                                  </div>

                                  <a className="call-prospect zoom-effect">
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
                      <a>Email not opened</a>
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
                        <a>Send followup email</a>
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
                            <a>Visit LinkedIn Profile</a>
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
                                <a>Send LinkedIn Inmail</a>
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

                                    <a>Send connection Request</a>
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
