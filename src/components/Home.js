import React from 'react';
import CategoriesNames from './CategoriesNames';
import ShowcaseSlider from './ShowcaseSlider';
import CategoriesBox from './CategoriesBox';
import ProductCards from './ProductCards';


function Home() {
 
  return (
    <div>
        <CategoriesNames />
        <ShowcaseSlider />
        <CategoriesBox />
        <ProductCards />
    </div>
  )
}

export default Home