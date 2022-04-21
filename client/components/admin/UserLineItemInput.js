import { useState } from "react";

const UserLineItemInput = ({ lineItemId }) => {
  const [inputType, setInputType] = useState("resume");

  const selectChangeHandler = (e) => {
    setInputType(() => e.target.value);
  };

  console.log(inputType);
  return (
    <div className="flex flex-col mx-auto">
      <select
        onChange={selectChangeHandler}
        name="select-input"
        id="select-input"
        className="rounded-md"
      >
        <option value="skill">Skill</option>
        <option value="resume">Resume Item</option>
      </select>
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
