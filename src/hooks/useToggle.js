import {useState} from 'react'

    //custom hook for toggling an element/component
    //sets state to

const useToggle = (toggler = false) => {
    const [toggle, setToggle] = useState(toggler)
    const toggleSet = () => {
    setToggle(toggle => !toggle)
    }
    return [toggle, toggleSet]
}

export default useToggle