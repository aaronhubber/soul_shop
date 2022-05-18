import React from "react";


import styled from "styled-components";

const Img = styled.img`
    width: 90%
    `
const List = styled.li`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: rgba(125,126,120,.5);;
    list-style: none;
    margin: 10px;
    width: 40%;
    align-items: center;
    font-size: x-large;
    

`

const Soul = ({soul, onAddClick}) =>{

    const handleAddClick = () => {
        onAddClick(soul)
    }

    

    return(
        <>
        <List>
            <li>{soul.name}</li>
            <li>£{soul.price}</li>
            <li><Img src={soul.image}></Img></li>
            <button value={soul} onClick={handleAddClick}>Add to basket</button>
        </List>
        </>
    )

}
export default Soul