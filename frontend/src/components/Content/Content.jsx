import React, { useEffect, useState } from 'react';
import axios from "axios";
import './Content.css'; 

const Content = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get('http://localhost:3000/content');
        const data = response.data;
        setContent(data); 
      } catch (error) {
        console.log(error);
      }
    };
    fetchContent();
  }, []);

  return (
    <>
      <h1>Productos</h1>
      <div id='productos-container'>
        {
          content.map((item) => ( 
            <div key={item._id} className='data'>
              <h4>{item.titulo}</h4>
              <p>Descripcion:{item.descripcion}</p>
              <p>Precio:{item.precio}</p>
             <Link to= {`/content/${item._id}`}> <img src={item.image_url} alt="Descripcion de cada viaje" /></Link>
            </div>
          ))}
      </div>
    </>
  );
}

export default Content;


