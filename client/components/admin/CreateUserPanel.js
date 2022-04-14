import Nav from "../nav/Nav";
import { useState } from "react";
import UserLineItemInput from "./UserLineItemInput";

const CreateUserPanel = () => {
  const [renderPageValue, setRenderPageValue] = useState(-1);
  const [numberOfLineItems, setNumberOfLineItems] = useState(0);

  const createNewUser = () => {};

  const handleAddLineItem = () => {
    setNumberOfLineItems((previous) => previous + 1);
  };

  return (
    <>
      <Nav
        renderPageValue={renderPageValue}
        setRenderPageValue={setRenderPageValue}
      ></Nav>
      <div className="mt-40 mx-10 px-10">
        <h1 className="font-mono font-extrabold text-[1.5rem] text-center">
          Please add your users below with their line items
        </h1>
        <form className="bg-slate-400 rounded-lg shadow-lg grid grid-cols-1 gap-2 py-5">
          <div className="flex flex-col mx-auto">
            <label className="text-white font-semibold" htmlFor="name">
              Full Name
            </label>
            <input
              required={true}
              className="bg-slate-300 rounded-md"
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div className="border-b-white border-2 mx-2 border-dashed"></div>
          {[...Array(numberOfLineItems)].map((e, i) => (
            <UserLineItemInput key={i}></UserLineItemInput>
          ))}
          <button
            onClick={handleAddLineItem}
            className="transition-all text-white bg-primaryFont mx-auto px-2 py-2 rounded-md hover:shadow-lg"
          >
            Add Line Item
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateUserPanel;
