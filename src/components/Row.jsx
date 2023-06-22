import React from "react";
import "../component-styles/row.css";
import "./Button";
import Button from "./Button";
function Row(value, {action}) {
    return (
        <div className="row">
            <Button setClick={action}>{value[0]}</Button>
            <Button setClick={action}>{value[1]}</Button>
            <Button setClick={action}>{value[2]}</Button>
            <Button setClick={action}>{value[3]}</Button>
        </div>
    );
}
export default Row;
