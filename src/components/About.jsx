import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="py-4">
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
              Specializing in React, Node.js, and MongoDB to build scalable and
              user-centered applications.
            </p>
            <div className="d-flex gap-4 pt-2">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=vadlamanisaketh25@gmail.com&su=Contact%20from%20Portfolio&body=Hi,There Let's Connect!"
                className="btn btn-success"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Me
              </a>
              <a
                href="https://drive.google.com/file/d/1ZODHRbUJ5Ea1tX1xdhUhipCf83ARttYm/preview"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-success px-3"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
