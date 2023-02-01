import React, { useState } from "react";
import cripto from "../src/images/cripto-peso.jpg";
import { currency_list } from "./data/mock";

export const Center = ({ addCotizacion }) => {
  const [dataForm, setDataForm] = useState({
    cripto: "",
    fecha: "",
    cotizacion: "",
  });

  const handleChange = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addCotizacion(dataForm);
    setDataForm({ cripto: "", fecha: "", cotizacion: "" });
  };

  return (
    <>
      <div className="flex-center">
        <img src={cripto} alt="" className="hero" />
        <div className="box-right">
          <h1 className="title-form">CRIPTOZACION</h1>
          <form className="form-crp" onSubmit={handleSubmit}>
            <label className="label-box">
              Seleccionar criptomoneda:
              <select
                className="input-space"
                value={dataForm.cripto}
                name="cripto"
                onChange={handleChange}
              >
                {currency_list.map((cl) => (
                  <option key={cl.value}>{cl.label}</option>
                ))}
              </select>
            </label>
            <label className="label-box">
              Fecha de cotizacion:
              <input
                type="text"
                name="fecha"
                className="input-space"
                placeholder="00-00-00"
                value={dataForm.fecha}
                onChange={handleChange}
              />
            </label>
            <label className="label-box">
              Cotizacion: ${" "}
              <input
                type="text"
                name="cotizacion"
                className="input-space"
                value={dataForm.cotizacion}
                onChange={handleChange}
              />
            </label>
            <button type="submit" className="btn">
              SUBIR
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
