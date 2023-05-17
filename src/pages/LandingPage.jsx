import "./LandingPage.styles.scss";

import Content from "../components/Content/Content";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

function LandingPage() {
  return (
    <main className="landing-page">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="main">
        <Content />
        <Footer />
      </div>
    </main>
  );
}

export default LandingPage;
