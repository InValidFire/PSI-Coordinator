import React from "react";

function Input(props) {
    return (
        <div className="inputComponent">
            {props.label && <label>{props.label}</label>}
            <input {...props} />
        </div>
    );
}

export default Input;
