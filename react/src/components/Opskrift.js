import React, { useState } from 'react';
import {
    useParams
} from "react-router-dom";
import facade from '../apiFacade';
import Loader from './Loader'
const Opskrift = () => {
    let { id } = useParams()
    const [loading, setLoading] = useState(true);
    const [opskrift, setopskrift] = useState();
    const getit = async (id) => {
        const res = await facade.getRecipe(id);
        setopskrift(res);
        setLoading(false)
    }
    getit(id);

    return (
        <div>
        {loading?(
            <Loader />
            ) : (
                
                <div>
        <h1>
            {opskrift.id}
        </h1>
        <h2>
            {opskrift.prep_time}
        </h2>
        <h3>
        {opskrift.description}
        </h3>
        <ul>
            {opskrift.preparaion_steps.map(res => (
                <li>{res}</li>
            ))}
        </ul>
        <ul>
            {opskrift.ingredients.map(res => (
                <li>{res}</li>
            ))}
        </ul></div>
        )}
        </div>
    );
}

export default Opskrift;