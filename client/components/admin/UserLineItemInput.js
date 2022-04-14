const UserLineItemInput = ({ lineItemId }) => {
  return (
    <div className="flex flex-col mx-auto">
      <label className="text-white font-semibold" htmlFor={lineItemId}>
        Line Item Name
      </label>
      <input
        required={true}
        className="bg-slate-300 rounded-md px-4"
        type="text"
        name="lineItemName"
        id={lineItemId}
      />
      <label className="text-white font-semibold" htmlFor={lineItemId}>
        Line Item Description
      </label>
      <textarea
        required={true}
        className="bg-slate-300 rounded-md px-4"
        type="text"
        name="lineItemDescription"
        id={lineItemId}
      />
    </div>
  );
};

export default UserLineItemInput;
