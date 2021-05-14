import React from "react";
function Info(props) {
    return (
        <div>
            <h1 style={{
                color: "#4a54f1", marginLeft: 700, textDecoration: "underline"
            }} >BootCamp-2020 </h1>
            <h1><p style={{ color: 'red', marginLeft: 750, textDecoration: "underline" }}>Class -{props.no}</p></h1>

            <h2 style={{ color: "#4a54f1", marginLeft: 15, textDecoration: "underline" }}>Student Information</h2>
            <h3 style={{ color: "green", marginLeft: 15, }}>Name   :{props.name} </h3>
            <h3 style={{ color: "green", marginLeft: 15 }}>Roll No:{props.roll} </h3>
            <h3 style={{ color: "green", marginLeft: 15 }}>Batch  :{props.batch} </h3>
            <h3 style={{ color: "green", marginLeft: 15 }}>City   :{props.city} </h3>
            <h3 style={{ color: "green", marginLeft: 15 }}>Gender :{props.gender} </h3>
            <h3 style={{ color: "green", marginLeft: 15 }}>Email  :{props.email} </h3>
            <h3 style={{ color: "green", marginLeft: 15 }}>Batch  :{props.batch} </h3>
            <h3 style={{ color: "green", marginLeft: 15 }}>Online Teachers  :{props.tech} </h3>
        </div>
    )
}
export default Info;