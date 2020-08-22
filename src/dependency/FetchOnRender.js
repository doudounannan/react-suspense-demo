import React, { useEffect, useState } from "react";
import { GuardSpinner } from "react-spinners-kit";

import { fetchApi } from "../utils";
import { ILLEGAL_ID } from "../constant";

import List from "../components/List";
import Title from "../components/Title";

export default () => {
  const [items, setItems] = useState([]);
  const [id, setId] = useState(ILLEGAL_ID);
  const [desc, setDesc] = useState({});
  const [loadingList, setLoadingList] = useState(false);

  useEffect(() => {
    setLoadingList(true);

    fetchApi(`/list?type=1`).then((data) => {
      setItems(data);
      setLoadingList(false);
    });
  }, []);

  useEffect(() => {
    if (id !== ILLEGAL_ID) {
      fetchApi(`/desc/${id}?type=1`).then((data) => setDesc(data));
    }
  }, [id]);

  return (
    <div className="flex-1 flex flex-direction-column">
      <div className="type-name type-name-1">fetch-on-render</div>
      <div className="flex-1 flex">
        {loadingList ? (
          <div style={{ width: "120px" }}>
            <GuardSpinner frontColor="#2aa198" backColor="#93a1a1" />
          </div>
        ) : (
          <List items={items} setId={setId} />
        )}

        <div className="flex-1 overflow-y-auto">
          <Title desc={desc} />
        </div>
      </div>
    </div>
  );
};
