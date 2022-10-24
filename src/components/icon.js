import React from "react";

function Icon(props) {
    return (
        <div className="Icon">
            <div className="Icon-tag">
                
                <div className="space card">
                    <img src={props.svg} alt="furniture" />
                </div>

                <div>
                    <h3>{props.name}</h3>
                    <p>{props.desc}</p>
                </div>
            </div>                
        </div>
    )
}

export default Icon;