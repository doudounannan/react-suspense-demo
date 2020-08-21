import React, { useState } from "react";
import "./App.css";
import "antd/dist/antd.css";
import Switch from "./Switch";

import Filter from "./components/Filter";

function App() {
  const [useDependency, setUseDependency] = useState(true);
  const [type, setType] = useState([1]);

  console.log("debug-type", type);

  return (
    <div className="highlight app flex flex-direction-column">
      <Switch useDependency={useDependency} />
      <Filter
        useDependency={useDependency}
        setUseDependency={setUseDependency}
        type={type}
        setType={setType}
      />
    </div>
  );
}

export default App;
