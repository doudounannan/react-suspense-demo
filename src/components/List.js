import React from "react";

import LazyLoad from "react-lazyload";
import { ImpulseSpinner } from "react-spinners-kit";

import "./List.css";

export default ({ items, setId }) => {
  return (
    <div className="overflow-y-auto list">
      {items.map(({ id, title, image, imDbRating }) => (
        <div key={id} className="mb-20 item" onClick={() => setId(id)}>
          <div className="image__wrapper">
            <LazyLoad
              width={120}
              height={160}
              placeholder={
                <div className="flex flex-justify-center flex-align-items-center img-spinner__wrapper">
                  <ImpulseSpinner frontColor="#2aa198" backColor="#93a1a1" />
                </div>
              }
            >
              <img src={image} alt="" className="image" />
            </LazyLoad>
          </div>
          <div className="mt-10 rating">{imDbRating}</div>
          <div className="text-overflow-ellipsis title">{title}</div>
        </div>
      ))}
    </div>
  );
};
