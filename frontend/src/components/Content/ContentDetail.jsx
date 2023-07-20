import React,{ useEffect, useState } from 'react'
import { useParams } from "react-router-dom";



const ContentDetail =() => {
const[content,setContent]= useState(null);
const {contentId} = useParams();
console.log(contentId)


  return (
    <div>ContentDetail</div>
  )
}

export default ContentDetail