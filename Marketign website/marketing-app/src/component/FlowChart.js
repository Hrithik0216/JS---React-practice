
export const FlowChart = () => {
  return (
    <div>
      <nav class="nav">
        <ul>
          <li>
            <div class="parent">
              <a class="email-sent" href="#">
                <i class="fas fa-envelope"></i> Emails sent
              </a>
            </div>

            <ul>
              <li>
                <a href="#">
                  <i class="fas fa-envelope-open firstChild"></i>{" "}
                  <p>Email Opened Twice</p>
                </a>
                <ul>
                  <li>
                    <a href="#">
                      <i class="fas fa-tags"></i> Pricing page visited
                    </a>
                    <ul>
                      <li>
                        <a href="#">
                          <i class="fas fa-user-plus"></i> Send Connection
                          request
                        </a>
                        <ul>
                          <li>
                            <a href="#" >
                                <h5 class="connection-sent"> <i class="fas fa-user-plus"></i> Connection
                                Request accepted </h5>
                              {/* <i class="fas fa-user-plus"></i> Connection
                              Request accepted */}
                              <div class="children">
                                <p>Send connection Request</p>
                                <span class="prospect">Call the prospect</span>
                                {/* <p>Call the prospect</p> */}
                              </div>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <i class="fas fa-envelope-open firstChild"></i>{" "}
                  <p>Email not Opened</p>
                </a>
                <ul>
                  <li>
                    <a href="#">
                      <i class="fas fa-reply"></i> Send Followup email
                    </a>
                    <ul>
                      <li>
                        <a href="#">
                          <i class="fas fa-reply-all"></i> Send Followup email
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};
