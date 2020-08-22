import React from "react";
import { Radio, Tooltip } from "antd";
import classnames from "classnames";

export default ({ useDependency, setUseDependency, typeArr, setTypeArr }) => {
  const toggle = (index) => {
    if (typeArr.includes(index)) {
      const clonedType = [...typeArr];

      clonedType.splice(
        clonedType.findIndex((a) => a === index),
        1
      );

      setTypeArr(clonedType);

      return;
    }

    setTypeArr([...typeArr, index]);
  };

  return (
    <div className="flex flex-justify-space-between mt-20 mb-20 mr-10">
      <Radio.Group
        value={useDependency}
        onChange={(e) => setUseDependency(e.target.value)}
        className="flex flex-align-items-center"
      >
        <Radio value={true} className="gd">
          有数据依赖
        </Radio>
        <Radio value={false} className="gd">
          无数据依赖
        </Radio>
      </Radio.Group>

      <div className="flex type-group">
        <Tooltip title="fetch-on-render">
          <div
            className={classnames("type", "type-1", {
              "type-1--active": typeArr.includes("1"),
            })}
            onClick={() => toggle("1")}
          />
        </Tooltip>

        <Tooltip title="fetch-then-render">
          <div
            className={classnames("type", "type-2", {
              "type-2--active": typeArr.includes("2"),
            })}
            onClick={() => toggle("2")}
          />
        </Tooltip>

        <Tooltip title="fetch-as-render">
          <div
            className={classnames("type", "type-3", {
              "type-3--active": typeArr.includes("3"),
            })}
            onClick={() => toggle("3")}
          />
        </Tooltip>
      </div>
    </div>
  );
};
