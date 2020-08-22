import React, { Suspense, useState, useEffect } from "react";

import { fetchList, fetchDesc } from "../fakeApi";
import { ILLEGAL_ID } from "../constant";

import List from "../components/List";
import Title from "../components/Title";

import { CubeSpinner, TraceSpinner } from "react-spinners-kit";

const resource = fetchList();

export default () => {
  const [resourceDesc, setResourceDesc] = useState({
    read() {
      return {};
    },
  });
  const [id, setId] = useState(ILLEGAL_ID);

  useEffect(() => {
    if (id !== ILLEGAL_ID) {
      setResourceDesc(fetchDesc(id));
    }
  }, [id]);

  return (
    <div className="flex-1 flex flex-direction-column">
      <div className="type-name type-name-3">fetch-as-render</div>
      <div className="flex-1 flex">
        <Suspense
          fallback={
            <div
              style={{ width: "120px", marginTop: "20px", marginLeft: "20px" }}
            >
              <CubeSpinner frontColor="#2aa198" backColor="#93a1a1" />
            </div>
          }
        >
          <DecoratedList setId={setId} />
        </Suspense>
        <div className="flex-1 overflow-y-auto">
          <Suspense
            fallback={
              <div style={{ marginTop: "20px", marginLeft: "20px" }}>
                <TraceSpinner frontColor="#2aa198" backColor="#93a1a1" />
              </div>
            }
          >
            <DecoratedTitle resource={resourceDesc} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

const DecoratedList = ({ setId }) => {
  const items = resource.read();

  return <List items={items} setId={setId} />;
};

const DecoratedTitle = ({ resource }) => {
  const desc = resource.read();

  return <Title desc={desc} />;
};
