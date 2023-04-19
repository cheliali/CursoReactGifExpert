import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Hello'])

    const onAddCategory=(newCategory)=>{

        if( categories.includes(newCategory) ) return;

        //categories.push('Hola');   NO MUTAR EL ARRAY
        setCategories([newCategory, ...categories])
        //setCategories(cat=>[...cat, 'Valorant'])       
    }

    return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>
        {/* Input */}
        <AddCategory 
            onNewCategory={(value)=> onAddCategory(value)}
        />
        {/* Gif List */}
        {
            categories.map((category)=>(
                <GifGrid key={category} category={category}/>
            )  
        )
        };
    </>
  )
}
