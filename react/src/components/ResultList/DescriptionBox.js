import React from 'react';
import './styles.scss';
import {NavLink } from 'react-router-dom';
import { ResultRow2 } from './ResultRow2';
import facade from '../../apiFacade';
/*
Dev notes on DBA
på DBA kan der findes den box der hedder vip-aditional text som indeholder product beskrivelsen
vip-qna er info om varens stand.
vip-matrix indeholder metadata om produktet. TAGS ex.
vip-picure-galery har en masse billeder
*/

/*
Box with descrptive text and an image.
Needs to be initialised with: 
-src
the images src.
-title
whatever title is needed for the component to make sence.
-description
description for the picture or component.
*/

class DescriptionBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      ingredients: '',
    };
  }

  
  render() {
    const {
      obj: { week, plans, description, url },
    } = this.props;

    const AddToMine = async () =>{
      
      var wkd = ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag", "Søndag"]
      var arr = [];
      var arr =[{weekday:wkd[0] ,recipe:plans[0].recipe.id}]
      for(let i = 0; 1 < plans.length; i++){
        try{
        console.log(i);
          arr.push({weekday:wkd[i], recipe: plans[i].recipe.id})         
        }
        catch(error){
          break;
        }
       }
       facade.newPlan2(arr,week);
    }
  
    return (
      <div className="DescriptionBox">
        <table>
          <thead>
            <tr>
              <th width="10%">Ugedag</th>
              <th width="15%">Opskrift</th>
              <th width="15%">Prep time</th>
              <th width="40%">Beskrivelse</th>
              <th width="10%">link</th>
            </tr>
          </thead>
          <tbody>
            {plans.map((res, index) => (
              (
                <tr
                  key={index}
                  className="ResultRow__normalRow"
                >
                  <td className="price">{res.id}</td>
                  <td className="price">{res.recipe.id}</td>
                  <td className="title">{res.recipe.prep_time}</td>
                  <td className="title">{res.recipe.description}</td>

                  <td><NavLink className="link" to={"/recepie/"+res.recipe.id} exact>
                    <span>mere info</span>
                  </NavLink></td>
                </tr>)
            )
            )
            }
          </tbody>
        </table>
        
        <div className="container-middle">
          <p className="title"></p>
          <hr className="custom-hr" />
          <p className="description">{this.state.description}</p>
        </div>

        <div className="container-right"></div>
        <button onClick={AddToMine}>
          Tilføj Til mine planer
        </button>
      </div>
    );
  }
}



export default DescriptionBox;
