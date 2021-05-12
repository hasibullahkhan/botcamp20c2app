import React from "react";
function Head(props) {
    return (
        <div>
            <h1 style={{
                color: "#4a54f1", marginLeft: 700, textDecoration: "underline"
            }} >BootCamp-2020 </h1>
            <h1><p style={{ color: 'red', marginLeft: 750, textDecoration: "underline" }}>Class -{props.no}</p></h1>
            <h2 style={{ color: "#4a54f1", marginLeft: 15, textDecoration: "underline" }}>Objective </h2>
            <p style={{ color: 'green', fontSize: 18, fontWeight: 'bold', marginLeft: 15 }}>{props.objective}</p>
            <h2 style={{ color: "#4a54f1", marginLeft: 15, textDecoration: "underline" }}>Description </h2>
            <p style={{ color: 'green', fontSize: 18, fontWeight: 'bold', marginLeft: 15 }}>{props.desc}</p>
            <p style={{ color: 'green', fontSize: 18, fontWeight: 'bold', marginLeft: 15 }}>{props.desc2}</p>

        </div>
    )
}
export default Head;
