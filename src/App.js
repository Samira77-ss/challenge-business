import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1>Get insights that help your business grow.</h1>
            <p>
              {" "}
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.{" "}
            </p>
            <div className="row">
              <div className="col-4">
                10k+ <div>ompanies</div>
              </div>
              <div className="col-4">
                314 <div>templates</div>
              </div>
              <div className="col-4">
                2m+ <div>queries</div>
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
