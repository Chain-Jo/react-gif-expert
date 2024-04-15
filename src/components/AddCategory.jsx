import { useState } from "react"


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => {
        // console.log(event.target.value)
        setInputValue(event.target.value)

    }

    const onSubmit = ( event ) => {
        // console.log(event)
        event.preventDefault();
        const newValue =  inputValue.trim();

        if ( newValue.length <= 1 ) return;
        

        // console.log(inputValue);
        // setCategories(.... inputValue) Tarea
        // setCategories( (categories) => [ inputValue, ...categories ]);
        onNewCategory(newValue)
        setInputValue('');
    }

    return (
        // <form action="" onSubmit={ (event) => onSubmit(event)}>
        <form action="" onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="Buscar GIFs"
                value={inputValue}
                onChange={ onInputChange }
                // onChange={ (event) => onInputChange(event) }
            />
        </form>
  )
}
