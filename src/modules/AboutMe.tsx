import { useEffect, useState } from "react";
import "../styles/about_me.css";
import self from "../assets/images/me.jpg";

// Example social icons using react-icons
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const FINAL_TEXT = `I am a fourth-year student at Our Lady of Fatima University, Quezon City, and a Fullstack Developer with experience in web, mobile, and low-level systems development. I have hands-on skills in building responsive web applications, developing cross-platform mobile apps, and working with low-level systems programming, including experience with operating systems and game engine development. Beyond my technical expertise, I have also gained experience in project management, coordinating development workflows, overseeing project timelines, and collaborating with cross-functional teams to ensure timely delivery of software projects.

Previously, I was a Navy Cadet applicant, but I chose to pivot my focus toward technology and software development to align with my evolving interests and career goals. This transition has allowed me to cultivate a strong foundation in both the technical and managerial aspects of software development, enabling me to not only write efficient code but also effectively plan, execute, and deliver complex projects. I am passionate about creating innovative solutions, optimizing system performance, and leading teams toward achieving strategic development objectives..`;

const RANDOM_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

function AboutMe() {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        FINAL_TEXT
          .split("")
          .map((char, index) => {
            if (index < iterations) return char;
            if (char === " ") return " ";
            return RANDOM_CHARS[Math.floor(Math.random() * RANDOM_CHARS.length)];
          })
          .join("")
      );

      iterations += 2;

      if (iterations >= FINAL_TEXT.length) {
        clearInterval(interval);
        setDisplayText(FINAL_TEXT);
      }
    }, 15);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
        <div className="img_block">
        <img src={self} alt="Me" />
        <div className="socials">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaGithub />
                <h6>github</h6>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
                <h6>linkedin</h6>
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
                <h6>twitter</h6>
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
                <h6>facebook</h6>
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
                <h6>instagram</h6>
            </a>
        </div>
        </div>
        <div className="about_me_block">
            <p className="about_me scramble">{displayText}</p>
        </div>
    </div>
  );
}

export default AboutMe;