import { useState } from "react";

const UserLineItemInput = ({ lineItemId }) => {
  const [inputType, setInputType] = useState("skill");

  const selectChangeHandler = (e) => {
    setInputType(() => e.target.value);
  };

  return (
    <div className="flex flex-col mx-4 items-center">
      <select
        onChange={selectChangeHandler}
        name="select-input"
        id="select-input"
        className="rounded-md mb-2 max-w-sm self-center"
        defaultValue={"skill"}
      >
        <option value="skill">Skill</option>
        <option value="resume">Resume Item</option>
      </select>
      {inputType === "resume" && (
        <div className="grid grid-cols-1 max-w-lg">
          <label className="text-white font-semibold" htmlFor={lineItemId}>
            Line Item Name
          </label>
          <input
            required={true}
            className="bg-slate-300 rounded-md px-4"
            type="text"
            name="lineItemName"
            id={`${lineItemId}-resume`}
          />
          <label className="text-white font-semibold" htmlFor={lineItemId}>
            Line Item Description
          </label>
          <textarea
            required={true}
            className="bg-slate-300 rounded-md px-4"
            type="text"
            name="lineItemDescription"
            id={`${lineItemId}-resume`}
          />
        </div>
      )}
      {inputType === "skill" && (
        <div className="grid grid-cols-1 max-w-lg">
          <label className="text-white font-semibold" htmlFor={lineItemId}>
            Skill Name
          </label>
          <input
            required={true}
            className="bg-slate-300 rounded-md px-4"
            type="text"
            name="skillItemName"
            id={`${lineItemId}-skill`}
          />
          <label className="text-white font-semibold" htmlFor={lineItemId}>
            Skill Description
          </label>
          <textarea
            required={true}
            className="bg-slate-300 rounded-md px-4"
            type="text"
            name="skillItemDescription"
            id={`${lineItemId}-skill`}
          />
        </div>
      )}
    </div>
  );
};

export default UserLineItemInput;
