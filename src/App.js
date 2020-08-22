import React, { useState, useEffect } from "react";

import "./App.css";
import "antd/dist/antd.css";

import Switch from "./Switch";
import Filter from "./components/Filter";

const CACHED_KEY = "cachedTypeArr";

const cachedTypeArr = localStorage.getItem(CACHED_KEY)?.split(",");

function App() {
  const [useDependency, setUseDependency] = useState(true);
  const [typeArr, setTypeArr] = useState(cachedTypeArr ?? ["1"]);

  useEffect(() => {
    if (typeArr.length > 0) {
      localStorage.setItem(CACHED_KEY, typeArr);
    } else {
      localStorage.removeItem(CACHED_KEY);
    }
  }, [typeArr]);

  return (
    <div className="highlight app flex flex-direction-column pl-20">
      <Switch useDependency={useDependency} typeArr={typeArr} />
      <Filter
        useDependency={useDependency}
        setUseDependency={setUseDependency}
        typeArr={typeArr}
        setTypeArr={setTypeArr}
      />
    </div>
  );
}

export default App;
