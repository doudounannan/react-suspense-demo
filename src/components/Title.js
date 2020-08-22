import React from "react";
import { Divider } from "antd";

import "./Title.css";

export default ({ desc: { id, fullTitle, year, plot, awards } = {} }) => {
  return (
    <div className="ml-20 mr-10">
      {id ? (
        <>
          <div className="full-title">{fullTitle}</div>
          <div className="plot">{plot}</div>

          <Divider style={{ borderTop: "1px solid #93a1a1" }} />

          <div className="year">
            <label className="label">year: </label>
            {year}
          </div>
          <div className="awards">
            <label className="label">awards: </label>
            {awards}
          </div>
        </>
      ) : (
        <div>暂无内容</div>
      )}
    </div>
  );
};
