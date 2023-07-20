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
    <div>
      <h1>Productos</h1>
      <div id="productos-container">
        {content.map((item) => (
          <div key={item._id} className="data">
            <img src={item.image_url} alt="Descripción de cada viaje" />
            <div className="card-body">
              <h5 className="card-title">{item.titulo}</h5>
              <p className="card-text">Descripcion: {item.descripcion}</p>
              <p className="card-text">Precio: {item.precio}</p>
              {/* Si tienes un enlace para ir a algún lugar, puedes usar el siguiente botón */}
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content;
