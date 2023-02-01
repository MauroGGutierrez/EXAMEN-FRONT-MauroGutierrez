import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const VolumeChart = ({ volumes: { dailyVolumes, weeklyVolumes }, id }) => {
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
        label: `${id} daily volumes`,
        data: dailyVolumes,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return (
    <div>
      <Bar data={data} width={600} height={250} />
    </div>
  );
};

export default VolumeChart;
