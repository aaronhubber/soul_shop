import React from "react";
import Soul from "./Soul";

const SoulList = ({souls, onAddClick}) =>{

    const soulItems = souls.map((soul) => {
        return (
            <Soul soul={soul} onAddClick={onAddClick} ></Soul>
        )
    }) 
    

    return(
        <>
        <div className="listy">
        {soulItems}

        </div>
        </>
    )

}
export default SoulList