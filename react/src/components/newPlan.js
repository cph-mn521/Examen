import React, { useState } from 'react';
import facade from '../apiFacade';
import Loader from './Loader'
import { NavLink } from 'react-router-dom';
const NewPlan = () => {
    const [user, setUser] = useState({
        week: '',
        recipe: 'Slow cooker spicy chicken and bean soup',
        weekday: 'Mandag',
        Description: '',
    });
    const [loading, setLoading] = useState(true);
    const [opskrift, setopskrift] = useState();
    const [chosen, setChosen] = useState("");
    const [show, setShow] = useState(false);
    const [weekdays, setweekdays] = useState(["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag", "Søndag"]);
    const [uwd, setuwd] = useState(["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag", "Søndag"]);
    const [plan, setPlan] = useState([]);
    const [pland, setPland] = useState([]);
    const [week, setWeek] = useState("")
    const onSubmit = evt => {
        if (weekdays.length >= 1) {
            evt.preventDefault();
            plan.push(user.recipe);
            pland.push(user.weekday)
            for (var i = 0; i < weekdays.length; i++) {
                if (weekdays[i] == user.weekday) {
                    weekdays.splice(i, 1);
                }
            }
            user.weekday = weekdays[0];
        }
    };

    const getAllRec = async () => {
        const all = await facade.getAllRecipe()
        setopskrift(all);
        setLoading(false);
    }
    const newCHOSEN = async () => {
        setShow(false)
        const res = await facade.getRecipe(user.recipe)
        if (user.recipe != "") {
            await setChosen(res);
        }
        if (chosen != null) {
            setShow(true)
        }

    }

    getAllRec();
    const onChange = async evt => {
        evt.persist();
        setUser(prevState => ({
            ...prevState,
            [evt.target.id]: evt.target.value,
        }));
        newCHOSEN();
    };

    const registerNew = async () =>{
        var arr =[{weekday:pland[0],recipe:plan[0]}]
        for(let i = 1; i < pland.length; i++){
            arr.push({weekday:pland[i],recipe:plan[i]})         
         }
        facade.newPlan(arr,user.week);
    }

    return (
        <div>
            {loading ? (<Loader />) : (
                <div>
                    <h1>Lav en ny Madplan</h1>
                    <button className="register" onClick={registerNew}>
                        Opret Madlplan
                    </button>
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
                        <button type="submit" className="register">
                            Tilføj Madplan
                        </button>
                    </form>
                    {plan.map((res, index) => (
                        <div>
                            <h3>{pland[index]}</h3>
                            <form >
                                <select id="recipe">
                                    {opskrift.map(res => (
                                        (plan[index] == res) ? (<option selected>{res}</option>) : (<option>{res}</option>)
                                    ))}
                                </select>
                            </form>
                        </div>
                    ))}
                    {show ? (
                        <div>
                            <h1>
                                {chosen.id}
                            </h1>
                            <h2>
                                {chosen.prep_time}
                            </h2>
                            <h3>
                                {chosen.description}
                            </h3>
                            <NavLink className="link" to={"/recepie/" + chosen.id} exact>
                                <span>mere info</span>
                            </NavLink>
                        </div>) : (
                            <div></div>)}

                </div>)}
        </div>
    )
}

export default NewPlan; 