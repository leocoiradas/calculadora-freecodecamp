import React from "react";
import '../component-styles/button.css'
function Button(props){
    const isAnOperator = (valor) =>{
        return isNaN(valor) && (valor !== '.') && (valor !== '=')
    }
    return(
        <div className={`button-container ${isAnOperator(props.children) ? 'operator' : '' }`.trimEnd()} onClick={()=> props.setClick(props.children)}>
            {props.children}
        </div>
    )
}
export default Button