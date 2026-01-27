import "../styles/technologies.css";
import "../styles/root.css"
import { useEffect, useState } from "react";

function Technologies() {
  const techs = [
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 80 },
    { name: "C/C++", level: 95 },
    { name: "Java", level: 90 },
    { name: "x86 Assembly", level: 60 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 80 },
    { name: "SQL", level: 60 },
    { name: "Tailwind", level: 75 },
    { name: "CSS", level: 90 },
  ];

  const sortedTechs = [...techs].sort((a, b) => b.level - a.level);

  const [progress, setProgress] = useState(Array(sortedTechs.length).fill(0));

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress(sortedTechs.map((t) => t.level));
    }, 100);
    return () => clearTimeout(timeout);
  }, [sortedTechs]);

  return (
    <div className="_contaier">
      <h2 className="tech-header">Technologies I Use</h2>

      <ul className="tech-list">
        {sortedTechs.map((tech, index) => (
          <li key={index} className="tech-item">
            <span className="tech-name">{tech.name}</span>

            <div className="tech-progress">
              <div
                className="tech-progress-fill"
                style={{ width: `${progress[index]}%` }}
              >
                <span className="tech-progress-text">{progress[index]}%</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Technologies;