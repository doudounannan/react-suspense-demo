import React, { useEffect, useState } from "react";

import { fetchApi } from "../utils";
import { ILLEGAL_ID } from "../constant";

import List from "../components/List";
import Title from "../components/Title";

const data = fetchApi(`/list?type=2`);

export default () => {
  const [items, setItems] = useState([]);
  const [id, setId] = useState(ILLEGAL_ID);
  const [desc, setDesc] = useState({});

  useEffect(() => {
    data.then((data) => {
      setItems(data);
    });
  }, []);

  useEffect(() => {
    if (id !== ILLEGAL_ID) {
      fetchApi(`/desc/${id}?type=2`).then((data) => setDesc(data));
    }
  }, [id]);

  return (
    <div className="flex-1 flex flex-direction-column">
      <div className="type-name type-name-2">fetch-then-render</div>
      <div className="flex-1 flex">
        <List items={items} setId={setId} />
        <div className="flex-1 overflow-y-auto">
          <Title desc={desc} />
        </div>
      </div>
    </div>
  );
};
