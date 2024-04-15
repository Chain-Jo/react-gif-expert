import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'World of Tanks' ]);

    const onAddCategory = (newCategory) => {

        if ( !categories.findIndex(category => category.toLocaleLowerCase() === newCategory.toLocaleLowerCase()) ) {
            return;
        }
        
        setCategories([newCategory ,...categories]);

    }

    return (
        <>
        {/* título */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
            onNewCategory={ (value) => onAddCategory(value)}
        />

        {/* Listado de Gifs */} 
        { categories.map( ( category ) => (
            (
                <GifGrid 
                    key={ category } 
                    category={ category }
                />
            )
        )) }            
        {/* Gif Items */}
        </>
    )
}

const api = 'hYF97wuNazpOHBTUtXEcj5MMaLv9ijP6';
console.log(api)