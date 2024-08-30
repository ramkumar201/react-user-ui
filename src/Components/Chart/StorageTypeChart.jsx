import CanvasJSReact from "@canvasjs/react-charts";
import { useEffect, useState } from "react";
import { GetStorageType } from "../../Service/FileService";

const Chart = () => {
  var CanvasJSChart = CanvasJSReact.CanvasJSChart;

  const [chartOption, SetChartOption] = useState({
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: "File Type's",
      fontFamily: "Poppins",
      fontSize: 24,
    },
    data: [
      {
        type: "pie",
        startAngle: 75,
        toolTipContent: "<b>{label}</b>: {y}%",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}%",
        dataPoints: [
          { y: 18, label: "Docx/Doc", color: "#3a9ff2" },
          { y: 45, label: "PDF", color: "#C70039" },
          { y: 13, label: "Image" },
          { y: 24, label: "Other's" },
        ],
      },
    ],
  });
  useEffect(() => {
    storagetype();
  }, []);

  const storagetype = () => {
    // let dat = [...chartOption.data[0].dataPoints];
    GetStorageType().then((res) => {
      if (res.status === 200) {
        // dat = [];
        // dat.push(
        //   { name: "pdf", y: 5 },
        //   { name: "img", y: 31 },
        //   { name: "video", y: 40 },
        //   { name: "doc/docx", y: 7 },
        //   { name: "Free", y: 17 }
        // );
        // SetChartOption((prevState) => ({
        //   ...prevState,
        //   data: [
        //     {
        //       ...prevState.data[0],
        //       dataPoints: dat,
        //     },
        //   ],
        //   subtitles: [{ ...prevState.subtitles[0], text: "17% Free" }],
        // }));
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

export default Chart;
