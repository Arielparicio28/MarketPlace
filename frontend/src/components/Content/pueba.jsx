import { useEffect, useState } from "react";
import axios from "axios";

export const BeersDetailPage = () => {
  const [beer, setBeer] = useState(null);
  const { beerId } = useParams();

  useEffect(() => {
    const fetchBeer = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/beer/${beerId}`
        );
        const data = response.data;
        setBeer(data);
        console.log(data);
      } catch (error) {
        console.log("No se encuentra esa cerveza por su:", error);
      }
    };
    fetchBeer();
  }, [beerId]);

  return (
    <div>
      {beer && (
        <>
          <img src={beer.image_url} width={100} alt={beer.name} />
          <h2>{beer.name}</h2>
          <p>{beer.tagline}</p>
          <p>First Brewed: {beer.first_brewed}</p>
          <p>Attenuation Level: {beer.attenuation_level}</p>
          <p>{beer.description}</p>
          <p>Contributed By: {beer.contributed_by}</p>
        </>
      )}
      {!beer && <p>Cargando Cervezas...</p>}
    </div>
  );
};
