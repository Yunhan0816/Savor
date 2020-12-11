import React from "react"

const Recipe = (props) =>{
    const {recipe, index} = props;
    return (
        <div>
            <div className="recipe">
                Recipe {index+1}
                <div className="recipe-content">
                    {recipe.recipeName}
                    <br />
                    {recipe.dietaryRes}
                    <br />
                    {recipe.ingredients}

                </div>



            </div>
        </div>
    )
}
export default Recipe