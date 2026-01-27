import { GitHubCalendar } from "react-github-calendar";
import "../styles/github.css";

function GitHubContributions() {
  return (
    <div className="github_contaier">
      <h2>GitHub Contributions :D*</h2>
      <GitHubCalendar
        username="croxcut" 
        blockSize={15}
        blockMargin={4}
        fontSize={16}
      />
    </div>
  );
}

export default GitHubContributions;
