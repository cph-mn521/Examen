import React from 'react';

import { ResultRow } from './ResultRow';
import './styles.scss';

/*
A component that creates a table with 3 rows, the table is initialised with the header names, and a list of data to be displayed.
To use with different data, change the TH to fit the data and create adjust the ResultRow component acordingly.
*/

export const ResultTable = ({ reslist }) => (
  <table className="ResultTable">
    <thead>
      <tr>
        <th width="30%">Plan for uge</th>
        <th width="11%">Lavet af</th>
        <th width="12%">Dage dækket </th>
      </tr>
    </thead>
    <tbody>
      {reslist.map((res, index) => {
        return <ResultRow key={`ResultRow-${index}`} index={index} obj={res} />;
      })}
    </tbody>
  </table>
);
