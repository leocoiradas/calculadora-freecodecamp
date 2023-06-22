import React from "react";
import '../component-styles/clear.css'
const ClearButton = (props) => (
    <div className="clear-button">
        {props.children}
    </div>
)
export default ClearButton