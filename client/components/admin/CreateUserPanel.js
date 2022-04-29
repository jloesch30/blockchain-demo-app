import Nav from "../nav/Nav";
import { useState } from "react";
import UserLineItemInput from "./UserLineItemInput";
import axios from "axios";

const CreateUserPanel = () => {
  const [renderPageValue, setRenderPageValue] = useState(-1);
  const [numberOfLineItems, setNumberOfLineItems] = useState(0);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  const createNewUser = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    for (let [key, val] of formData.entries()) {
      console.log(key, val);
    }

    const config = {
      headers: { "content-type": "multipart/form-data" },
      onUploadProgress: (event) => {
        console.log(
          `Current progress:`,
          Math.round((event.loaded * 100) / event.total)
        );
      },
    };

    // submit the form data to the route
    await axios
      .post("/api/user/create", formData, config)
      .then((res) => {
        setNumberOfLineItems(0);
        setBio("");
        setName("");
      })
      .catch((err) => {
        console.log("There was an error");
      });
  };

  const handleAddLineItem = () => {
    setNumberOfLineItems((previous) => {
      if (previous <= 10) {
        return previous + 1;
      } else {
        alert("You have reached the maximum amount of line items");
        return previous;
      }
    });
  };

  return (
    <>
      <Nav
        renderPageValue={renderPageValue}
        setRenderPageValue={setRenderPageValue}
      ></Nav>
      <div className="mt-40 mx-10 px-10">
        <h1 className="font-mono font-extrabold text-[1.5rem] text-center mb-6">
          Please add your users below with their line items
        </h1>
        <form
          onSubmit={createNewUser}
          className="bg-slate-400 rounded-lg shadow-lg grid grid-cols-1 gap-2 py-5 mb-20"
        >
          <div className="flex flex-col md:mx-auto justify-center items-center md:justify-start md:items-start">
            <label className="text-white font-semibold" htmlFor="name">
              Full Name
            </label>
            <input
              required={true}
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="bg-slate-300 rounded-md w-3/4 md:w-auto px-4"
              type="text"
              name="name"
              id="name"
            />
            <label className="text-white font-semibold" htmlFor="bio">
              Bio
            </label>
            <textarea
              required={true}
              onChange={(e) => setBio(e.target.value)}
              value={bio}
              className="bg-slate-300 rounded-md w-3/4 md:w-auto px-4"
              type="text"
              name="bio"
              id="bio"
            />
          </div>
          <div className="border-b-white border-2 mx-2 my-4 border-dashed"></div>
          {[...Array(numberOfLineItems)].map((e, i) => (
            <UserLineItemInput key={i} lineItemId={i}></UserLineItemInput>
          ))}
          <button
            type="button"
            onClick={handleAddLineItem}
            className="
              transition-all 
              text-white 
              bg-primaryFont 
              mx-auto 
              my-2
              px-2 
              py-2 
              rounded-md 
              hover:shadow-lg"
          >
            Add Line Item
          </button>
          <div className="flex justify-center items-center md:justify-end md:items-end">
            <button
              type="submit"
              className="
              transition-all 
              text-white 
              bg-red-400  
              mx-4
              my-2
              px-2 
              py-2 
              rounded-md 
              hover:shadow-lg"
            >
              Submit New Demo Item
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateUserPanel;
