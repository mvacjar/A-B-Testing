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

  return (
    <>
      <Header />
      {visible ? <BodyA /> : <BodyB />}
    </>
  );
}

export default App;
