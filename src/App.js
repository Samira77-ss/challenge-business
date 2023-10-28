import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-6 main-part">
            <h1>
              Get <spn className="insight">insights</spn> that help your
              business grow.
            </h1>
            <p>
              {" "}
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.{" "}
            </p>
            <div className="row furtherInfo">
              <div className="col-4">
                <span className="number">10k+</span>{" "}
                <div className="info">COMPANIES</div>
              </div>
              <div className="col-4">
                <span className="number">314</span>{" "}
                <div className="info">TEMPLATES</div>
              </div>
              <div className="col-4">
                <span className="number">12M+</span>
                <div className="info">QUERIES</div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <img
              src="	https://status-preview-card-component-zeta.vercel.app/assets/image-header-mobile-1da9426a.jpg"
              alt="businesswomen"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
