import React, {useState} from 'react'
import useToggle from '../hooks/useToggle'

// const ToggleComponent = () => {
//     const [coffeePower, setCoffeePower] = useState(false)

//     const drinkCoffee = () =>{
//         setCoffeePower(coffee => !coffeePower)
//     }

//     return (
//         <div>
//             <h1>Did you have your coffee this morning?</h1>
//             <div>{coffeePower ? '🤪' : '☕️'}</div>
//             {!coffeePower && <button onClick={drinkCoffee}>Yes</button>}
//             {coffeePower && <h1>Alright, that's good. Hopefully you get super powers.</h1>}
//         </div>
//     )
// }

// export default ToggleComponent

const ToggleComponent = () => {
    //our custom hook in use. True/False
    const [coffeePower, setCoffeePower] = useToggle()

    return (
        //ternary to identify what to toggle between true and false
        <div>
            <h1>Did you have your coffee this morning?</h1>
            <div>{coffeePower ? '🤪' : '☕️'}</div>
            {!coffeePower && <button onClick={setCoffeePower}>Yes</button>}
            {coffeePower && <h1>Alright, that's good. Hopefully you get super powers.</h1>}
        </div>
    )
}

export default ToggleComponent