import React from "react";

function Image(props){
    return <div><img height = "700" width="900" src={props.url} alt={props.alt} /></div>;
}

export default Image;