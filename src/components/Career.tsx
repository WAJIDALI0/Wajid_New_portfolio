import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>React Native Developer</h4>
                <h5>CallBackCrew Software House</h5>
              </div>
              <h3>Recent</h3>
            </div>
            <p>
              Developed high-performance mobile applications for iOS and Android. Designed reusable components, integrated third-party native modules, worked with RESTful/GraphQL APIs, and implemented device-specific features like GPS and notifications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MERN Stack Developer</h4>
                <h5>CallBackCrew Software House</h5>
              </div>
              <h3>Previous</h3>
            </div>
            <p>
              Designed and developed dynamic web apps using MongoDB, Express, React, and Node.js. Built robust backend APIs, optimized database schemas, and implemented Live Chat functionality using Socket.io.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
