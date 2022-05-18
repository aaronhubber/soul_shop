import React from "react";
import SelectedSoul from "./SelectedSouls";

const SoulBasket = ({selectedSoul}) =>{
    
    const basketOfSouls = selectedSoul.map((soul) => {
        return <SelectedSoul soul = {soul}/>
    })

    return (
        <>
        <h2> Your basket of Souls</h2>
        {basketOfSouls}
        </>
    )

}

export default SoulBasket