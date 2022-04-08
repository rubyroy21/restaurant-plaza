import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const CafeDetailsPage=()=> {
    const {id} = useParams();
    const[data,setData] = useState({});
    const[review,setReview] = useState([]);
    const getData = () =>{
        axios.get(`http://localhost:8088/getrestaurants/${id}`).then((response)=>{
            setData(response.data);
            setReview(response.data.reviews);
        }).catch((err)=>{
            console.log(err);
        })
    }
    useEffect(()=>{
        getData();
    },[])
  return (
    <>
    <div key={data.id}>
        <h2>{data.title}</h2>
        <img src={data.imageUrl} alt="#" />
        <div className="price">{data.price}</div>
        <p>{data.reviews}</p>
        <p>{data.categories}</p>
        {/* <p>{data.payment_methods}</p> */}
    </div>
    </>
  )
}

export default CafeDetailsPage