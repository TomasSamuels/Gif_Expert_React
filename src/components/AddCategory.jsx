import { useState } from 'react';

export const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChanged = ({ target }) =>{
        setInputValue( target.value );
    };

    const onSubmit = ( event ) => {
        event.preventDefault();
        const value = inputValue.trim();
        if( value.length <= 1 ) return;
        onNewCategory( value )
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Search gifs"
                value={ inputValue }
                onChange={ onInputChanged }
            />
        </form>
    )
}
