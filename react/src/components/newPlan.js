import React, { useState } from 'react';
import facade from '../apiFacade';
import Loader from './Loader'
const NewPlan = () => {
    const [user, setUser] = useState({
        week: '',
        recipe: '',
        weekday: '',
        Description: '',
    });
    const [loading, setLoading] = useState(true);
    const [opskrift, setopskrift] = useState();
    const [weekdays, setweekdays] = useState(["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag", "Søndag"]);
    const [uwd, setuwd] = useState(["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag", "Søndag"]);
    const [plan, setPlan] = useState([]);
    const [week, setWeek] = useState("")
    const onSubmit = evt => {
        evt.preventDefault();

    };

    const getAllRec = async () => {
        const all = await facade.getAllRecipe()
        setopskrift(all);
        setLoading(false);
    }

    getAllRec();
    const onChange = evt => {
        evt.persist();
        setUser(prevState => ({
            ...prevState,
            [evt.target.id]: evt.target.value,
        }));
    };

    return (
        <div>
            {loading ? (<Loader />) : (
                <div>
                    <h1>reeee</h1>
                    <form onSubmit={onSubmit} onChange={onChange}>
                        <input placeholder="Uge nummer" id="week" />
                        <input placeholder="Beskrivelse" id="Description" />
                        <select id="weekday">
                            {weekdays.map(res => (
                                <option>{res}</option>
                            ))}
                        </select>
                        <select id="recipe">
                            {opskrift.map(res => (
                                <option>{res}</option>
                            ))}
                        </select>
                        <button type="submit" className="login">
                            Tilføj Madplan
                </button>
                    </form>
                </div>)}
        </div>
    )
}

export default NewPlan; 