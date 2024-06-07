import React, { useContext, useState, useEffect } from "react";
import { ToggleTheme } from "../App";

function UseState() {
  const theme = useContext(ToggleTheme);
  const [count, setCount] = useState(0);
  const [showContent, setShowContent] = useState(false);
 
  useEffect(() => {
    if (showContent) {
      alert("Content Button is clicked");
    }
  }, [showContent]);

  const themeStyle = {
    backgroundColor: theme ? "black" : "grey",
    color: theme ? "grey" : "black",
    padding: "2rem",
    margin: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  };

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <div style={themeStyle}>
      <button style={{ margin: "1rem" }} onClick={() => setShowContent(prevShowContent => !prevShowContent)}> Content </button>
      {showContent && (
        <p>useState is a React Hook that allows functional components to manage state. useEffect is a React Hook that allows you to perform side effects in functional components. useContext is a React Hook that allows functional components to consume values from the nearest Context provider.</p>
      )}
      <div>
        <h3>{count}</h3>
        <button onClick={handleCount}>Like</button>
      </div>
    </div>
  );
}

export default UseState;
