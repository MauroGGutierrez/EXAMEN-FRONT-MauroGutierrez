import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { chartOptions } from "./chartOptions";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const PriceChart = ({ prices: { dailyPrices, weeklyPrices }, id }) => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
    ],
    datasets: [
      {
        label: `${id} daily prices`,
        data: dailyPrices,
        fill: true,
        backgroundColor: "rgba(255,99,132,0.3)",
        borderColor: "rgba(255,99,132)",
      },
    ],
  };

  return (
    <div>
      <Line data={data} width={800} height={250} options={chartOptions} />
    </div>
  );
};

export default PriceChart;
