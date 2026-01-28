import { useEffect, useState } from "react";
import "../styles/education.css";

function Education() {
  const education = [
    {
      school: "Our Lady of Fatima University",
      startYear: 2022,
      endYear: "Present",
    },
    {
      school: "Metropolitan Institute of Arts And Sciences",
      startYear: 2020,
      endYear: 2022,
    },
    {
      school: "Kalayaan National High School",
      startYear: 2016,
      endYear: 2020,
    },
    {
      school: "Bagong Silang Elementary School",
      startYear: 2010,
      endYear: 2016,
    },
  ];

  // Track which items are visible (for staggered animation)
  const [visible, setVisible] = useState<boolean[]>(
    education.map(() => false)
  );

  useEffect(() => {
    education.forEach((_, i) => {
      setTimeout(() => {
        setVisible((prev) => {
          const newState = [...prev];
          newState[i] = true;
          return newState;
        });
      }, i * 100);
    });
  }, []);

  return (
    <div className="_contaier">
      <h2>Education</h2>
      <ul>
        {education.map((item, index) => (
          <li
            key={index}
            className={`educ-item ${visible[index] ? "show" : ""}`}
          >
            <p className="school">{item.school}</p>
            <br></br>
            <span className="year">
              {item.startYear} – {item.endYear}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Education;