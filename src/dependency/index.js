import React from "react";

import { typeDependencyCpMap } from "../variable";

export default ({ typeArr }) => {
  return (
    <div className="flex-1 flex">
      {typeArr.map((type) => {
        const Cp = typeDependencyCpMap[type];

        return <Cp key={type} />;
      })}
    </div>
  );
};
