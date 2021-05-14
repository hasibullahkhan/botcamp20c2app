import React from "react";
function Head(props) {
    return (
        <div>
            <h2 style={{ color: "#4a54f1", marginLeft: 15, textDecoration: "underline" }}>Objective </h2>
            <p style={{ color: 'green', fontSize: 18, fontWeight: 'bold', marginLeft: 15 }}>{props.objective}</p>
            <h2 style={{ color: "#4a54f1", marginLeft: 15, textDecoration: "underline" }}>Description </h2>
            <p style={{ color: 'green', fontSize: 18, fontWeight: 'bold', marginLeft: 15 }}>{props.desc}</p>
            <p style={{ color: 'green', fontSize: 18, fontWeight: 'bold', marginLeft: 15 }}>{props.desc2}</p>
            <p style={{ color: 'green', fontSize: 18, fontWeight: 'bold', marginLeft: 15 }}>{props.desc3}</p>
            <h2 style={{ color: "#4a54f1", marginLeft: 15, textDecoration: "underline" }}>Install Reacts </h2>
            <p style={{ color: 'green', fontSize: 18, fontWeight: 'bold', marginLeft: 15 }}>{props.installq}</p>
            <p style={{ color: 'green', fontSize: 18, fontWeight: 'bold', marginLeft: 15 }}>{props.installa}</p>
            <h2 style={{ color: "#4a54f1", marginLeft: 15, textDecoration: "underline" }}>Project deploy on surge </h2>
            <p style={{ color: 'green', fontSize: 18, fontWeight: 'bold', marginLeft: 15 }}>{props.deploy}</p>
            <p style={{ color: 'green', fontSize: 18, fontWeight: 'bold', marginLeft: 15 }}>{props.deploy1}</p>
            <h2 style={{ color: "#4a54f1", marginLeft: 15, textDecoration: "underline" }}>Create token secrete on GetHub  </h2>
            <p style={{ color: 'green', fontSize: 18, fontWeight: 'bold', marginLeft: 15 }}>

                <ol>
                    <li>Setting</li>
                    <li>Secrets</li>
                    <li>New Repositry Secret: Name of secret and value of secret </li>
                </ol>
            </p>
        </div>
    )
}
export default Head;
