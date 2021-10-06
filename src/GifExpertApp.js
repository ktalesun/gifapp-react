import React, {useState} from 'react';
import {AddCategory} from "./components/AddCategory";
import {GifGrid} from "./components/GifGrid";

const GifExpertApp = (props) => {

   const [categories, setCategories] = useState(['One Punch']);

/*
   const handledAdd = ()=>{
      /!* setCategories([...categories, 'Hunter x Hunter']);*!/
       setCategories(cats => [...cats, 'Hunter x Hunter']);
   }
*/

    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            <ul>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}  />
                    ))
                }
            </ul>
        </>
    );
};

export default GifExpertApp;
