import React from "react";
import "./home.css"

const Saludo = (props) => {
    return (
        <div>
            <h1>Este es un saludo para {props.tutor} </h1>
        </div>
    )
}

export default Saludo;