import React from "react";
import Soul from "./Soul";

import styled from "styled-components";

const Img = styled.img`
    width: 100px

    `


const SelectedSoul = ({soul})=> {

    return(
        <>
        <div>{soul.name} {soul.price} <Img src={soul.image}></Img></div>
        </>
    )

}

export default SelectedSoul