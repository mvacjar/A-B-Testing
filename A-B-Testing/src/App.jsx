import Header from "./components/Header/Header";
import BodyA from "./components/Body/BodyA";
import BodyB from "./components/Body/BodyB";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [visible, setVisible] = useState(Math.random() < 0.5);

  useEffect(() => {
    setVisible(Math.random() < 0.5);
  }, []);

  const handleClick = () => {
    console.log({
      event: "ctaClick",
      cta: "button",
      variant: visible > 0.5 ? "versionA" : "versionB",
    });
  };

  return (
    <>
      <Header />
      {visible ? (
        <BodyA handleClick={handleClick} />
      ) : (
        <BodyB handleClick={handleClick} />
      )}
    </>
  );
}

export default App;
