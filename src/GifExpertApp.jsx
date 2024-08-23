import React, { useState } from 'react'

import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [ categories, setcategories] = useState([ 'Luffy gear 4']);

  const onAddCategory = (newCategory) => {
    if( categories.includes(newCategory)) return;
    setcategories([newCategory,...categories]);
  }

  return (
    <>
        <h1>
            GifExpertApp
        </h1>
          <AddCategory 
              //setcategories={ setcategories } 
              onNewCategory={ onAddCategory }
          />
          {
            categories.map( category => (
              <GifGrid
                key={ category }
                category={ category }
              />
              )
            )
          }
    </>
  )
}
