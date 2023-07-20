import React, { useEffect, useState } from 'react';
import axios from "axios";
import './Content.css'; 
import { Link } from 'react-router-dom';

const Content = () => {
  const [content, setContent] = useState([]);
  const [filter, setFilter] = useState("");

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/content/`);
        const data = response.data;
        setContent(data); 
      } catch (error) {
        console.log(error);
      }
    };
    fetchContent();
  }, []);

  const filteredContent = content.filter((item) =>
    item.titulo.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1>Productos</h1>
      <div id="productos-container">
        <input
          type="text"
          placeholder="Buscar por título"
          value={filter}
          onChange={handleSearchChange}
        />
        {filteredContent.map((item) => (
          <div key={item._id} className="data">
            <Link to={`/content/${item._id}`}>
              <img src={item.image_url} alt="Descripción de cada viaje" />
            </Link>
            <div className="card-body">
              <h5 className="card-title">{item.titulo}</h5>
              <p className="card-text">Precio: {item.precio}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Content;
