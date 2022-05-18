import React from "react";


import styled from "styled-components";

const Img = styled.img`
    width: 100px

    `

const Soul = ({soul, onAddClick}) =>{

    const handleAddClick = () => {
        onAddClick(soul)
    }

    return(
        <>
        <ul>
            <li>{soul.name}</li>
            <li>£{soul.price}</li>
            <li><Img src={soul.image}></Img></li>
            <button value={soul} onClick={handleAddClick}>Add to basket</button>
        </ul>
        </>
    )

}
export default Soul