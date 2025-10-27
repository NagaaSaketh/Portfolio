import devLogo from "./assets/dev.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div className="navbar-container">
        <div className="container">
          <div className="navbar">
            <Link
              className="navbar-brand d-flex align-items-center gap-3"
              to="/"
            >
              <img className="img-fluid" src={devLogo} alt="developer-logo" />
              <span className="fs-5 fw-bold">Naga Saketh</span>
            </Link>
          </div>
        </div>
        <hr />
      </div>
      <main className="container py-5">
        <div className="py-5">
          <div className="row my-5">
            <div className="col-md-8 col-lg-8">
              <h1 className="display-2 fw-bold mb-2">Naga Saketh</h1>
              <h4 className="text-secondary fw-bold mt-3">Full Stack dev</h4>
              <div className="underline bg-success mt-3"></div>
              <p className="fs-5 fw-light my-3">
                Passionate full-stack developer focused on building modern,
                user-friendly web experiences.
              </p>
              <p className="fs-5 fw-light">
                Specializing in React, Node.js, and MongoDB to build scalable
                and user-centered applications.
              </p>
              <div className="d-flex gap-4 pt-2">
                <Link to="/contact" className="btn btn-success px-3">
                  Contact Me
                </Link>
                <Link to="/resume" className="btn btn-outline-secondary px-3">
                  Resume
                </Link>
              </div>
            </div>
          </div>
          <div className="projects py-5">
            <div className="row my-5">
              <div className="col-12">
                <h1 className="display-2 fw-bold mb-2">Projects</h1>
                <h4 className="text-secondary fw-bold mt-3">
                  Turning creativity into real-world solutions.
                </h4>
                <div className="underline bg-success mt-3"></div>
              </div>
            </div>
            <div className="project-cards row g-4">
              <div className="col-md-6 d-flex">
                <div className="card border-dark h-100 w-100 d-flex flex-column">
                  <img
                    className="img-fluid"
                    src="https://img.freepik.com/free-photo/fashion-collection-design-shopping-graphic-words_53876-144405.jpg"
                    alt="fashion-img"
                  />
                  <div className="card-body d-flex flex-column flex-grow-1">
                    <p className="fs-5 fw-bold">Fashion Forte</p>
                    <p>
                      A modern e-commerce platform to browse and shop the latest
                      fashion for Men, Women, and Kids.
                    </p>
                    <div className="d-flex align-content-center gap-3">
                      <p className="badge text-bg-dark p-2">React</p>
                      <p className="badge text-bg-dark p-2">Node.js</p>
                      <p className="badge text-bg-dark p-2">MongoDB</p>
                      <p className="badge text-bg-dark p-2">Express</p>
                    </div>
                    <div className="d-flex gap-3 mt-auto">
                      <Link
                        to="https://project-major-frontend.vercel.app/"
                        className="demo btn text-light"
                      >
                        <div className="d-flex gap-2">
                          <img
                            className="img-fluid"
                            src="https://img.icons8.com/ios7/512w/FFFFFF/visible--v2.png"
                            alt="eye"
                          />
                          <span>Demo</span>
                        </div>
                      </Link>
                      <Link
                        to="https://github.com/NagaaSaketh/ProjectMajor_Frontend"
                        className="demo btn text-light"
                      >
                        <div className="d-flex gap-2">
                          <img
                            className="img-fluid"
                            src="https://img.icons8.com/ios11/512w/FFFFFF/source-code.png"
                            alt="code"
                          />
                          <span>Code</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex">
                <div className="card border-dark h-100 w-100 d-flex flex-column">
                  <img
                    className="img-fluid"
                    src="https://www.subraa.com/there/wp-content/uploads/logo-design-singapore-portfolio/CRM-Software-Company-Logo-Design.jpg"
                    alt="fashion-img"
                  />
                  <div className="card-body d-flex flex-column flex-grow-1">
                    <p className="fs-5 fw-bold">Anvaya CRM</p>
                    <p>
                      Anvaya CRM helps track leads, assign sales agents, and
                      manage updates throughout the lead lifecycle.
                    </p>
                    <div className="d-flex align-content-center gap-3">
                      <p className="badge text-bg-dark p-2">React</p>
                      <p className="badge text-bg-dark p-2">Node.js</p>
                      <p className="badge text-bg-dark p-2">MongoDB</p>
                      <p className="badge text-bg-dark p-2">Express</p>
                      <p className="badge text-bg-dark p-2">Chart.js</p>
                    </div>
                    <div className="d-flex gap-4 mt-auto">
                      <Link
                        to="https://major-project2-frontend.vercel.app/"
                        className="demo btn text-light"
                      >
                        <div className="d-flex gap-2">
                          <img
                            className="img-fluid"
                            src="https://img.icons8.com/ios7/512w/FFFFFF/visible--v2.png"
                            alt="eye"
                          />
                          <span>Demo</span>
                        </div>
                      </Link>
                      <Link
                        to="https://github.com/NagaaSaketh/MajorProject2_Frontend"
                        className="demo btn text-light"
                      >
                        <div className="d-flex gap-2">
                          <img
                            className="img-fluid"
                            src="https://img.icons8.com/ios11/512w/FFFFFF/source-code.png"
                            alt="code"
                          />
                          <span>Code</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-5">
            <div className="row my-5">
              <div className="col-md-8 col-lg-8">
                <h1 className="display-3 fw-bold mb-2">Tech Stack</h1>
                <h4 className="text-secondary mt-3">
                  Technologies & Tools I work with
                </h4>
                <div className="underline bg-success mb-5"></div>
                <div className="tech-stack">
                  <div className="row g-4">
                    <div className="col-6 col-md-4 col-lg-4">
                      <div className="d-flex align-items-center mb-4">
                        <div className="me-3">
                          <img
                            className="img-fluid"
                            src="https://img.icons8.com/ios_filled/512/FFFFFF/react-native.png"
                            alt="react"
                          />
                        </div>
                        <span className="fs-5">React</span>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-4">
                      <div className="d-flex align-items-center mb-4">
                        <div className="me-3">
                          <img
                            className="img-fluid"
                            src="https://img.icons8.com/ios_filled/512/FFFFFF/javascript.png"
                            alt="js"
                          />
                        </div>
                        <span className="fs-5">JavaScript</span>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-4">
                      <div className="d-flex align-items-center mb-4">
                        <div className="me-3">
                          <img
                            className="img-fluid"
                            src="https://img.icons8.com/ios7/600w/FFFFFF/bootstrap.png"
                            alt="bootstrap"
                          />
                        </div>
                        <span className="fs-5">Bootstrap</span>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-4">
                      <div className="d-flex align-items-center mb-4">
                        <div className="me-3">
                          <img
                            className="img-fluid"
                            src="https://img.icons8.com/fluent/512w/node-js.png"
                            alt="node"
                          />
                        </div>
                        <span className="fs-5">Node.js</span>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-4">
                      <div className="d-flex align-items-center mb-4">
                        <div className="me-3">
                          <img
                            className="img-fluid"
                            src="https://img.icons8.com/ios7/512w/FFFFFF/express-js.png"
                            alt="express"
                          />
                        </div>
                        <span className="fs-5">Express</span>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-4">
                      <div className="d-flex align-items-center mb-4">
                        <div className="me-3">
                          <img
                            className="img-fluid"
                            src="https://img.icons8.com/?size=512&id=74402&format=png"
                            alt="mongo"
                          />
                        </div>
                        <span className="fs-5">MongoDB</span>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-4">
                      <div className="d-flex align-items-center mb-4">
                        <div className="me-3">
                          <img
                            className="img-fluid"
                            src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/vercel.png"
                            alt="vercel"
                          />
                        </div>
                        <span className="fs-5">Vercel</span>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-4">
                      <div className="d-flex align-items-center mb-4">
                        <div className="me-3">
                          <img
                            className="img-fluid"
                            src="https://img.icons8.com/ios11/512/FFFFFF/github.png"
                            alt="github"
                          />
                        </div>
                        <span className="fs-5">GitHub</span>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-4">
                      <div className="d-flex align-items-center mb-4">
                        <div className="me-3">
                          <img
                            className="img-fluid"
                            src="https://img.icons8.com/carbon_copy/512w/FFFFFF/visual-studio-code-2019.png"
                            alt="vs-code"
                          />
                        </div>
                        <span className="fs-5">VS Code</span>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-4">
                      <div className="d-flex align-items-center mb-4">
                        <div className="me-3">
                          <img
                            className="img-fluid"
                            src="https://img.icons8.com/m_sharp/512w/FFFFFF/java-coffee-cup-logo.png"
                            alt="java"
                          />
                        </div>
                        <span className="fs-5">Java</span>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-4">
                      <div className="d-flex align-items-center mb-4">
                        <div className="me-3">
                          <img
                            className="img-fluid"
                            src="https://img.icons8.com/win8/512w/FFFFFF/python.png"
                            alt="pyt"
                          />
                        </div>
                        <span className="fs-5">Python</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-5">
            <div className="row my-5">
              <div className="col-md-8 col-lg-8">
                <h1 className="display-3 fw-bold mb-2">Connect</h1>
                <h4 className="text-secondary fw-bold mt-3">
                  Let's collaborate to create something extraordinary.
                </h4>
                <div className="underline bg-success mt-3"></div>
                <div className="connect row">
                  <div className="col-6 col-md-6 col-lg-6 mt-3">
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
                  </div>
                  <div className="col-6 col-md-6 col-lg-6 mt-3">
                    <div className="card border-0">
                      <div className="card-body card-body h-100 p-4">
                        <div className="d-flex align-items-center gap-3 mb-3">
                          <img
                            className="img-fluid"
                            src="https://img.icons8.com/ios11/512/FFFFFF/github.png"
                            alt="github"
                          />
                          <span className="fs-4 fw-bold text-light">
                            GitHub
                          </span>
                        </div>
                        <p className="mb-0 text-secondary fs-6">
                          Follow on GitHub
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-6 col-lg-6 mt-3">
                    <div className="card border-0">
                      <div className="card-body card-body h-100 p-4">
                        <div className="d-flex align-items-center gap-3 mb-3">
                          <img
                            className="img-fluid"
                            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-white-icon.png"
                            alt="linkedin"
                          />
                          <span className="fs-4 fw-bold text-light">
                            LinkedIn
                          </span>
                        </div>
                        <p className="mb-0 text-secondary fs-6">
                          Connect on LinkedIn
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-6 col-lg-6 mt-3">
                    <div className="card border-0">
                      <div className="card-body h-100 p-4">
                        <div className="d-flex align-items-center gap-3 mb-3">
                          <img
                            className="img-fluid"
                            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/x-social-media-white-icon.png"
                            alt="twitter"
                          />
                          <span className="fs-4 fw-bold text-light">
                            Twitter
                          </span>
                        </div>
                        <p className="mb-0 text-secondary fs-6">
                          Follow on Twitter
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-3 pt-3">
          <p>&copy; 2025 Naga Saketh • All rights reserved</p>
          <p>
            Learning full stack development at{" "}
            <Link className="neog text-success">neog.camp</Link>
          </p>
        </div>
        <div className="top-btn position-fixed bottom-0 end-0 p-2">
          <button
            onClick={() => window.scrollTo(0, 0)}
            className="btn btn-light rounded-circle p-3"
          >
            <img
              className="img-fluid bg-light"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Top_Arrow.svg/768px-Top_Arrow.svg.png"
              alt="arrow"
            />
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
