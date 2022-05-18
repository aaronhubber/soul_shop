import React,{useState} from "react";
import SoulList from "../components/SoulList";
import SoulBasket from "../components/SoulBasket";


const SoulContainer =() =>{
    const [selectedSoul, setSelectedSoul]=useState([])
    const [souls, setSouls] = useState (

        [
            {
                id:1,
                name: "Elon Musk",
                image: "/assets/musk.jpg",
                price: 0.79
            },
            {
                id: 2,
                name: "Gary Neville",
                image: "/assets/neville.jpg",
                price: 1.19
            },
            {
                id: 3,
                name: "Donald Trump",
                image: "/assets/trump.jpg",
                price: 0.01
                
            },
            {
                id: 4,
                name: "Amy Schumer",
                image: "/assets/schumer.jpeg",
                price: 0.49
            },
            {
                id: 5,
                name: "Nadine Dorries",
                image: "/assets/dorries.jpg",
                price: 0.99
            },
        ]
    )
    const onAddClick = (addedSoul) => {

        const copyList = [... selectedSoul]

        const isOnList = copyList.some((soul) => {
            return soul.id === addedSoul.id
        })

        if (!isOnList) {
            copyList.push(addedSoul)
        }

        setSelectedSoul(copyList)

     }

        


        return(
            <>
            <h1>Souls for Sale</h1>
            <SoulList souls={souls} onAddClick={onAddClick}/>
            <SoulBasket selectedSoul={selectedSoul}>Basket</SoulBasket>
            </>
        )

}

export default SoulContainer