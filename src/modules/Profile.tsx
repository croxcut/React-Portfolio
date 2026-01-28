import { useState, useEffect } from "react";
import self from "../assets/images/me.jpg";
import "../styles/profile.css";

import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook} from "react-icons/fa";

function Profile() {
  const fullText = `I am a fourth-year student at Our Lady of Fatima University, Quezon City, and a Fullstack Developer with experience in web, mobile, and low-level systems development. I have hands-on skills in building responsive web applications, developing cross-platform mobile apps, and working with low-level systems programming, including experience with operating systems and game engine development. Beyond my technical expertise, I have also gained experience in project management, coordinating development workflows, overseeing project timelines, and collaborating with cross-functional teams to ensure timely delivery of software projects.
  
Previously, I was a Navy Cadet applicant, but I chose to pivot my focus toward technology and software development to align with my evolving interests and career goals. This transition has allowed me to cultivate a strong foundation in both the technical and managerial aspects of software development, enabling me to not only write efficient code but also effectively plan, execute, and deliver complex projects. I am passionate about creating innovative solutions, optimizing system performance, and leading teams toward achieving strategic development objectives.`;

  const [displayedText, setDisplayedText] = useState(fullText);

  // Shuffle letters of a word
  const shuffleWord = (word: string): string => {
    if (word.length <= 1) return word;
    const arr = word.split("");
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join("");
  };

  useEffect(() => {
    const words = fullText.split(" ");
    let currentWords = [...words];
    let steps = 0;
    const maxSteps = 15;

    const interval = setInterval(() => {
      steps++;

      currentWords = currentWords.map((word: string, i: number) => {
        const original = words[i];
        let shuffled = shuffleWord(original);

        let newWord = shuffled
          .split("")
          .map((char: string, idx: number) => {
            if (Math.random() < steps / maxSteps) return original[idx] || char;
            return char;
          })
          .join("");

        return newWord;
      });

      setDisplayedText(currentWords.join(" "));

      if (steps >= maxSteps) {
        setDisplayedText(fullText);
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="head_container">
      <div className="prof_soc_container pop-in">
        <img src={self} alt="Profile" className="profile" />
        <div className="socials_container">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub />
            <span>github</span>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
            <span>linkedin</span>
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
            <span>twitter</span>
          </a>
          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
            <span>instagram</span>
          </a>
          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
            <span>facebook</span>
          </a>
        </div>
      </div>
      <div className="profile_details pop-in">
        <h2>ABOUT ME</h2>
        <p className="about_text">{displayedText}</p>
      </div>
    </div>
  );
}

export default Profile;
