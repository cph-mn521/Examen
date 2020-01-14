import React, { useState } from 'react';
import DescriptionBox from './DescriptionBox';

export const ResultRow2 = ({ id , prep_time ,index}) => {

  return (
    <>
      <tr
        key={index}
        className="ResultRow__normalRow"
      >
        <td className="title">{prep_time}</td>
        <td className="price">{id}</td>
      </tr>

    </>
  );
};
