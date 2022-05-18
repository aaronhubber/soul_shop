import React from "react";
import Soul from "./Soul";

const SoulList = ({souls, onAddClick}) =>{

    const soulItems = souls.map((soul) => {
        return (
            <Soul soul={soul} onAddClick={onAddClick}></Soul>
        )
    })


    
    // const totalprice = ({soul})
    //     soul = soul.price
    //     total = 0
    //     for s of soul
    //     total +=soul
    //     return total

          
    

    return(
        <>
        {soulItems}
        <p>Your Total Cost is {totalprice}</p>
        </>
    )

}
export default SoulList