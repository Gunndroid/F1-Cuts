import React, { useRef, useEffect } from "react";
// import "./Racecar.css";

const Racecar = () => {
  const racecarRef = useRef(null);

  useEffect(() => {
    const racecar = racecarRef.current;
    racecar.animate(
      [{ transform: "translateX(100%)" }, { transform: "translateX(-100%)" }],
      {
        duration: 9000,
        iterations: Infinity,
      }
    );
  }, []);

  return (
    <div
      ref={racecarRef}
      className="relative inline-block text-5xl animate-racecar w-full"
    >
      🏎️💨
    </div>
  );
};

export default Racecar;
