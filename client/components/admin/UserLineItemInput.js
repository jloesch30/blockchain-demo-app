const UserLineItemInput = () => {
  return (
    <div className="flex flex-col mx-auto">
      <label className="text-white font-semibold" htmlFor="name">
        Name
      </label>
      <input
        required={true}
        className="bg-slate-300 rounded-md"
        type="text"
        name="name"
        id="name"
      />
    </div>
  );
};

export default UserLineItemInput;
