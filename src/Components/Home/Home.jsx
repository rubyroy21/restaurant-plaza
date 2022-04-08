//import React from 'react'
import axios from 'axios';
import "./home.css"
import React, { useEffect, useState } from 'react'
import SortAndFilterButtons from '../SortAndFilterButtons/SortAndFilterButtons';
import CafeCard from '../royCafe/royCafe';

const Home=()=> {
    const [data,setData] = useState([]); 
    const getData = () => {
        axios.get('http://localhost:8088/getrestaurants').then((response)=>{
            setData(response.data);
        }).catch((err)=>{
            console.log(err);
        })
    }   
    const [ change,setChange] = useState(false);
    useEffect(()=>{
        getData();
    }, [])
    const handleSort = (sort, value) =>{
        if(sort === 'asc' && value==='title'){
          data.sort((a,b)=> {
            if(a.title>b.title){
              return 1;
            } else {
              return -1;
            }
          })
          setChange(!change)
        }
        if(sort === 'desc' && value==='title'){
          data.sort((a,b)=> {
            if(a.title<b.title){
              return 1;
            } else {
              return -1;
            }
          })
          setChange(!change)
    
        }
        if(sort === 'asc' && value==='price'){
          data.sort((a,b)=> a.price-b.price)
          setChange(!change)
        }
        if(sort === 'desc' && value==='price'){
          data.sort((a,b)=> b.price-a.price)
          setChange(!change)
    
        }
        if(sort === 'asc' && value==='reviews'){
            data.sort((a,b)=> {
              if(a.title>b.title){
                return 1;
              } else {
                return -1;
              }
            })
            setChange(!change)
          }
      }
      useEffect(()=>{}, [change])
  return (
    <div className='cont1'>
        <h2 style={{textAlign:"center"}}>Home</h2>
        <SortAndFilterButtons handleSort={handleSort} />
        <div className='mainContainer'>
        {data.map(({title,imageUrl,price,reviews,categories,id})=>{
                return <CafeCard key={id} title={title} imageUrl = {imageUrl} price={price} reviews={reviews} categories={categories} 
                 id={id} />

            })} 
        </div>
    </div>
  )
}

export default Home