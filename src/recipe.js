import React from 'react';
import  style from './recipes.module.css'


const Recipe = (props) => {
    return (


        <div className={style.recipe}>
            <h1>{props.title}</h1>
            <p>{props.cal}</p> 
            <ol>
                {props.ingredients.map( ingredient => (
                    <li>{ingredient.text}</li>
                 ) )}
            </ol>

            <img src={props.img} alt=""/>

           
        </div>





    )





}

export default Recipe