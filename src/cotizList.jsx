import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import "./App.css";
import { styled } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCrypto } from "./features/CryptoSlice";
import baseEndPoint from "../src/apis/coinGecko";
import CoinRow from "./components/CoinRow/CoinRow";

const HeaderCell = styled(TableCell)({
  fontWeight: 800,
  fontSize: "16px",
  fontStyle: "italic",
});

export const CotizList = ({ cotiz }) => {
  const crypto = useSelector(selectCrypto);
  const [coins, setCoins] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await baseEndPoint.get("/coins/markets", {
          params: {
            vs_currency: "usd",
            ids: crypto.join(),
          },
        });
        setCoins(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    if (crypto.length) {
      fetchData();
    } else {
      setCoins([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [crypto]);

  return (
    <div className="list-cards">
      <h1>Ultimas Cotizaciones</h1>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <HeaderCell>Imagen</HeaderCell>
              <HeaderCell>Simbolo</HeaderCell>
              <HeaderCell>Ultima cotizacion</HeaderCell>
              <HeaderCell>cotizacion</HeaderCell>
              <HeaderCell>grafica</HeaderCell>
              <HeaderCell>Precio-1-dia-%</HeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cotiz.map((add) => (
              <TableRow className="table-row">
                <TableCell>NUEVO</TableCell>
                <TableCell>{add.cripto}</TableCell>
                <TableCell>{add.fecha}</TableCell>
                <TableCell>$ {add.cotizacion}</TableCell>
                <TableCell> NUEVO </TableCell>
                <TableCell>$ {add.cotizacion}</TableCell>
              </TableRow>
            ))}

            {coins.map((coin) => (
              <CoinRow key={coin.id} data={coin} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

// eslint-disable-next-line no-lone-blocks
{
  /* <h1> Ultimas cotizaciones </h1>
<div className="list-box">
  {cotiz.map((cripto) => (
    <div className="card" key={cripto.cotizacion}>
      <h2>{cripto.cripto}</h2>
      <h2>{cripto.fecha}</h2>
      <h2>{cripto.cotizacion}</h2>
    </div>
  ))}
</div> */
}
