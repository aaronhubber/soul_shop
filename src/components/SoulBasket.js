import React from "react";
import SelectedSoul from "./SelectedSouls";

const SoulBasket = ({selectedSoul, onRemoveClick, total}) =>{


    const basketOfSouls = selectedSoul.map((soul) => {
        
        return <SelectedSoul soul = {soul} onRemoveClick={onRemoveClick}/>
    })

    

     //let total = this.basketOfSouls.reduce(function(prev, soul){
     //    return prev + +soul.price
     //}, 0)
//     return {total}
// }


    return (
        <>
        <h2> Your basket of Souls</h2>
        <p><b>Your Total Cost is: £{total}</b> </p>
        {basketOfSouls}

        </>
    )

}

export default SoulBasket