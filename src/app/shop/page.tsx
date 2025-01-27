"use client";





import { useEffect, useState } from "react";

function page() {
    const [isData,setIsData] = useState([]);
   useEffect(()=>{
  async function getData(){
    let responce =await fetch("../../api/products");
    let data =await responce.json();
    console.log(data);
    setIsData(data);

   }
   getData();
   },[])
    
  return (
    <div>{isData.map((item:any)=>(
        <div key={item.Id}>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <img src={item.image} alt={item.name} />
        </div>
    ))}</div>
  )
}

export default page;