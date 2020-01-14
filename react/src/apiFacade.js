/* eslint-disable no-throw-literal */
const URL = "https://matheradical.dk/Examen/";
//const URL = "http://localhost:8080/ca3";
function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}

class ApiFacade {
    //Insert utility-methods from a latter step (d) here
    makeOptions(method, addToken, body) {
        var opts = {
            method: method,
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        }
        if (addToken && this.loggedIn()) {
            opts.headers["x-access-token"] = this.getToken();
        }
        if (body) {
            opts.body = JSON.stringify(body);
        }
        return opts;
    }

    login = async (user, pass) => {
        const options = this.makeOptions("POST", false, { username: user, password: pass });
       // return fetch(URL + "/api/login", options)
       //     .then(handleHttpErrors) 
       //     .then(res => this.setToken(res.token))
       //     .then(res => res)
       const res = await fetch(URL+"api/login", options)
       const json = await res.json();
       if(!res.ok){
           throw {status: res.status, fullError: json}
       }
       this.setToken(res.token)
       sessionStorage.setItem("user",JSON.stringify({Username:json.username,Role:json.role}));
       return json;
    }
    
    register = async (user,pass,type) => {
        const options = this.makeOptions("POST", false, { username: user, password: pass,userRole:type });
        const res = await fetch(URL+"api/register", options)
        const json = await res.json();
        if(!res.ok){
            throw {status: res.status, fullError: json}
        }
        this.setToken(res.token)
        return json;
    }

    getFoodPlans = async () => {
        const res = await fetch(URL+"api/MealPlanner");
        const json = await res.json();
        if(!res.ok){
            throw {status: res.status, fullError: json}
        }
        return json;
    }

    getMyFoodPlans = async () => {
        let l =sessionStorage.getItem("user")
        let u = JSON.parse(l)
        var opts = { user : u.Username};
        var opt = this.makeOptions("POST",true,opts)
        const res = await fetch(URL+"api/MealPlanner/My",opt);
        const json = await res.json();
        if(!res.ok){
            throw {status: res.status, fullError: json}
        }
        return json;
    }

    getRecipe = async (id) =>{
        const res = await fetch(URL+"api/recepies/"+id);
        const json = await res.json();
        if(!res.ok){
            throw {status: res.status, fullError: json}
        }
        return json;
    }
    getAllRecipe = async (id) =>{
        const res = await fetch(URL+"api/recepies");
        const json = await res.json();
        if(!res.ok){
            throw {status: res.status, fullError: json}
        }
        return json;
    }

    newPlan = async (arr,week) =>{
        let l =sessionStorage.getItem("user")
        let u = JSON.parse(l)
        var opts = { week: week,user:u.Username ,dayPlans:arr };
        var opt = this.makeOptions("POST",true,opts);
        fetch(URL+"api/MealPlanner/New",opt)
    }
    newPlan2 = async (arr,week) =>{
        let l =sessionStorage.getItem("user")
        if(l ==null){return 0};
        let u = JSON.parse(l)
        var opts = { week: week,user:u.Username ,dayPlans:arr };
        var opt = this.makeOptions("POST",true,opts);
        fetch(URL+"api/MealPlanner/New",opt)
    }

    getShopingList = async(id) =>{
        const res = await fetch(URL+"api/MealPlanner/"+id);
        const json = await res.text();
        
        if(!res.ok){
            throw {status: res.status, fullError: json}
        }
        return json;
    }

    CheckIfUser(list){
        return fetch(URL+"api/Example/user")
                .then(function(response) {
                        return response.json();
                }).then(res=>{list.unshift(res)})
    }
    CheckIfAdmin(list){
        return fetch(URL+"api/Example/admin")
                .then(function(response) {
                        return response.json();
                }).then(res=>{list.unshift(res)})
    }

    TryGet (){
        return fetch(URL + "api/products/all").then(res=> res.json())

    }

    setToken = (token) => {
        localStorage.setItem('jwtToken', token)
    }
    getToken = () => {
        return localStorage.getItem('jwtToken')
    }
    loggedIn = () => {
        const loggedIn = this.getToken() != null;
        return loggedIn;
    }
    logout = () => {
        localStorage.removeItem("jwtToken");
        sessionStorage.clear();
    }

}
const facade = new ApiFacade();

export default facade;
