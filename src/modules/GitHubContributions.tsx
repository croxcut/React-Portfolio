import { GitHubCalendar } from "react-github-calendar";
import "../styles/github.css";

function GitHubContributions() {
  return (
    <div className="github-container">
      <h2>🚀 My GitHub Contributions</h2>
      <GitHubCalendar
        username="croxcut"
        blockSize={16}
        blockMargin={4}
        fontSize={14}
        theme={{
          light: ['#EAEFEF', '#FF9B51'], // gradient from light → orange
          dark: ['#EAEFEF', '#FF9B51'],  // same for dark mode
        }}
      />
    </div>
  );
}

export default GitHubContributions;
