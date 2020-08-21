import React from "react";
import Dependency from "./dependency";

export default ({ useDependency, type }) => {
  return useDependency ? <Dependency type={type} /> : null;
};
