import CanvasJSReact from "@canvasjs/react-charts";
import { useEffect, useState } from "react";
import { GetStorageType } from "../../Service/FileService";

const StorageChart = () => {
  var CanvasJSChart = CanvasJSReact.CanvasJSChart;

  const [chartOption, SetChartOption] = useState({
    animationEnabled: true,
    title: {
      text: "Storage",
      fontFamily: "Poppins",
      fontSize: 24,
    },
    subtitles: [
      {
        verticalAlign: "center",
        fontSize: 24,
        dockInsidePlotArea: true,
        fontFamily: "Poppins",
      },
    ],
    data: [
      {
        type: "doughnut",
        showInLegend: true,
        indexLabel: "{name}: {y}",
        yValueFormatString: "#,###'%'",
        dataPoints: [],
      },
    ],
  });
  useEffect(() => {
    storagetype();
  }, []);

  const storagetype = () => {
    let dat = [...chartOption.data[0].dataPoints];
    GetStorageType().then((res) => {
      console.log("--- res --- ", res);
      if (res.status === 200) {
        dat = [];
        dat.push(
          { name: "Free", y: 20, color: "#50C878" },
          { name: "Use", y: 80, color: "#C70039" }
        );
        SetChartOption((prevState) => ({
          ...prevState,
          data: [
            {
              ...prevState.data[0],
              dataPoints: dat,
            },
          ],
          subtitles: [{ ...prevState.subtitles[0], text: "20% free" }],
        }));
      } else {
        SetChartOption((pre) => ({
          ...pre,
          subtitles: [{ ...pre.subtitles[0], text: "No data found" }],
        }));
      }
    });
  };

  return (
    <>
      <CanvasJSChart options={chartOption} />
    </>
  );
};

export default StorageChart;
