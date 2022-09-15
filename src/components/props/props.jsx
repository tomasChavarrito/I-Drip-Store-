export const PhoneM = (props) => {
    return (
        <>
        <h2>{props.name}</h2>
        <img src={props.image} alt="" width="300px" />
       </>
    );
}

export const PhoneM2 = (props) => {
    return (
        <>
        <h2>{props.name}</h2>
        <p>Información: {props.dato} </p>
        <p>Marca: {props.marca} </p>
        <p>Price: {props.precio}</p>
        <img src={props.image} alt="" width="300px" />
       </>
    );
}