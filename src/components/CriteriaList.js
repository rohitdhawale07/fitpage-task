import React from "react";
import { useParams } from "react-router-dom";

function CriteriaList({ object }) {
  const { word } = useParams();
  return (
    <div className="criteria-list-container">
      {object.map(
        (item, index) =>
          item.criteria &&
          Array.isArray(item.criteria) && (
            <div key={index}>
              {item.criteria.map(
                (criterion, criterionIndex) =>
                  criterion.variable &&
                  criterion.variable["$1"] &&
                  criterion.variable["$2"] &&
                  criterion.variable["$2"].values &&
                  criterion.variable["$2"].values.length > 0 && ( // Ensure values array exists
                    // Render values dynamically from the criterion object
                    <div key={criterionIndex}>
                      <h3>{criterion.variable["$2"].values[0]}</h3>{" "}
                      {/* First value from values array */}
                      <h3>{criterion.variable["$2"].values[1]}</h3>{" "}
                      {/* Second value from values array */}
                    </div>
                  )
              )}
            </div>
          )
      )}
    </div>
  );
}

export default CriteriaList;
