import {useState} from 'react'

    //custom hook for toggling an element/component
    //sets state to

const useToggle = (toggler = false) => {
    const [toggle, setToggle] = useState(toggler)
    const toggleSet = () => {
    setToggle(toggle => !toggle)
    }
    //return original state and it's function changed state by destructuring
    return [toggle, toggleSet]
}

export default useToggle