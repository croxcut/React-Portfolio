import { useEffect, useState } from "react";

export function useRandomAssembleText(
  finalText: string,
  speed: number = 30
) {
  const [displayText, setDisplayText] = useState(
    " ".repeat(finalText.length)
  );

  useEffect(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let revealed = new Set<number>();

    const interval = setInterval(() => {
      // Randomly reveal new characters
      if (revealed.size < finalText.length) {
        revealed.add(Math.floor(Math.random() * finalText.length));
      }

      const nextText = finalText
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";
          if (revealed.has(index)) return char;
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      setDisplayText(nextText);

      if (revealed.size === finalText.length) {
        clearInterval(interval);
        setDisplayText(finalText);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [finalText, speed]);

  return displayText;
}
