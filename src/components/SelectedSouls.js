import React from "react";


import styled from "styled-components";

const Img = styled.img`
    width: 90%
    `

const Basket = styled.li`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background-color: rgba(125,126,120,.5);;
    list-style: none;
    margin: 10px;
    width: 40%;
    align-items: flex-end;
    font-size: x-large;
`


const SelectedSoul = ({soul, onRemoveClick})=> {


    const handleRemoveClick = () =>{
        onRemoveClick(soul)
    }

    return(
        <>
        <Basket>
        <li>{soul.name} {soul.price} <Img src={soul.image}></Img></li>
        <li><button value={soul} onClick={handleRemoveClick}>Remove</button></li>
        </Basket>
        </>
    )

}

export default SelectedSoul