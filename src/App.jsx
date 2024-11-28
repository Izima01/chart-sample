import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { chartData } from "./Data";

Chart.register(CategoryScale);

function App() {
  return (
    // <div style={{ width: "80%", margin: "0 auto" }}>
    <Line
      data={chartData}
      options={{
        scales: {
          y: {
            title: {
              display: true,
              text: "Property rating (2023)",
              padding: 20,
            },
            min: 0,
          },
        },
        // responsive: true,
        plugins: {
          legend: {
            // display: false,
          },
        },
      }}
      width={600}
      height={400}
    />
    // </div>
  );
}

export default App;
