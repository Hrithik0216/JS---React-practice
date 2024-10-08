import emailSentIcon from "../Assets/download.svg";

export const FlowchartTwo = () => {
  return (
    <div className="tree">
      <ul>
        <li>
          <div className="li-container mailSent">
            <img src={emailSentIcon} alt="Email Sent Icon" className="icon" />
            <a className="mailSentAnchor" href="#">
              Email Sent
            </a>
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
                  <div className="li-container">
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
                              Connection Request Accepted
                            </div>
                            <div className="li-parent">
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
                  <div className="li-container">
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
                      {/* Apply zoom effect to the entire container */}
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
                          {/* Apply zoom effect to the entire container */}
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
