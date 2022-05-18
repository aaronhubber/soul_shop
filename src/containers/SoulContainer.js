import React,{useState,useEffect} from "react";
import SoulList from "../components/SoulList";
import SoulBasket from "../components/SoulBasket";


const SoulContainer =() =>{
    const [selectedSoul, setSelectedSoul]=useState([])
    const [total,setTotal] = useState(0)
    // useEffect (()=>{
    //     setTotal(10)
    //     console.log("banana",total)
    // },[total])
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
        const tempTotal = total + addedSoul.price
        setTotal(tempTotal)
        const copyList = [... selectedSoul] 

        const isOnList = copyList.some((soul) => {
            return soul.id === addedSoul.id
        })

        if (!isOnList) {
            copyList.push(addedSoul)

        }
        console.log("Total",total)
        setSelectedSoul(copyList)
    }

    const onRemoveClick = (removedSoul) => {
        const tempTotal = total - removedSoul.price
        setTotal(tempTotal)
        const copybasket = [... selectedSoul]

        const isInBasket = copybasket.some((soul) => {
            return soul.id === removedSoul.id
        })

        if (isInBasket) {
            copybasket.shift(removedSoul)
        }

        setSelectedSoul(copybasket)
    }

    // const totalCost = (()=>{
        
    // })
    // total = 0
    // for (soul in selectedSoul)
    // total += soul
    // return total

    // const totalCost = ((Sou)=>{
    //     let total = 0
    //     for (s in souls)
    //     total += soul.price
    //     return total
    // })


        


        return(
            <>
            <body>
            <h1>Souls for Sale</h1>
            <div className="container">
            <SoulList souls={souls} onAddClick={onAddClick} />
            <SoulBasket className="basket" selectedSoul={selectedSoul} onRemoveClick={onRemoveClick} total={total}>Basket</SoulBasket>
            </div>
            </body>

            </>
        )

}

export default SoulContainer