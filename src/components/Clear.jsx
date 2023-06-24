import React from "react";
import '../component-styles/clear.css'
const ClearButton = (props) => (
    <div className="clear-button" onClick={props.setClear}>
        {props.children}
    </div>
)
export default ClearButton