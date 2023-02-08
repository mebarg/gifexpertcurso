import { useState } from 'react';

import  AddCategory  from './components/AddCategory';
import  GifGrid  from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState([])

    const addCategories=(value)=>{

        if (categories.find((cat)=>cat.toLowerCase()===value.toLowerCase())) return 
        setCategories([value,...categories])
  
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onAddCategories={addCategories}/>
    
            {categories.map( category =><GifGrid key={category} category={category}/>)}
            
        </>
    )
}

export default GifExpertApp