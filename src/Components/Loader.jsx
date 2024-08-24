import { LineWave } from "react-loader-spinner";

const Loader = () => {
  return (
    <LineWave
      visible={true}
      height="100"
      width="100"
      color="#4B0082"
      ariaLabel="line-wave-loading"
      wrapperStyle={{}}
      wrapperClass=""
      firstLineColor=""
      middleLineColor=""
      lastLineColor=""
    />
  );
};

export default Loader;
