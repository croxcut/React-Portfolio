import "../styles/about_me.css"
import self from "../assets/images/me.jpg"

function AboutMe() {
    return <>
        <div className="container">
            <img src={self} alt="Me" width={100} />
            <p className="about_me">
                I'm John Paul N. Valenzuela a undergrad Bachelor of Scince in Computer Science student from Our Lady of Fatima University Quezon City.
                Over the course of 4 years i have developed or partake in software development with varying complexities from simple terminal based/shell
                applications or high level Web/Desktop development, Low level systems development, and machine learning. 
            </p>
        </div>
    </>
}

export default AboutMe;