import React from 'react';
import PropTypes from 'prop-types';
import {
    useParams
  } from "react-router-dom";
const User = () => {
    let { id } = useParams()
    return(
        <div><h3>{id}</h3></div>
    )

}

export default User;