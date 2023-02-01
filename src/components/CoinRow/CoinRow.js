import React from "react";
import accounting from "accounting";
import { TableCell, TableRow } from "@material-ui/core";
import {
  ArrowDropDown,
  ArrowDropUp,
  BarChart,
  Delete,
} from "@material-ui/icons";
import "./stylesCoin.css";
import { CryptoDeleteCell } from "./styles";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCrypto, DELETE_CRYPTO } from "../../features/CryptoSlice";

const CoinRow = ({
  data: {
    id,
    image,
    symbol,
    current_price,
    last_updated,
    price_change_percentage_24h,
  },
}) => {
  const crypto = useSelector(selectCrypto);
  const dispatch = useDispatch();

  const deleteCrypto = (e, id) => {
    e.preventDefault();
    const _crypto = crypto.filter((item) => item !== id);
    dispatch(DELETE_CRYPTO(_crypto));
  };

  return (
    <TableRow className="table-row">
      <TableCell>
        {<img src={image} alt="coin" className="logo-coins" />}
      </TableCell>
      <TableCell>{symbol}</TableCell>
      <TableCell>{last_updated}</TableCell>
      <TableCell>{accounting.formatMoney(current_price)}</TableCell>
      <TableCell>
        <Link to={`/graph/${id}`} style={{ color: "gray" }}>
          <BarChart />
        </Link>
      </TableCell>
      <CryptoDeleteCell>
        {price_change_percentage_24h > 0 ? (
          <div>
            <ArrowDropUp style={{ color: "#0ba300" }} />
            <span style={{ color: "#0ba300" }}>
              {price_change_percentage_24h}
            </span>
          </div>
        ) : price_change_percentage_24h === 0 ? (
          <div>{price_change_percentage_24h}</div>
        ) : (
          <div>
            <ArrowDropDown style={{ color: "#ff0000" }} />
            <span style={{ color: "#ff0000" }}>
              {price_change_percentage_24h}
            </span>
          </div>
        )}
        <span
          className="delete-icon"
          style={{ color: "gray", cursor: "pointer" }}
          onClick={(e) => deleteCrypto(e, id)}
        >
          <Delete />
        </span>
      </CryptoDeleteCell>
    </TableRow>
  );
};

export default CoinRow;
