import React from "react";
import { Radio, Tooltip } from "antd";
import classnames from "classnames";

export default ({ useDependency, setUseDependency, type, setType }) => {
  const toggle = (index) => {
    if (type.includes(index)) {
      const clonedType = [...type];

      clonedType.splice(
        clonedType.findIndex((a) => a === index),
        1
      );

      setType(clonedType);

      return;
    }

    setType([...type, index]);
  };

  return (
    <div className="flex flex-justify-space-between mb-20 ml-20 mr-10">
      <div className="">
        <Radio.Group
          value={useDependency}
          onChange={(value) => setUseDependency(value)}
        >
          <Radio.Button value={true}>有数据依赖</Radio.Button>
          <Radio.Button value={false}>无数据依赖</Radio.Button>
        </Radio.Group>
      </div>

      <div className="flex type-group">
        <Tooltip title="fetch-on-render">
          <div
            className={classnames("type", "type-1", {
              "type-1--active": type.includes(1),
            })}
            onClick={() => toggle(1)}
          />
        </Tooltip>

        <Tooltip title="fetch-then-render">
          <div
            className={classnames("type", "type-2", {
              "type-2--active": type.includes(2),
            })}
            onClick={() => toggle(2)}
          />
        </Tooltip>

        <Tooltip title="fetch-as-render">
          <div
            className={classnames("type", "type-3", {
              "type-3--active": type.includes(3),
            })}
            onClick={() => toggle(3)}
          />
        </Tooltip>
      </div>
    </div>
  );
};
