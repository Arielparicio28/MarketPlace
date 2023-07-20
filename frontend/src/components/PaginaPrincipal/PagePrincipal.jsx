import React from "react";
import Search from "../Busqueda/Search";


 function PagePrincipal() {

  
  return (
    <div className="d-flex justify-content-center gap-3">
      <Search/>
      <h1 className="">¡Vive la Historia,Hoy!</h1>
      <h5 className="d-flex justify-content-center gap-3">
        Descubre momentos históricos re-creados con inteligencia artificial y
        sumérgete en la experiencia como si estuvieras allí.
      </h5>
      <div >
      <img className="d-flex justifiy-content-right gap-2" src="Rectangle 2@2x.png" alt="" />
      </div>
    </div>
  );
}
export default PagePrincipal