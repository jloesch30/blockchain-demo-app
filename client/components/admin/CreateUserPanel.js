import Nav from "../nav/Nav";
import { useState } from "react";
import UserLineItemInput from "./UserLineItemInput";
import axios from "axios";
import useWeb3 from "../../hooks/useWeb3";
import Loading from "../components/loading/Loading";

const CreateUserPanel = () => {
  const [renderPageValue, setRenderPageValue] = useState(-1);
  const [numberOfLineItems, setNumberOfLineItems] = useState(0);
  const { web3, address } = useWeb3();
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    console.log(loading);
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
    setLoading(false);
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
      <div className="mt-40 mx-3 max-w-6xl">
        <h1 className="font-mono font-extrabold text-[1.5rem] text-center mb-6">
          Please add your users below with their line items
        </h1>
        <p className="text-center mx-10 mb-3 text-xs md:text-base font-sans italic">
          Each user is allowed to have one profile to interact with demo. Once
          created, you will see the profile appear on the home page and can
          begin submit "skills" to be verified. If you would like to create a
          new profile, please use the delete button on your created profile.
        </p>
        <form
          onSubmit={createNewUser}
          className="bg-slate-400 rounded-lg shadow-lg grid grid-cols-1 gap-2 py-5 mb-36"
        >
          <div className="grid grid-col-1 place-items-center">
            <div className="flex flex-col md:mx-auto justify-center items-center mx-3">
              <label className="text-white font-semibold" htmlFor="name">
                Wallet Address
              </label>
              <input
                value={address}
                className="bg-slate-300 rounded-md w-full px-4"
                type="text"
                name="address"
                id="address"
                readOnly
              />
              <p className="text-xs text-center w-2/3 text-white mb-4">
                This address is inputted by default from your connected wallet
              </p>
              <label className="text-white font-semibold" htmlFor="name">
                Full Name
              </label>
              <input
                required={true}
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="bg-slate-300 rounded-md w-full px-4"
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
                className="bg-slate-300 rounded-md mx-1 px-4 w-full"
                type="text"
                name="bio"
                id="bio"
              />
            </div>
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
            {loading ? (
              <Loading
                type={"balls"}
                color={"#0274B3"}
                width={100}
                height={100}
              />
            ) : (
              <button
                disabled={loading}
                type="submit"
                className={`
              transition-all
              text-white 
              ${loading ? "bg-slate-600" : "bg-red-500"}
              mx-4
              my-2
              px-2 
              py-2 
              rounded-md 
              hover:shadow-lg`}
              >
                Submit New Demo Item
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateUserPanel;
