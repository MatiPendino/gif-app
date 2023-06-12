import { useState } from 'react'
 
export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (event) => {
        /*console.log(event)
        console.log(event.target.value)*/
        setInputValue(event.target.value)
    }
    
    const handleSubmit = (event) => {
        // console.log(event)
        event.preventDefault()
        // console.log(inputValue)
        if (inputValue.trim().length <= 1) return;
        
        onNewCategory(inputValue.trim())
        setInputValue('')
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
            type="text"
            placeholder="Buscar gifs..." 
            value={inputValue}
            onChange={ handleInputChange }
            />
        </form>
    )
}