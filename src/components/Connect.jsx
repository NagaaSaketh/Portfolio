const Connect = () => {
  return (
    <div className="py-3">
      <div className="row my-5">
        <div className="col-md-8 col-lg-8">
          <h1 className="display-3 fw-bold mb-2">Connect</h1>
          <h4 className="text-secondary fw-bold mt-3">
            Let's collaborate to create something extraordinary.
          </h4>
          <div className="underline bg-success mt-3"></div>
          <div className="connect row">
            <div className="col-6 col-md-6 col-lg-6 mt-3">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=vadlamanisaketh25@gmail.com&su=Contact%20from%20Portfolio&body=Hi,There Let's Connect!"
                className="text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="card border-0">
                  <div className="card-body h-100 p-4">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <img
                        className="img-fluid"
                        src="https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/email-envelope-white-icon.png"
                        alt="email"
                      />
                      <span className="fs-4 fw-bold text-light">Email</span>
                    </div>
                    <p className="mb-0 text-secondary fs-6">
                      vadlamanisaketh25@gmail.com
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-6 col-md-6 col-lg-6 mt-3">
              <a
                className="text-decoration-none"
                href="https://github.com/NagaaSaketh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="card border-0">
                  <div className="card-body card-body h-100 p-4">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <img
                        className="img-fluid"
                        src="https://img.icons8.com/ios11/512/FFFFFF/github.png"
                        alt="github"
                      />
                      <span className="fs-4 fw-bold text-light">GitHub</span>
                    </div>
                    <p className="mb-0 text-secondary fs-6">Follow on GitHub</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-6 col-md-6 col-lg-6 mt-3">
              <div className="card border-0">
                <a
                  className="text-decoration-none"
                  href="https://www.linkedin.com/in/nagasaketh-vadlamani/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="card-body card-body h-100 p-4">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <img
                        className="img-fluid"
                        src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-white-icon.png"
                        alt="linkedin"
                      />
                      <span className="fs-4 fw-bold text-light">LinkedIn</span>
                    </div>
                    <p className="mb-0 text-secondary fs-6">
                      Connect on LinkedIn
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-6 mt-3">
              <a
                className="text-decoration-none"
                href="https://x.com/SakethNaag51440"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="card border-0">
                  <div className="card-body h-100 p-4">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <img
                        className="img-fluid"
                        src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/x-social-media-white-icon.png"
                        alt="twitter"
                      />
                      <span className="fs-4 fw-bold text-light">Twitter</span>
                    </div>
                    <p className="mb-0 text-secondary fs-6">
                      Follow on Twitter
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
