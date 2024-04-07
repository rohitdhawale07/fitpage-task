import React from "react";

const CriteriaList = ({ criteria }) => {
  const renderCriteriaTexts = (criteria) => {
    const criteriaTexts = criteria.map((item) => item.text);

    if (criteriaTexts.length === 0) {
      return null;
    }

    const renderedTexts = criteriaTexts.map((text, index) => (
      <React.Fragment key={index}>
        <p>{text}</p>
        {/* Render "and" after each text except the last one */}
        {index < criteriaTexts.length - 1 && <p>and</p>}
      </React.Fragment>
    ));

    return <div className="object-details-body">{renderedTexts}</div>;
  };

  return renderCriteriaTexts(criteria);
};

export default CriteriaList;
