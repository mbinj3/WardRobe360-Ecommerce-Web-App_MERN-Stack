import React from 'react';
import CategoriesNames from '../components/CategoriesNames';
import ShowcaseSlider from '../components/ShowcaseSlider';
import CategoriesBox from '../components/CategoriesBox';
import ProductCards from '../components/ProductCards';


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