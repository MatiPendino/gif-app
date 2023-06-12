import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifApp = () => {
    const [categories, setCategories] = useState(['One Punch'])

    const handleAddCategory = (newCategory) => {
        // console.log(newCategory)
        if (categories.includes(newCategory)){
            console.log('Salamín')
        } else {
            /* El set del useState de una lista siempre va a recibir implícitamente los valores
            anteriores */
            setCategories(esto => [...esto, newCategory])
        }
        
    }

    return (
        <>
            <h1>GifApp</h1>

            <AddCategory 
            // setCategories={setCategories} 
                onNewCategory={(value) => handleAddCategory(value)}
            />

            {/* <button onClick={ handleAddCategory }>Agregar</button> */ }
            { 
                categories.map((category) => (
                    <GifGrid key={category} category={category} />
                )) 
            }
        </>
        
    )
}