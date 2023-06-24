import React from "react";
import "../component-styles/row.css";
import "./Button";
import Button from "./Button";
function Row(arr, action, calculate) {
    const arrButtons = [];
    const createButtons = (arr, {action}, {calculate}) => {
        for (let i = 0; i < arr.length; i++) {
            const arrValues=[]
            for(let j=0; j<arr[i].length; j++){
                if(arr[i][j]== '='){
                    arrValues.push(<Button setClick={calculate}>{arr[i][j]}</Button>)
                }else{
                    arrValues.push(<Button setClick={action}>{arr[i][j]}</Button>)
                }
            }
            arrButtons.push(
                    <div className="row">
                        {arrValues}
                    </div>)
        }
        return arrButtons;
    };
    return (
        <div>
            {createButtons(arr, {action}, {calculate})}
        </div>
    );
}
export default Row;
