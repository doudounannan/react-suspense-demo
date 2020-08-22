import React from "react";

import Dependency from "./dependency";

export default ({ useDependency, typeArr }) => {
  return useDependency ? <Dependency typeArr={typeArr} /> : null;
};
