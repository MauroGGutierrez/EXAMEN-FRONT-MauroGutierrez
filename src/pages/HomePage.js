import React, { useState } from "react";
import { Center } from "../center";
import { CotizList } from "../cotizList";
import "../App.css";

const HomePage = () => {
  const [cotiz, setCotizacion] = useState([]);

  const addCotizacion = (cripto) => {
    setCotizacion([...cotiz, cripto]);
  };

  return (
    <div className="app">
      <Center addCotizacion={addCotizacion} />
      <CotizList cotiz={cotiz} />
    </div>
  );
};

export default HomePage;
