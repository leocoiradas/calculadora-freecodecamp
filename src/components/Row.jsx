import React from "react";
import '../component-styles/row.css';
import './Button'
import Button from "./Button";
function Row (value){
    return(
        <div className="row">
            <Button>{value[0]}</Button>
            <Button>{value[1]}</Button>
            <Button>{value[2]}</Button>
            <Button>{value[3]}</Button>
        </div>
        
    )
}
export default Row


