// components/ObjectDetails.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchData from "./api";
import CriteriaList from "./CriteriaList";

const ObjectDetails = () => {
  const { id } = useParams();
  const [object, setObject] = useState(null);

  useEffect(() => {
    const fetchObjectDetails = async () => {
      const data = await fetchData();
      const selectedObject = data.find((obj) => obj.id === parseInt(id));
      setObject(selectedObject);
    };
    fetchObjectDetails();
  }, [id]);

  if (!object) {
    return <div>Loading...</div>;
  }

  return (
    <div className="object-details">
      <div className="object-details-header">
        <h3>{object.name}</h3>
        <p style={{ color: object.color }}>{object.tag}</p>
      </div>
      <CriteriaList criteria={object.criteria} />
    </div>
  );
};

export default ObjectDetails;
