import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ObjectList = ({ object }) => {
  return (
    <ul className="object-list">
      {object.map((object) => (
        <li className="object-item" key={object.id}>
          <Link to={`/object/${object.id}`}>
            <h3>{object.name}</h3>
            <p style={{ color: object.color }}>{object.tag}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ObjectList;
