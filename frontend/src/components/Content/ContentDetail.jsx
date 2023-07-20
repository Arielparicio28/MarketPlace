import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Back from './flecha-hacia-atras.png';
import './ContentDetail.css'

const ContentDetail = () => {
  const [content, setContent] = useState(null);
  const { contentId } = useParams();

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/content/${contentId}`);
        const data = response.data;
        setContent(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchContent();
  }, [contentId]);

  return (
    <div>
      {content && (
        <>
          <div className='info-content'>
            <Link to="/content"><img className='back-content' src={Back}/></Link>
            <img src={content.image_url} width={100} alt="Content" />
          </div>
          <h4>Descripcion: {content.descripcion}</h4>
        </>
      )}
    </div>
  );
};

export default ContentDetail;
