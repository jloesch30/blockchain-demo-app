import ReactLoading from "react-loading";

const Loading = ({ type, color }) => {
  return (
    <div>
      <ReactLoading type={type} color={color} height={300} width={300} />
      <h1 className="text-center font-extrabold text-primaryFont">Loading</h1>
    </div>
  );
};

export default Loading;
