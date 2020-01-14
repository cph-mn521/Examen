import React from 'react';
import './styles.scss';
import {NavLink } from 'react-router-dom';
import { ResultRow2 } from './ResultRow2';
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
      obj: { imgurl, plans, description, url },
    } = this.props;

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
        <button >
          Rediger
        </button>
        <div className="container-middle">
          <p className="title"></p>
          <hr className="custom-hr" />
          <p className="description">{this.state.description}</p>
        </div>

        <div className="container-right"></div>
      </div>
    );
  }
}



export default DescriptionBox;
