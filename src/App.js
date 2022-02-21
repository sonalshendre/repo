import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import RenderProductData from "./renderProductData";
import './styles.css'
function App() {
const [productData,setproductData]= useState(null);

  useEffect(()=> {
    axios
    .get("https://api.dotshowroom.in/api/dotk/catalog/getItemsBasicDetailsByStoreId/2490120?category_type=0")
    .then((data) => {  
      setproductData(data.data)
    } );

  //fetch("https://api.dotshowroom.in/api/dotk/catalog/getItemsBasicDetailsByStoreId/2490120?category_type=0")
   // .then((data) => {
    //     return data.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   });
},[]);
 
  
 

  return (
    <div className="App">
      <h1 className="decH" >Ecommerce application</h1>
     {productData && <RenderProductData data={productData.store_items}/>} 
    </div>
  );
}

export default App;
