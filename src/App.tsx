import React, { useEffect } from "react";
import "./styles/root.css";
import Profile from "./modules/Profile";

function App() {
  useEffect(() => {
    const defBody = document.querySelector(".def_body");
    if (!defBody) return; 

    for (let i = 0; i < 40; i++) {
      const shape = document.createElement("div");
      const size = Math.random() * 40 + 10; // 10px to 50px
      const color = `hsl(${Math.random() * 360}, 70%, 60%)`; // random color
      const left = Math.random() * 100; // position from left 0% to 100%
      const duration = Math.random() * 10 + 5; // 5s to 15s

      shape.className = "shape";
      shape.style.width = `${size}px`;
      shape.style.height = `${size}px`;
      shape.style.backgroundColor = color;
      shape.style.left = `${left}%`;
      shape.style.animationDuration = `${duration}s`;

      // randomly choose shape type
      if (Math.random() > 0.5) shape.style.borderRadius = "0%"; // square

      defBody.appendChild(shape);
    }
  }, []);

  return (
    <div className="def_body">
      <div className="app">
        <Profile />
      </div>
    </div>
  );
}

export default App;
