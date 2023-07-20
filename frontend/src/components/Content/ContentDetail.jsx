import React,{ useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";


const ContentDetail =() => {
const[content,setContent]= useState(null);
const {contentId} = useParams();

useEffect(()=> {
  const fetchContent = async() => {
    try{
      const response = await axios.get(`http://localhost:3000/content/${contentId}`)
      const data = response.data
      setContent(data)
    }catch(error){
      console.log(error)
    }
  };
  fetchContent()
},[contentId])





  return (
<div>
{content && (
<>
<img src={content.image_url}  width={100}/>
<h4>Descripcion:{content.descripcion}</h4>




</>


)}

</div>




  )
}

export default ContentDetail