function About(props) {
    return (
        <div>
            <h3 style={{ color: "Black" }}>Student Info </h3>
            <h3 style={{ color: "green" }}>Name   :{props.name} </h3>
            <h3 style={{ color: "green" }}>Roll No:{props.roll} </h3>
            <h3 style={{ color: "green" }}>Batch  :{props.batch} </h3>
            <h3 style={{ color: "green" }}>City   :{props.city} </h3>
            <h3 style={{ color: "green" }}>Gender :{props.gender} </h3>
            <h3 style={{ color: "green" }}>Email  :{props.email} </h3>
            <h3 style={{ color: "green" }}>Batch  :{props.batch} </h3>
        </div>
    )
}
export default About;