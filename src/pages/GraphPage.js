import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import baseEndPoint from "../apis/coinGecko";
import PriceChart from "../components/PriceChart";
import VolumeChart from "../components/VolumeChart";

const formatData = (data) => {
  return data.map((coord) => {
    return {
      x: coord[0],
      y: coord[1],
    };
  });
};

const GraphPage = () => {
  const { id } = useParams();
  const [prices, setPrices] = useState({});
  const [volumes, setVolumes] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const [day, week] = await Promise.all([
        baseEndPoint.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "1",
          },
        }),
        baseEndPoint.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "7",
          },
        }),
      ]);
      setPrices({
        dailyPrices: formatData(day.data.prices),
        weeklyPrices: formatData(week.data.prices),
      });
      setVolumes({
        dailyVolumes: formatData(day.data.total_volumes),
        weeklyVolumes: formatData(week.data.total_volumes),
      });
      setIsLoading(false);
    };
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <PriceChart prices={prices} id={id} />
          <VolumeChart volumes={volumes} id={id} />
        </div>
      )}
    </>
  );
};

export default GraphPage;
