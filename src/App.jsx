import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.location.href = "/vyro.html";
  }, []);

  return null;
}

export default App;