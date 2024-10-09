import emailSentIcon from "../Assets/download.svg";
import React, { useEffect } from "react";

export const Flowchart = () => {
  useEffect(() => {
    const zoomEffectElements = document.querySelectorAll(".zoom-effect");
    const allContainers = document.querySelectorAll(".tree .li-container");

    // Function to apply blur to all non-zooming elements
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

        // Apply blur at 50% of the animation
        setTimeout(() => {
          applyBlur();
        }, 1000); // Adjust according to your animation duration

        // Remove blur just before zoom-out starts
        setTimeout(() => {
          removeBlur();
        }, 2750); // Extend to match the zoom-out phase
      });
    });
   
  }, []);


  

  return (
    <div className="tree">
      <ul>
        <li>
          <div className="li-container mailSent">
            <div className="mailSent-div">
              <img src={emailSentIcon} alt="Email Sent Icon" className="icon" />
              <a className="mailSentAnchor" href="#">
                Email Sent
              </a>
            </div>
          </div>

          <ul>
            <li>
              <div className="li-container">
                <div className="inner-li-container">
                  <img
                    src={emailSentIcon}
                    alt="Email Sent Icon"
                    className="icon"
                  />
                  <div className="text-container">
                    <a href="#"> Email Opened twice</a>
                  </div>
                </div>
              </div>

              <ul>
                <li>
                  <div className="li-container first-child-extended">
                    <div className="inner-li-container">
                      <img
                        src={emailSentIcon}
                        alt="Email Sent Icon"
                        className="icon"
                      />
                      <a href="#">Pricing page visited</a>
                    </div>
                  </div>

                  <ul>
                    <li>
                      <div className="li-container">
                        <div className="inner-li-container">
                          <img
                            src={emailSentIcon}
                            alt="Email Sent Icon"
                            className="icon"
                          />
                          <a href="#">Send Connection Request</a>
                        </div>
                      </div>
                      <ul>
                        <li>
                          <div className="li-container">
                            <div className="request-accepted">
                              <img
                                src={emailSentIcon}
                                alt="Email Sent Icon"
                                className="icon"
                              />
                              <a href="#">Connection Request Accepted</a>
                            </div>
                            <div className="linkedIn-parent">
                              <div className="li-child">
                                <img
                                  src={emailSentIcon}
                                  alt="Email Sent Icon"
                                  className="icon"
                                />
                                <a href="#">Send LinkedIn Message</a>
                              </div>
                              <div className="li-child">
                                <img
                                  src={emailSentIcon}
                                  alt="Email Sent Icon"
                                  className="icon"
                                />
                                <a href="#">Call the Prospect</a>
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
              <div className="li-container">
                <div className="inner-li-container">
                  <img
                    src={emailSentIcon}
                    alt="Email Sent Icon"
                    className="icon"
                  />
                  <div className="text-container">
                    <a href="#">Email not opened</a>
                  </div>
                </div>
              </div>

              <ul>
                <li>
                  <div className="li-container first-child-extended">
                    <div className="inner-li-container">
                      <img
                        src={emailSentIcon}
                        alt="Email Sent Icon"
                        className="icon"
                      />
                      <a href="#">Send followup email</a>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <div className="li-container zoom-effect">
                        <div className="inner-li-container">
                          <img
                            src={emailSentIcon}
                            alt="Email Sent Icon"
                            className="icon"
                          />
                          <a href="#">Visit LinkedIn Profile</a>
                        </div>
                      </div>
                      <ul>
                        <li>
                          <div className="li-container zoom-effect">
                            <div className="inner-li-container">
                              <img
                                src={emailSentIcon}
                                alt="Email Sent Icon"
                                className="icon"
                              />
                              <a href="#">Send LinkedIn Inmail</a>
                            </div>
                          </div>
                          <ul>
                            <li>
                              <div className="li-container">
                                <div className="inner-li-container">
                                  <img
                                    src={emailSentIcon}
                                    alt="Email Sent Icon"
                                    className="icon"
                                  />
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
  );
};
