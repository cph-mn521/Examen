import React, { useState } from 'react';
import DescriptionBox from './DescriptionBox';

export const ResultRow = ({ obj, index }) => {
  const [isExpanded, setExpanded] = useState(false);

  const { week, owner, plans, location, lastupdate, productId } = obj;

  return (
    <>
      <tr
        key={productId}
        onClick={() => setExpanded(isExpanded => !isExpanded)}
        className="ResultRow__normalRow"
      >
        <td className="title">{week}</td>
        <td className="price">{owner}</td>
        <td className="origin">{plans.length}</td>

      </tr>
      {/* {isExpanded && ( */}
      <tr className={`ResultRow__expandedRow${isExpanded ? '' : 'hide'}`}>
        <td colSpan="6">
          <DescriptionBox obj={obj} />
        </td>
      </tr>
      {/* )} */}
    </>
  );
};
