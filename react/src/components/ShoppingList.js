import React, { useState } from 'react';
import {
    useParams
} from "react-router-dom";
import facade from '../apiFacade';
import Loader from './Loader'
const ShoppingList = () => {
    let { id } = useParams()
    const [list, setList] = useState();
    const [loading, setLoading] = useState(true);
    const getbyid = async (id) => {
        const res = await facade.getShopingList(id);
        setList(res.split(","));
        setLoading(false);
    }
    getbyid(id);
    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th width="30%">InkøbsList</th>
                                </tr>
                            </thead>
                            <tbody>
                                {list.map((res, index) => (
                                    <tr
                                        key={index}
                                        className="ResultRow__normalRow"
                                    >
                                        <td className="title">{res}</td>
                                    </tr>
                                ))}


                            </tbody>
                        </table>
                    </div>
                )}
        </div>
    )

}

export default ShoppingList;