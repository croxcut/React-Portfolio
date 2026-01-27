import { useEffect, useState } from "react";
import "../styles/education.css";

function Education() {
  const education = [
    "Our Lady of Fatima University",
    "Metropolitan Institute of Arts And Sciences",
    "Kalayaan National High School",
    "Bagong Silang Elementary School",
  ];

  // Track which items are visible (for staggered animation)
  const [visible, setVisible] = useState<boolean[]>(education.map(() => false));

  useEffect(() => {
    // Animate items one by one
    education.forEach((_, i) => {
      setTimeout(() => {
        setVisible((prev) => {
          const newState = [...prev];
          newState[i] = true;
          return newState;
        });
      }, i * 150); // 150ms delay per item
    });
  }, []);

  return (
    <div className="_contaier">
      <h2>Education</h2>
      <ul>
        {education.map((school, index) => (
          <li
            key={index}
            className={`educ-item ${visible[index] ? "show" : ""}`}
          >
            <p>{school}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Education;