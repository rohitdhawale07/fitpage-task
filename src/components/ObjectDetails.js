// components/ObjectDetails.js
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ObjectDetails = ({ object }) => {
  const { id } = useParams();
  const stock = object.find((item) => item.id === parseInt(id));
  // console.log(stock);

  if (!stock) {
    return <div>Loading...</div>;
  }

  return (
    <div className="object-details">
      <div className="object-details-header">
        <h3>{stock.name}</h3>
        <p style={{ color: stock.color }}>{stock.tag}</p>
      </div>
      <div className="object-details-body">
        {stock.criteria.map((text, index) => (
          <div key={index}>
            {index > 0 && <span>and </span>}
            <p>
              {text.text.split("$").map((part, idx) => {
                if (idx === 0) {
                  return <React.Fragment key={idx}>{part}</React.Fragment>;
                } else {
                  const [word, rest] = part.split(" ");
                  return (
                    <React.Fragment key={idx}>
                      <Link
                        to={`/criteria/${word}`}
                        style={{ textDecoration: "underline" }}
                      >
                        ${word && `(${word})`}
                      </Link>{" "}
                      {rest && rest}
                    </React.Fragment>
                  );
                }
              })}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ObjectDetails;
