import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import { useState } from "react";

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['Attack On Titan']);

    const onAddCategory = ( newCategory ) =>{
        const categoriesLowerCase = categories.map( category => category.toLowerCase());
        if( categoriesLowerCase.includes(newCategory.toLowerCase()) ) return;
        setCategories([ newCategory, ...categories]);
    };

    return (
        <>
        <h1>GifExpertApp</h1>

        <AddCategory
           onNewCategory={ onAddCategory }
        />

        {
            categories.map( category => (
                <GifGrid
                    key={ category }
                    category={ category }
                />
            ))
        }

        </>
    )
}
