import React from "react";
function Head(props) {
    return (
        <div>
            <h1>BootCamp2020 : Class -{props.no}</h1>
            <h2>Description : {props.desc}</h2>
        </div>
    )
}
export default Head;
