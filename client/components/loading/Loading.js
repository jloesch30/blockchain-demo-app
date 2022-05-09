import ReactLoading from "react-loading";

const Loading = ({ type, color, height, width }) => {
  return (
    <div>
      <ReactLoading type={type} color={color} height={height} width={width} />
      <h1 className="text-center font-extrabold text-primaryFont">Loading</h1>
    </div>
  );
};

export default Loading;
