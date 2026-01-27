import "./styles/root.css";
import NavBar from "./modules/Navbar";
import Introduction from "./modules/Introduction";
import AboutMe from "./modules/AboutMe";
import Technologies from "./modules/Technologies";
import Education from "./modules/Education";
import GitHubContributions from "./modules/GitHubContributions";

function App() {
  return <>
      <div className="body">
        <NavBar>

        </NavBar>
        <Introduction>

        </Introduction>
        <AboutMe>
          
        </AboutMe>
        <div className="tech_educ">
          <Education>

          </Education>
          <Technologies>
          
          </Technologies>
        </div>
        <GitHubContributions>
          
        </GitHubContributions>
      </div>
  </>
}

export default App;