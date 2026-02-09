import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="projects py-3">
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
        <div className="col-md-4 d-flex">
          <div className="card border-dark h-100 w-100 d-flex flex-column">
            <img
              style={{ height: "220px", objectFit: "cover" }}
              className="img-fluid"
              src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbiUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
              alt="fashion-img"
            />
            <div className="card-body d-flex flex-column flex-grow-1">
              <p className="fs-5 fw-bold">Fashion Forte</p>
              <p>
                A modern e-commerce platform to browse and shop the latest
                fashion for Men, Women, and Kids.
              </p>
              <div className="d-flex flex-wrap align-content-center gap-3">
                <p className="badge rounded-pill text-bg-dark p-2">React</p>
                <p className="badge rounded-pill text-bg-dark p-2">Node.js</p>
                <p className="badge rounded-pill text-bg-dark p-2">MongoDB</p>
                <p className="badge rounded-pill text-bg-dark p-2">Express</p>
              </div>
              <div className="d-flex gap-3 mt-auto">
                <a
                  href="https://project-major-frontend.vercel.app/"
                  className="demo btn text-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="d-flex gap-1">
                    <img
                      style={{ width: "25px", height: "25px" }}
                      className="img-fluid"
                      src="https://img.icons8.com/ios7/512w/FFFFFF/visible--v2.png"
                      alt="eye"
                    />
                    <span>Demo</span>
                  </div>
                </a>
                <a
                  href="https://github.com/NagaaSaketh/ProjectMajor_Frontend"
                  className="demo btn text-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="d-flex gap-1">
                    <img
                      style={{ width: "25px", height: "25px" }}
                      className="img-fluid"
                      src="https://img.icons8.com/ios11/512w/FFFFFF/source-code.png"
                      alt="code"
                    />
                    <span>Code</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex">
          <div className="card border-dark h-100 w-100 d-flex flex-column">
            <img
              style={{ height: "220px", objectFit: "cover" }}
              className="img-fluid"
              src="https://www.subraa.com/there/wp-content/uploads/logo-design-singapore-portfolio/CRM-Software-Company-Logo-Design.jpg"
              alt="crm-img"
            />
            <div className="card-body d-flex flex-column flex-grow-1">
              <p className="fs-5 fw-bold">Anvaya CRM</p>
              <p>
                Anvaya CRM helps track leads, assign sales agents, and manage
                updates throughout the lead lifecycle.
              </p>
              <div className="d-flex flex-wrap align-content-center gap-2">
                <p className="badge rounded-pill text-bg-dark p-2">React</p>
                <p className="badge rounded-pill text-bg-dark p-2">Node.js</p>
                <p className="badge rounded-pill text-bg-dark p-2">MongoDB</p>
                <p className="badge rounded-pill text-bg-dark p-2">Express</p>
                <p className="badge rounded-pill text-bg-dark p-2">Chart.js</p>
              </div>
              <div className="d-flex gap-4 mt-auto">
                <a
                  href="https://major-project2-frontend.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="demo btn text-light"
                >
                  <div className="d-flex gap-1">
                    <img
                      style={{ width: "25px", height: "25px" }}
                      className="img-fluid"
                      src="https://img.icons8.com/ios7/512w/FFFFFF/visible--v2.png"
                      alt="eye"
                    />
                    <span>Demo</span>
                  </div>
                </a>
                <a
                  href="https://github.com/NagaaSaketh/MajorProject2_Frontend"
                  className="demo btn text-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="d-flex gap-1">
                    <img
                      style={{ width: "25px", height: "25px" }}
                      className="img-fluid"
                      src="https://img.icons8.com/ios11/512w/FFFFFF/source-code.png"
                      alt="code"
                    />
                    <span>Code</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex">
          <div className="card border-dark h-100 w-100 d-flex flex-column">
            <img
              style={{ height: "220px", objectFit: "cover" }}
              className="img-fluid"
              src="https://appinventiv.com/wp-content/uploads/2024/12/how_to_hire_a_cross_platform_developer_all_you_need_to_know.webp"
              alt="devs"
            />
            <div className="card-body d-flex flex-column flex-grow-1">
              <p className="fs-5 fw-bold">DevConnect</p>
              <p>
                DevConnect is a platform where developers Connect , Collaborate
                and Code.
              </p>
              <div className="d-flex flex-wrap align-content-center gap-2">
                <p className="badge rounded-pill text-bg-dark p-2">React</p>
                <p className="badge rounded-pill text-bg-dark p-2">Node.js</p>
                <p className="badge  rounded-pill text-bg-dark p-2">MongoDB</p>
                <p className="badge  rounded-pill text-bg-dark p-2">Express</p>
                <p className="badge  rounded-pill text-bg-dark p-2">
                  Cloudinary
                </p>
                <p className="badge  rounded-pill text-bg-dark p-2">OAuth</p>
              </div>
              <div className="d-flex gap-4 mt-auto">
                <a
                  href="https://major-project2-frontend.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="demo btn text-light"
                >
                  <div className="d-flex gap-1">
                    <img
                      className="img-fluid"
                      style={{ width: "25px", height: "25px" }}
                      src="https://img.icons8.com/ios7/512w/FFFFFF/visible--v2.png"
                      alt="eye"
                    />
                    <span>Demo</span>
                  </div>
                </a>
                <a
                  href="https://github.com/NagaaSaketh/DevConnect_Frontend"
                  className="demo btn text-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="d-flex gap-1">
                    <img
                      className="img-fluid"
                      src="https://img.icons8.com/ios11/512w/FFFFFF/source-code.png"
                      alt="code"
                    />
                    <span>Code</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
